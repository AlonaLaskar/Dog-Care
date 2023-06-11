import styled from 'styled-components';

const StyledPeopleULike = styled.div`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: scroll;

    .title {
        position: absolute;
        left: -40%;
        right: 0%;
        top: 110%;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
    }
    ion-list {
    position: relative;
    width: 272px;
    height: 213px;
    background: #ffffff;
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .city ion-text {
    position: absolute;
    top: 40%;
    left: 7%;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #000000;
    
  }
  .date ion-text {
    position: absolute;
    top: 50%;
    left: 7%;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #000000;
    
  }
  span {
    margin-left: 5px;
    margin-right: 5px;
  }
  .time ion-text {
    position: absolute;
    top: 60%;
    left: 7%;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .payment ion-text {
    position: absolute;
    top: 70%;
    left: 7%;
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
    top: 16%;
    left: 40%;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  ion-title{
    position: absolute;
    left: 20%;
    right: 0%;
    top: 6%;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
  }
    ion-avatar{
        position: absolute;
        left: 7%;
        top: 10%;
    }



































    `;

export default StyledPeopleULike;
