import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledHome = styled(IonPage).attrs({ className: 'ion-padding' }).attrs({ className: 'ion-padding' })`
    .p {
        color: red;
        font-size: large;
    }
`;

export default StyledHome;
