import styled from 'styled-components';

const StyledPost = styled.div`
position: relative;
  ion-card {
  box-sizing: border-box;
  border-radius: 10px;
  background: #ffffff;
  border: 2px solid #024c71;
  border-radius: 10px;
  width: 90%;
  position: relative;


  ion-card-content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  



     
    ion-text {
      height: 36px;
      width: 312px;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 13.5px;
      line-height: 91.9%;
      display: flex;
      color: #000000;

    }
   
    ion-button {
      background: #FFFFFF;
    
      border-radius: 50px;
      box-sizing: border-box;
      height: 26px; 
      width: 115px;
    
      &:nth-of-type(1) {
        position: absolute;
        top: -10%;
        left: 72%;
     
  }
      &:nth-of-type(2) {
        position: absolute;
        top: -10%;
        left: 36%;
     
  }
      &:nth-of-type(3) {
        position: absolute;
        top: -10%;
        left:0%;
   
  }
}
  }


  }

`;

export default StyledPost;