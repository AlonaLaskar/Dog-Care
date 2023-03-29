
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';



function DisplayingPost(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            const posts = querySnapshot.docs.map(doc => doc.data());
            setPosts(posts);
        };
        getPosts();
    }, []);

    return(
        
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                </div>
            ))}
        </div>


    );

}
export  default DisplayingPost;