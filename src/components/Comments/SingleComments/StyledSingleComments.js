import styled from 'styled-components';

const StyledSingleComments = styled.div`
 
    width:95%;
    height: 150px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #024c71;
    border-radius: 10px;
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
        right: 100%;
    }



    `;

export default StyledSingleComments;
