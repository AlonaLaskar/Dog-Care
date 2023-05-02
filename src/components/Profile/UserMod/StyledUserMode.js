import styled from 'styled-components';

const StyledUserMode = styled.div`
    position: absolute;
    transform: translate(-45%, 20%);
    width: 95%;

    .sarch {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10px;
        position: absolute;
        top: 10%;
        left: 0%;

    }
    
    ion-text {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        /* identical to box height */
        display: flex;
        align-items: center;
        color: #000000;
    }

    .wakkingText {


        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 40px;
        /* identical to box height */
        display: flex;
        align-items: center;
        margin-left: 10px;
        color: #000000;

    }

    .keepingChecked {
        margin-left: 10px;
     
    }
    .keepingText {
        margin-left: 10px;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 40px;
        /* identical to box height */

        display: flex;
        align-items: center;

        color: #000000;
    }

    .price{
       
        position: relative;
        left: 0%;
        top: -30%;
        /* transform: translateY(20%); */
      &>ion-text {
       position: absolute;
         left: 2%;
            top: 0%;
            bottom: 0%;
            font-family: 'Nunito';
            margin-bottom: 10px;
      }

    }

    ion-input {
        border-radius: 10px;
        margin-top: 10px;
        width: 60%;
        position: relative;
        left: 7%;
        transform: translateY(90px);
        border-radius: 10px;
        border: 1px solid #000000;
        padding: 10px;
        &>input {

        }

   

    }
    ion-button {
        position: absolute;
        left: 80%;
        top: 90%;
    }
        



`;
export default StyledUserMode;