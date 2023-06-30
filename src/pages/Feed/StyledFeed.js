import styled from 'styled-components';
import { IonPage} from '@ionic/react';

const StyledFeed = styled(IonPage).attrs({ className: 'ion-padding' })`
    ion-content{
        --background:transparent;
    }
`;

export default StyledFeed;