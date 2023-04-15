import styled from 'styled-components';

const StyledNewcomments = styled.div`
box-sizing: border-box;
border-radius: 10px;
background: #ffffff;
border: 2px solid #024c71;
width: 90%;
margin: 0 auto;
margin-top: 2%;
position: relative;
flex: content;



form {
    margin-top: 10px;
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    ion-textarea{
        width: 80%;
        margin-bottom: 10px;
        position: relative;
        right: 15px;
        bottom: 10px;
        left: 15px;
        border-radius: 10px;
        border: 1px solid #024c71;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 1.2rem;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 13.5px;
        line-height: 91.9%;
        color: #000000;
    }
   .add{
    width:18%;
    position: absolute;
      right: 85%;

      transform: translateY(20%);
      transform: translateX(23%);
   }

   

}


`;

export default StyledNewcomments;
