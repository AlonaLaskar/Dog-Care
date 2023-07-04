import styled from 'styled-components';

const StyledUserProfile = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  ion-card.card {
    max-width: 580px;
    border-radius: 10px;
    margin: 0;
  }
  ion-label.name {
    font-family: Nunito;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(0, 0, 0);
    justify-content: center;
    margin-top: 20px;
  }

  ion-card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ion-button {
        width: 36px;
        height: 36px;
        --padding-start: 0;
        --padding-end: 0;
        --border-radius: 100%;
        --box-shadow: 0px 2px 3px #00000061;
        --background:#fb8500;
    }
  }

  ion-card-title {
    font-family: 'Arial Rounded MT Bold';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #024c71;
    margin-bottom: 0;
  }
  ion-card-subtitle {
    display: flex;
    align-items: center;
    color: #000000;
    margin-bottom: 10px;
  }
  .header .title {
    font-family: 'Arial Rounded MT Bold';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #024c71;
    margin-bottom: 10px;
  }

  ion-img {
    height: 117px;
    width: 117px;
    border-radius: 100%;
    object-fit: cover;
    overflow: hidden;
    margin: auto;
  }

  ion-label.location {
    font-family: Nunito;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 27px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(0, 0, 0);
    justify-content: center;
    // margin-top: 20px;
  }

  .bio {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 110.9%;
    display: flex;
    align-items: center;
    color: #000000;
  }

  ion-toggle {
    font-family: 'Nunito';
  }

  ion-text {
    font-family: Nunito;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: rgb(0, 0, 0);
    display:block;
    margin:10px 0;

    ion-label.bio {
      font-family: Nunito;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
    }
  }

  ion-button {
    --background: #EA5A47;
    border-radius: 4px;
    font-family: Nunito;
    font-weight: 600;
  }

  ion-segment.mode {
    width: 100%;
    height: 7%;
    background: #ffffff;
    border-radius: 10px;
    border: 1px solid #024c71;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
`;

export default StyledUserProfile;