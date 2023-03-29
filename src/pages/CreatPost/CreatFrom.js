import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

import { useState } from 'react';
import { IonTextarea } from '@ionic/react';


export const CreatFrom = () => {
  const [error, setError] = useState(null);

  const schema = yup.object().shape({
    title: yup.string().nullable().required('כותרת הינה שדה חובה'),
    description: yup.string().nullable().required('תיאור הינו שדה חובה'),
    image: yup.string(),
    price: yup.number().nullable().required('מחיר הינו שדה חובה'),
  });


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });


  const onSubmit = async (data) => {
 

    try {
      const docRef = await addDoc(collection(db,'posts'), {
        title: data.title,
        description: data.description,
        image: data.image,
        price: data.price
      });
    
      
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
      setError(e.message);
    }
  };

  return (
    <div className="form">
      <h1>Create Post</h1>
      <form >
        <div className="form-group">
          <input type="text" placeholder="כותרת" {...register('title')} />
          <p>{errors.title?.message }</p>
        </div>
        <div className="form-group">
          <IonTextarea placeholder="תיאור" {...register('description')} />
          <p>{errors.description?.message}</p>
        </div>
        <div className="form-group">
          <input type="file" placeholder="תמונה" {...register('image')} />
        </div>
        <div className="form-group">
          <input type="number" placeholder="מחיר" {...register('price')} />
        </div>
        <div className="form-buttons">
          <button type="submit">Create</button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};
