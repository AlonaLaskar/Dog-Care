import styled from 'styled-components';

const StyledSingleComments = styled.div`
 
    width:100%;
    border-radius: 10px;
    background: #ffffff;
    border: 2px solid #024c71;
    height: 150px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
  
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    display: block;

    .header {
        display: flex;
        align-items: center;
        margin-bottom: 2px;
        width: 15%;
        background: white;
        position: absolute;
        top: 10%;

    }

    .text {
        margin-left: 10px;
        width: 85%;
        position: absolute;
        top: 50%;
        

    }
    .delete{
        position: absolute;
        top: 70%;
        left: 78%;
    }



    `;

export default StyledSingleComments;
