import styled from 'styled-components';
import { IonPage } from '@ionic/react';
const SteledSendRequestMassage = styled(IonPage).attrs({ className: 'ion-padding' }).attrs({ className: 'ion-padding' })`
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
max-width:600px;
margin:auto;
.contener{
width: 100%;
background: #FFFFFF;
border-radius: 10px;
position: relative;
}
h1{
font-family: 'Nunito';
font-style: normal;
font-weight: 800;
font-size: 28px;
line-height: 44px;
margin:0;
align-items: center;
color: #024C71;
text-align:center;
}

ion-card{
width: 100%;
border-radius: 10px;
background: #FFFFFF;
border: 3px solid #024C71;
border-radius: 10px;
margin:0;
padding:16px;
text-align:center;
margin-bottom: 16px;
ion-text {
    display: flex;
    align-items: flex-start;
    text-align:left;
}
}
ion-card-title{
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 23px;
text-align: center;
color: #024C71;
}
.details{
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 10px;
margin: 10px;
}
.date{
font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
color: #024C71;
}
ion-icon{
color:#FB8500;
margin-right:8px;
flex: 1 0 15px;
align-self: flex-start;
margin-top: 3px;
}
#ionicon{
margin-top: 5.0px;

}
.massege{
font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 16px;
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
font-family:nunito;
a {
    font-family: nunito;
    font-weight: 800;
    text-decoration:none;
    color:#FFF;
}
}




`;
export default SteledSendRequestMassage;