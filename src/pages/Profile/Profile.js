import StyledProfile from './StyledProfile';

import SocialNetworkProfile from './ProfileCard';

const Profile = () => {
  return (
    <StyledProfile>
        <SocialNetworkProfile
        photo="https://example.com/john.jpg"
        name="John"
        age="30"
        personalInfo="Loves to hike and explore the outdoors!"
      />
      <SocialNetworkProfile
        photo='https://www.safari.co.il/Images/_croppedImage201861213_3345890.png'
        name='אלונ לסקר'
        age='27'
        personalInfo='lllllllllllllllllll
        llllllllllllllllll
        lllllllllllll!'
      />
      <SocialNetworkProfile
       photo='https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403'
       name='עומר בת מארי'
        age='27'
        personalInfo='אני עומר הבת של מארי זצ"ל רוצה להגיד לכם שאני כל יום שעה וחצי בגינת כלבים.
        ואני מאוד אוהבת כלבים ,תבחרו אותי כדאי לכם אני גם זולה וטובה לב'
      />
    </StyledProfile>

    
  );
};

export default Profile;
