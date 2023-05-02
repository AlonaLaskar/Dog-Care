import styled from 'styled-components';

const StyledUserProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 10px;
    height: 100%;
    overflow: hidden;
    position: relative;
 
   
    ion-card {
        height: 100%;
        width: 100%;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        align-items: center;
        justify-content: center;
        border-radius: 0px 0px 0px 0px;
    }
    ion-card-header {
        height: 10%;
        width: 100%;
        position: absolute;
        bottom: 90%;
        border-radius: 0px 0px 0px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;

   
    }

    ion-card-content {
        height: 100%;
        width: 100%;
        position: absolute;
        top:10%;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 10px;

    }
    img {
        height: 117px;
        width: 117px;
        border-radius: 50%;
        position: absolute;
        left: 6%;
        top: 9%;
        border-radius: 50%;
    }
    .name { 
        position: absolute;
        left: 41%;
        top: 2%;
        bottom: 76.31%;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        /* identical to box height */
        display: flex;
        align-items: center;
        color: #000000;
        }

        .location {
            position: absolute;
            left: 38.08%;
            top: 0%;
            bottom: 59.38%;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            /* identical to box height */
            display: flex;
            align-items: center;
            color: #000000;
        }
       
        .aboutMe {
            width: 70%;
            position: absolute;
            left: 10%;
            top: 30%;
        }

        ion-toolbar {
            position: absolute;
            left: 0%;
            top: 1%;
            bottom: 0%;
            width: 100%;
            height: 90%;
        }
   


      

`;

export default StyledUserProfile;
