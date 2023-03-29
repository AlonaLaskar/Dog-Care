
import Header from './HeaderPost';
import PropTypes from 'prop-types';
import { IonCard,IonCardContent,IonCardHeader,IonText } from '@ionic/react';
import Action from './Actions';

export default function Post({ post}) {
    return (
        
        <IonCard style={{
            maxWidth: '800px',
            margin: '2%',
            padding: '10px',
            backgroundColor: 'gray.50',
            border: '1px solid rgb(227, 213, 202)',
            borderRadius: '10px',
           
        }}>
            <Header post={post} />
            <IonCardContent
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                padding: '10px',
                backgroundColor: 'white',
                border: '1px solid rgb(227, 213, 202)',
                borderRadius: '10px',

            }}
            >
                <IonText style={{
                    fontSize: '14px',
                    color: 'gray.500',
                    fontWeight: 'bold',


                }}>
                    {post.text}
                </IonText>
                <Action  post={post}/>
            </IonCardContent>
        </IonCard>
       
    );



}

Post.propTypes = {
    post: PropTypes.any
    };