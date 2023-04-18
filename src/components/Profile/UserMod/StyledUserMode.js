import styled from 'styled-components';

const StyledUserMode = styled.div`
ion-list{
    position: absolute;
    transform: translate(-60%, 0%);

    & > ion-text {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        /* identical to box height */
        display: flex;
        align-items: center;
        color: #000000;
        margin-bottom: 10px;
        margin-top: 10px;
        }
    
&>ion-label{
    font-family: 'Nunito';
    justify-content: flex-start;
    font-style: normal;
    font-weight: 600;

    
}
        

}


`;
export default StyledUserMode;