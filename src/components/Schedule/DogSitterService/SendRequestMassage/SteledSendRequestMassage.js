import styled from 'styled-components';
import { IonPage } from '@ionic/react';
const SteledSendRequestMassage = styled(IonPage).attrs({ className: 'ion-padding' }).attrs({ className: 'ion-padding' })`
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
.contener{
width: 350px;
height: 668px;
background: #FFFFFF;
border-radius: 10px;
position: relative;
}
h1{
width: 345px;
height: 44px;
font-family: 'Nunito';
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 44px;
/* identical to box height */
align-items: center;
color: #024C71;
position: absolute;
left: 5.88%;
right: 6.21%;
top: 6.23%;
bottom: 76.92%;
}

ion-card{
height: 273px;
width: 306px;
border-radius: 10px;
background: #FFFFFF;
border: 3px solid #024C71;
border-radius: 10px;
position: absolute;
left: 1.88%;
right: 6.21%;
top: 16.13%;
bottom: 23.5%;
}
ion-card-title{
position: absolute;
left: 5.88%;
right: 6.21%;
top: 6.23%;
bottom: 76.92%;

font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
color: #024C71;
}
.details{
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 10px;
position: absolute;
left: 8.88%;
right: 6.21%;
top:30.23%;
bottom: 76.92%;
margin: 10px;
}
.date{
font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
color: #024C71;
margin: 10px;
}
.time{
color: #024C71;
position: absolute; 
left: 8.88%;
right: 6.21%;
top: 50.23%;
bottom: 76.92%;
}
.cash{

color: #024C71;
position: absolute;
left: 8.88%;
right: 6.21%;
top: 70.23%;
bottom: 76.92%;
}
ion-icon{
margin-top: 5.0px;
}
#ionicon{
margin-top: 5.0px;

}
.massege{
position: absolute;
left: 8.88%;
right: 6.21%;
top: 77.23%;
bottom: 76.92%;
font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 23px;
display: flex;
align-items: center;
color: #024C71;

}
ion-button{
height: 35px;
width: 155px;
background: #FB8500;
border-radius: 6px;
color: #FFFFFF;
position: absolute;
left: 15%;



}




`;
export default SteledSendRequestMassage;