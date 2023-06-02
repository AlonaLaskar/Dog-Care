import styled from 'styled-components';

const StyledNewAvailability = styled.div`
margin-top: 50px;

ion-card {
    position: relative;
    width: 326px;
    height: 238px;
    background: #ffffff;
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  ion-text {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .role ion-text {
    position: absolute;
    top: 20%;
    left: 7%;
    
  }

  .date ion-text {
    position: absolute;
    top: 30%;
    left: 7%;

    
  }
  span {
    margin-left: 5px;
    margin-right: 5px;
  }
  .time ion-text {
    position: absolute;
    top: 40%;
    left: 7%;

  }
  .payment ion-text {
    position: absolute;
    top: 50%;
    left: 7%;
  
  }
  .location ion-text {
    position: absolute;
    top: 60%;
    left: 7%;

  }


  h3 {
    position: relative;
    top: -8%;
    left: 30%;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
  }

  ion-button.editButton {
    position: absolute;
    top: -2%;
    left: 82%;
    box-sizing: border-box;
  }
  ion-button.deleteButton {
    position: absolute;
    top: -2%;
    left: -2%;
    box-sizing: border-box;
  }
  ion-checkbox {
    position: absolute;
    top: 85%;
    left: 89%;
    box-sizing: border-box;
  }
  ion-button.SeeRequests {
    position: absolute;
    left: 22.09%;
    right: 24.86%;
    top: 78.52%;
    bottom: 22.72%;
    background: #fb8500;
    border-radius: 6px;
    color:  #ffffff;
    font-weight: 700;


  }
  ion-button.SeeRequests:hover {
    background: #fb8500;
    border-radius: 6px;
    color:  #ffffff;
    font-weight: 700;
  }
  ion-list{

    position: relative;
    width: 272px;
    height: 213px;
    background: #ffffff;
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: pink;
  }
  ion-modal.stack-modal {
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);
  --backdrop-background-color: #000000;
  --backdrop-filter: blur(3px);
  --border-radius: 10px;
  --height: 80%;
  --width: 80%;
}



`;

export default StyledNewAvailability;
