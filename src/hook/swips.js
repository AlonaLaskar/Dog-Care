import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  collection,
  query,
  where,
  getDoc,
  orderBy,
  getDocs
} from 'firebase/firestore';

import { db } from '../firebase';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';

export async function saveRightSwipe(availabilityId, userId, swipedUserId) {
  //!PROBLEM HERE USERID UNDIFINED
  if (!userId || userId === undefined) {
    return null;
  }

  const userChack = await checkUserRightSwipe(availabilityId, swipedUserId);

  console.log('userChack', userChack);

  const swipeRef = doc(db, 'swipes', `${availabilityId}`);
  const swipeSnapshot = await getDoc(swipeRef);
  if (swipeSnapshot.exists()) {
    await updateDoc(swipeRef, {
      rightSwipes: arrayUnion(swipedUserId)
    });
  } else {
    await setDoc(swipeRef, {
      userId: userId,
      availabilityId: availabilityId,
      rightSwipes: [swipedUserId],
      CreatedOn: new Date()
    });
  }
}
export const checkUserRightSwipe = async (availabilityId, userId) => {
  const swipesRef = collection(db, 'swipes');
  const q = query(swipesRef, where('availabilityId', '==', availabilityId));

  try {
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Document(s) found, check if user ID exists in rightSwipes array
      const swipeIds = [];
      querySnapshot.forEach((doc) => {
        const rightSwipes = doc.data().rightSwipes;
        const swipeId = doc.data().availabilityId;
        const userIdAv = doc.data().userId;

        if (rightSwipes && rightSwipes.includes(userId)) {
          swipeIds.push({ swipeId: swipeId, userIdAv: userIdAv });
        } else {
            console.log('No document found for the given availability ID');
            }
      });

      return swipeIds;
    } else {
        console.log('No document found for the given availability ID');
        return null;
        }
  } catch (error) {
    console.error('Error fetching documents: ', error);
  }
};

export function useSwipes(id) {
  const q = doc(db, 'swipes', id);
  const [swipes, isLoading] = useDocumentData(q);
  return { swipes, isLoading };
}
export async function getAllSwipesData() {
  try {
    const swipesRef = collection(db, 'swipes');
    const querySnapshot = await getDocs(swipesRef);
    const swipesData = [];

    querySnapshot.forEach((doc) => {
      // Get the document data and add it to the array
      swipesData.push(doc.data());
    });

    return swipesData;
  } catch (error) {
    console.error('Error retrieving swipes data:', error);
    throw error;
  }
}