import styled from 'styled-components';

const StyledUserProfile = styled.div`
 

flex-direction: column;
justify-content: center;
align-items: center;


    .header {
    height: 360px;
    width: 360px;
    border-radius: 10px;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 7%;
    bottom: 68.13%;
    background: #ffffff;
    border-radius: 10px;
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


  .header img {
    height: 117px;
    width: 117px;
    left: 43px;
    top: 59px;
    border-radius: 0px;
    position: absolute;
    left: 11.08%;
    right: 58.76%;
    top: 12.38%;
    bottom: 72.02%;
  }
   .header .name {
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
    .header .location {
        position: absolute;
        left: 43.81%;
        right:  18.56%;
        top: 28.69%;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 23px;
        display: flex;
        align-items: center;
        color: #000000;
    }

 
    .header .bio {
        position: absolute;
        left: 9.79%;
        right: 10.57%;
        top: 45%;
       

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 110.9%;
        /* or 18px */

        display: flex;
        align-items: center;

        color: #000000;

    }


    ion-toggle{
        position: absolute;
        left: 0%;
        right: 0%;
        top: 12%;
        color: #024C71;
    }






.mode {
    
position: absolute;
top: 48.81%;
bottom: -2.86%;
height: 450px;
width: 350px;
left: 10px;
top: 307px;
border-radius: 0px; 
background: #ffffff;





}



`;

export default StyledUserProfile;
