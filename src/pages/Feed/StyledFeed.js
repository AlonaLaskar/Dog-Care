import styled from 'styled-components';
import { IonContent } from '@ionic/react';

const StyledFeed = styled(IonContent).attrs({ className: 'ion-padding' })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: '2%';

  h1 {
    color: ${({ theme }) => theme.colors?.pageTitle};
    margin: 0;
    padding: 0 0 20px;
  }
  input.native-input.sc-ion-input-ios {
    font-family: 'Heebo';
  }

  .ion-card {
    max-width: 500px;
    max-height: auto;
    margin: 0 auto;
    padding: 10px;
  }
  .ion-card-header {
    background-color: #fff;
    border-bottom: 1px solid #ebebeb;
    padding: 0 16px;
    margin: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  > .button {
    margin-right: 85%;
  }
`;

export default StyledFeed;
