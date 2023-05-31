import styled from 'styled-components';
import  { IonPage }  from '@ionic/react';

const StayledJobSearch = styled.div`

  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  ion-title {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 10%;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }
  .dogsitter {
    height: 237px;
    width: 350px;
    left: 0px;
    top: -95px;
    border-radius: 10px;
    box-sizing: border-box;
    position: relative;
    background: #ffffff;
    border: 3px solid #024c71;
    border-radius: 10px;
  }

  .img {
    height: 200px;
    width: 200px;
    left: 0px;
    top: 0px;
    border-radius: 10px;
    box-sizing: border-box;
    position: absolute;
    left: 20%;
    right: 0%;
    top: 20%;
    bottom: 0%;
  }
  .dogwolker {
    height: 237px;
    width: 350px;
    left: 0px;
    top: -10px;
    border-radius: 10px;
    box-sizing: border-box;
    position: relative;
    background: #ffffff;
    border: 3px solid #024c71;
    border-radius: 10px;
  }
  .text {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 83%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
  }
  h1 {
    position: absolute;
    left: 30%;
    right: 0%;
    top: -5%;
  }
  h2 {
    position: absolute;
    left: 40%;
    right: 0%;
    top: -35%;
    font-weight: bold;
  }
  .selected {
    border: 3px solid green;
  }
  ion-button {
 
bottom: 15.13%;
background: #FB8500;
border-radius: 6px;
color: #FFFFFF;
height: 35px;
width: 155px;
border-radius: 6px;

}

`;

export default StayledJobSearch;
