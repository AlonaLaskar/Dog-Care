import styled from 'styled-components';

const StyledSingleComments = styled.div`

align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;



ion-card {
    
  background: #ffffff;
  border: 2px solid #024c71;
  border-radius: 10px;
  
  box-sizing: border-box;
    width:350px;
    height: 150px;
    margin-bottom: 10px;
}

ion-card-header{
    display: flex;
    align-items: center;
    margin-left: 10px;
    justify-content: space-between;
    margin-bottom: 2%;


    ion-avatar {
        width: 50px;
    height: 50px;
    position: absolute;
    top: 104%;
    left: -1%;
        transform: translate(0%, -50%);
    }
    ion-label.name{
        position: absolute;
        top: 10%;
        left: 16%;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 153.4%;
        
    }
    ion-label.date{
        position: absolute;
        top: 10%;
        left: 63%;
        font-family: 'Montserrat';
        font-style: normal;
        font-size: 12px;

    
    }
}

ion-card-content {
        margin-left: 10px;
        width: 85%;
        position: absolute;
        top: 50%;
        
        ion-label span{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 153.4%;
            position: absolute;
            top: -20%;
            left: 0%;
            white-space: 'pre-wrap';

        }
    }
    ion-button.trash{
          position: absolute;
         
         width: 50px;
         transform: translate(90%, 450%);
    }
  



    `;

export default StyledSingleComments;
