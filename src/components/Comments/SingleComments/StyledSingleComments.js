import styled from 'styled-components';

const StyledSingleComments = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  ion-card {
    background: #ffffff;
    border: 1px solid #024c71;
    border-radius: 10px;
    width: 100%;
    // height: 150px;
    margin-bottom: 0;
  }
  .user-info {
    flex-direction: column;
    align-items: flex-start !important;
    ion-label {
      line-height: 1;
    }
  }
  .postText {
    padding-top: 6px;
  }
  ion-button.trash {
    width: 35px;
    margin-left: auto;
    ion-icon {
      margin: 0;
    }
  }

  //   ion-card-header {
  //     display: flex;
  //     align-items: center;
  //     margin-left: 10px;
  //     justify-content: space-between;
  //     margin-bottom: 2%;

  //     ion-avatar {
  //       width: 50px;
  //       height: 50px;
  //       position: absolute;
  //       top: 104%;
  //       left: -1%;
  //       transform: translate(0%, -50%);
  //     }
  //     ion-label.name {
  //       position: absolute;
  //       top: 10%;
  //       left: 16%;
  //       font-family: 'Montserrat';
  //       font-style: normal;
  //       font-weight: 600;
  //       font-size: 18px;
  //       line-height: 153.4%;
  //     }
  //     ion-label.date {
  //       position: absolute;
  //       top: 10%;
  //       left: 63%;
  //       font-family: 'Montserrat';
  //       font-style: normal;
  //       font-size: 12px;
  //     }
  //   }

  //   ion-card-content {
  //     margin-left: 10px;
  //     width: 85%;
  //     position: absolute;
  //     top: 50%;

  //     ion-label span {
  //       font-family: 'Montserrat';
  //       font-style: normal;
  //       font-weight: 600;
  //       font-size: 14px;
  //       line-height: 153.4%;
  //       position: absolute;
  //       top: -20%;
  //       left: 0%;
  //       white-space: 'pre-wrap';
  //     }
  //   }
`;

export default StyledSingleComments;
