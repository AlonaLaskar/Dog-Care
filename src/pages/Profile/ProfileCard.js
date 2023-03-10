import React from 'react';
import PropTypes from 'prop-types';

const SocialNetworkProfile = ({ photo, name, age, personalInfo }) => {
   return (
     <ion-app>
       <ion-header translucent>
         <ion-toolbar>
           <ion-title>Profile</ion-title>
         </ion-toolbar>
       </ion-header>
       <ion-content fullscreen>
         <ion-card>
           <img src={photo} />
           <ion-card-header>
             <ion-card-title>{name}, {age}</ion-card-title>
           </ion-card-header>
           <ion-card-content>
             {personalInfo}
           </ion-card-content>
         </ion-card>
       </ion-content>
     </ion-app>
   );
};

SocialNetworkProfile.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  personalInfo: PropTypes.string.isRequired,
};

export default SocialNetworkProfile;
