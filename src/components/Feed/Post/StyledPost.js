import styled from 'styled-components';

const StyledPost = styled.div`

align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  ion-card.postcard {
    width: 95%;
    height: 200px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
  
  ion-card-header{
      display: flex;
      align-items: center;
      margin-left: 10px;
      justify-content: space-between;
      margin-bottom: 2%;
  
  
      ion-avatar {
        width: 50px;
      height: 50px;
      position: absolute;
      top: 104%;
      left: -1%;
          transform: translate(0%, -50%);
      }
      ion-label.name{
          position: absolute;
          top: 10%;
          left: 16%;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 153.4%;
          
      }
      ion-label.date{
          position: absolute;
          top: 10%;
          left: 63%;
          font-family: 'Montserrat';
          font-style: normal;
          font-size: 12px;
  
      
      }
  }
  
    ion-card-content {
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;


      ion-label.postText {
        height: 36px;
        width: 312px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 13.5px;
        line-height: 91.9%;
        display: flex;
        color: #000000;
        position: absolute;
        top: -10%;
        left: 18%;
        background-color: pink;
      }
      }

      ion-button {
        background: #ffffff;
        border-radius: 50px;
        box-sizing: border-box;
        height: 26px;
        width: 115px;
        position: relative;

        &:nth-of-type(1) {
          position: absolute;
          top: 60%;     
               left: 72%;
        }
        &:nth-of-type(2) {
          position: absolute;
          top: 60%;
          left: 36%;
        }
        &:nth-of-type(3) {
          position: absolute;
          top: 60%;
          left: 0%;
        }



      }      
    }
  
`;

export default StyledPost;
