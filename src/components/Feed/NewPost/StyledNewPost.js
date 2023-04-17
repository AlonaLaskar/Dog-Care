import styled from 'styled-components';

const StyledNewPost = styled.div`
  box-sizing: border-box;
  height: 97px;
  width: 90%;
  position: absolute;
  left: 1.5%;
  right: 0%;
  top: 5%;
  bottom: 0%;

  border-radius: 10px;
  background: #ffffff;
  border: 2px solid #024c71;
  border-radius: 10px;

  form {
    & ion-textarea {
      box-sizing: border-box;
      position: absolute;
      left: 13%;
      width: 85%;
      height: 40%;
      border-radius: 50px;
      top: 10%;
      right: 14%;
      background: #ffffff;
      border: 1.5px solid #024c71;
      border-radius: 50px;

      &::placeholder {
        position: absolute;
        left: 20.79%;
        right: 48.16%;
        top: 19.59%;
        bottom: 58.76%;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 153.4%;
        /* or 21px */

        display: flex;
        align-items: center;

        color: rgba(0, 0, 0, 0.5);
      }
    }

    & ion-button {
      height: 26px;
      width: 100px;
      background: #ffffff;
      border: 1px solid #024c71;
      border-radius: 50px;
      border-radius: 50px;
      box-sizing: border-box;
      position: absolute;
      top: 62%;
      right: 10%;

      &:nth-of-type(1) {
        position: absolute;
        left: 37.63%;
        right: 36.05%;
        top: 57.73%;
        bottom: 15.46%;
      }
      &:nth-of-type(2) {
        position: absolute;
        left: 4.74%;
        right: 68.95%;
        top: 57.73%;
        bottom: 15.46%;
      }
      &:nth-of-type(3) {
        position: absolute;
        left: 70.53%;
        right: 3.16%;
        top: 57.73%;
        bottom: 15.46%;
      }
    }
    & ion-avatar {
      position: absolute;
      left:1%;
      top: 14%;
      height: 39px;
      width: 40px;
      border-radius: 0px;
  
     
      border-radius: 0px;
    }
  }
`;

export default StyledNewPost;
