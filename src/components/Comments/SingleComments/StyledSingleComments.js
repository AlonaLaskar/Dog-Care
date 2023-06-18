import styled from 'styled-components';

const StyledSingleComments = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  ion-card {
    background: #DFEDF4;
    border: 0px;
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


`;

export default StyledSingleComments;