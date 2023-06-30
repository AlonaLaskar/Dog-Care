import styled from 'styled-components';

const StyledNewPost = styled.div`
  // form {
  //   & ion-textarea {
  //     box-sizing: border-box;
  //     position: absolute;
  //     width: 85%;
  //     max-height: 10px;

  //     left: 13%;
  //     border-radius: 50px;
  //     top: 10%;
  //     right: 14%;
  //     background: #ffffff;
  //     border: 1.5px solid #024c71;
  //     border-radius: 50px;

  //     &::placeholder {
  //       position: absolute;
  //       left: 20.79%;
  //       right: 48.16%;
  //       top: 19.59%;
  //       bottom: 58.76%;
  //       font-family: 'Montserrat';
  //       font-style: normal;
  //       font-weight: 600;
  //       font-size: 14px;
  //       line-height: 153.4%;
  //       /* or 21px */

  //       display: flex;
  //       align-items: center;

  //       color: rgba(0, 0, 0, 0.5);
  //     }
  //   }

  //   & ion-button {
  //     height: 26px;
  //     width: 100px;
  //     background: #ffffff;
  //     border: 1px solid #024c71;
  //     border-radius: 50px;
  //     border-radius: 50px;
  //     box-sizing: border-box;
  //     position: absolute;
  //     top: 62%;
  //     right: 10%;

  //     &:nth-of-type(1) {
  //       position: absolute;
  //       left: 37.63%;
  //       right: 36.05%;
  //       top: 57.73%;
  //       bottom: 15.46%;
  //     }
  //     &:nth-of-type(2) {
  //       position: absolute;
  //       left: 4.74%;
  //       right: 68.95%;
  //       top: 57.73%;
  //       bottom: 15.46%;
  //     }
  //     &:nth-of-type(3) {
  //       position: absolute;
  //       left: 70.53%;
  //       right: 3.16%;
  //       top: 57.73%;
  //       bottom: 15.46%;
  //     }
  //   }
  //   & ion-avatar {
  //     position: absolute;
  //     left:1%;
  //     top: 14%;
  //     height: 39px;
  //     width: 40px;
  //     border-radius: 0px;

  //     border-radius: 0px;
  //   }
  // }

  max-width:600px;
  margin:auto;
  form {
    background: rgb(255, 255, 255);
    border: 2px solid rgb(2, 76, 113);
    border-radius: 10px;
    width:95%;
    margin:auto;
    ion-textarea {
      border: 1.5px solid #024c71;
      border-radius: 10px;
      --padding-start: 10px;
      --highlight-color-focused: none;
    }
    ion-button {
      height:28px;
      background: #ffffff;
      border: 1px solid #024c71;
      border-radius: 50px;
      font-size:12px;
      ion-icon {
        font-size:15px;
        &.post-icon{
          font-size:13px;
        }
      }
    }
    .write-post-col {
      display: flex;
      gap: 12px;
      ion-avatar {
        flex: 1 0 50px;
        width: 50px;
          height: 50px;
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`;

export default StyledNewPost;