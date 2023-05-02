import styled from 'styled-components';

const StyledActionButton = styled.div`
margin-top: 10px;


  .action-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .action-button-container ion-button {
    height: 60px;
    width: 60px;
    --border-radius: 35px;
    --padding-start: 0;
    --padding-end: 0;
    --padding-top: 0;
    --padding-bottom: 0;
    margin: 0 10px;
  }
  .action-button-container ion-button.unmatch {
    --background: #333;
    --background-activate: #555;
    --background-focused: #555;
  }
    .action-button-container ion-button.match {
    --background: #f19bc6;
    --background-activate: #f19bc6;
    --background-focused: #f19bc6;
    }
`;

export default StyledActionButton;
