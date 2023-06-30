import styled from 'styled-components';

const StyledNewAvailability = styled.div`
  margin-top: 20px;

  .availability-card {
    position: relative;
    width: calc(100% - 20px);
    background: #ffffff;
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 30px auto;
    padding: 36px 20px 20px 20px;
  }
  ion-text {
    font-family: Nunito;
    font-style: normal;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: rgb(0, 0, 0);
    gap: 12px;
    ion-icon {
      color: #fb8500;
    }
  }

  span {
    margin-left: 5px;
    margin-right: 5px;
  }

  h3 {
  
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
    top: -25px;
    background: #fff;
    border-radius: 100%;
    width: 45px;
    height: 45px;
    --padding-start: 0;
    --padding-end: 0;
    box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
    right: 16px;
    color: #fb8500;
    ion-icon {
      font-size:24px;
    }
  }
  ion-button.deleteButton {
    position: absolute;
    top: -25px;
    background: #fff;
    border-radius: 100%;
    width: 45px;
    height: 45px;
    --padding-start: 0;
    --padding-end: 0;
    box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
    left:16px;
    ion-icon {
      font-size:24px;
    }
  }
  .buttons {
    text-align:center;
  }

  ion-button.SeeRequests {
    background: #fb8500;
    border-radius: 30px;
    color: #ffffff;
    font-weight: 700;
  }
  ion-button.SeeRequests:hover {
    background: #fb8500;
    border-radius: 30px;
    color: #ffffff;
    font-weight: 700;
  }

`;

export default StyledNewAvailability;
