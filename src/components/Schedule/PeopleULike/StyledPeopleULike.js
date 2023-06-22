import styled from 'styled-components';

const StyledPeopleULike = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  max-width: 600px;
  margin: auto;
  padding: 0 10px;
  height: calc(100vh - 210px);

  .userinfo-header {
    display:flex;
    align-items:center;
    gap:10px;
    margin-bottom:10px;
    .role {
      font-size: 16px;
      opacity:0.6;
    }
  }

  .title {
    font-size: 22px;
    line-height: 28px;
    font-family: 'Nunito';
    margin-top: 10px;
    font-weight: 600;
  }
  .name {
    font-size:20px;
  }
  ion-list {
    position: relative;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 20px auto;
    padding:16px;
  }
  ion-text {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    display: flex;
    align-items: center;
    color: #000000;
    gap:10px;
  }
  ion-icon {
    color:#fb8500;
  }
  span {
    margin-left: 5px;
    margin-right: 5px;
  }
  ion-title {

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
  }

`;

export default StyledPeopleULike;
