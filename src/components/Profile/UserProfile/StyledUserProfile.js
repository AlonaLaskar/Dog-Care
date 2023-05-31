import styled from 'styled-components';

const StyledUserProfile = styled.div`

align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
margin-top: 1px;



    ion-card.card {
    position: relative;
    height: 300px;
    width: 360px;
    left: 0px;
    top: 40px;
    border-radius: 10px;
    background: #ffffff;
    border-radius: 10px;
    }

    ion-card-title {
        position: absolute;
        left: 0%;
        right: 0%;
        top: -80%;
        bottom: 0%;
        font-family: 'Arial Rounded MT Bold';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 32px;
        display: flex;
        align-items: center;
        color: #024C71;
        margin-bottom: 10px;
    }
    ion-card-subtitle {
        position: absolute;
        left: 85%;
        right: 0%;
        top: -80%;
        bottom: 0%;
        display: flex;
        align-items: center;
        color: #000000;
        margin-bottom: 10px;
    }
    .header .title {
        
        position: absolute;
        left: 16.44%;
        right: 59.02%;
        top: 4.38%;
        bottom: 92.53%;
        font-family: 'Arial Rounded MT Bold';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 32px;
        display: flex;
        align-items: center;
        color: #024C71;
        margin-bottom: 10px;

    }


ion-img {
    height: 117px;
    width: 117px;
    left: 43px;
    top: 70px;
    border-radius: 0px;
    
  }
   .name {
    height: 33px;
    width: 146px;
    left: 170px;
    top: 116px;
    position: absolute;
    left: 43.81%;
    right: 18.56%;
    top: 18.44%;
    bottom: 76.31%;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #000000;

   }
    .location {
        position: absolute;
        left: 43.81%;
        right:  18.56%;
        top: 16%;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 23px;
        display: flex;
        align-items: center;
        color: #000000;
    }

 
    .bio {
        position: absolute;
        left: 9.79%;
        right: 10.57%;
        top: 45%;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 110.9%;
        display: flex;
        align-items: center;
        color: #000000;

    }


    ion-toggle{
        position: absolute;
        left: 9.79%;
        right: 10.57%;
        top: -5%;
        font-family: 'Nunito';
    }







.mode {
    position: absolute;
    top: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    font-family: 'Nunito';
  


}



`;

export default StyledUserProfile;
