import styled from 'styled-components';

const StayledJobSearch = styled.div`

  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width:580px;
  margin:auto;

  ion-title {
    font-size: 22px;
    line-height: 28px;
    font-family: Nunito;
    margin-bottom: 10px;
    font-weight: 600;
    text-align: center;
  }
  .dogsitter {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    background: rgb(255, 255, 255);
    border: 3px solid rgb(2, 76, 113);
    border-radius: 10px;
    max-width: 400px;
    padding: 12px;
    margin-bottom: 10px;
  }
  .dogwolker {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    background: rgb(255, 255, 255);
    border: 3px solid rgb(2, 76, 113);
    border-radius: 10px;
    max-width: 400px;
    padding: 12px;
    margin-bottom: 10px;
  }
  .img {
    text-align:center;
    img {
      max-width:200px;
      margin-bottom:5px;
      border-radius:10px;
    }
  }
  .text {
    text-align: center;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
  h1 {
    margin-top: -8px;
    font-size: 22px;
    text-align: center;
  }
  h2 {
    font-weight: bold;
    margin-top: -3px;
  }
  .selected {
    border: 4px solid green;
  }
  ion-button {
 
background: #FB8500;
border-radius: 6px;
color: #FFFFFF;
height: 35px;
width: 155px;
border-radius: 6px;

}

`;

export default StayledJobSearch;