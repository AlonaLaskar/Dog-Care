
import styled from 'styled-components';


const StylesProfileCard = styled.div`
/* background: pink; */
width: 90%;
height: 90%;
ion-card {
border-radius: 20px;
}
.card-container {

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 650px;
}
.card-container >.image-container {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    
}
.card-container >.image-container > ion-img {
    object-fit: cover;
    width: 350px    ;
    height: 650px;
}
.card-container >.details-container {
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: end;
    padding: 20px;
    margin: 20px;
    background: rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
    border-radius: 10px;
}
.card-container >.details-container > .name {
    font-size: 30px;
    font-weight: bold;
}
.card-container >.details-container {
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: end;
    padding: 20px;
    margin: 20px;
    background: rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
    border-radius: 10px;
}
.card-container >.details-container >.name {
font-family: 'Nunito';
font-style: normal;
font-weight: 900;
font-size: 28px;
line-height: 38px;
/* identical to box height */

display: flex;
align-items: center;

}
.card-container >.details-container >.bio {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
}
.card-container >.details-container >.bio > ion-icon {
    margin-right: 10px;
}
.card-container >.details-container >.address {
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 106.4%;
/* or 16px */

display: flex;
align-items: center;
}
.card-container >.details-container >.address > ion-icon {
    margin-right: 10px;
}

.card-container >.details-container >.price {
    display: flex;
    align-items: center;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 106.4%;
 
    
}
.card-container>.button-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    
}
.card-container >.details-container >.price > ion-icon {
    margin-right: 10px;
    
}


`;

export default StylesProfileCard;
