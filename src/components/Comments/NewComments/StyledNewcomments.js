import styled from 'styled-components';

const StyledNewcomments = styled.div`
  form {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    ion-textarea {
      box-sizing: border-box;
      height: 40px;
      width: 76%;
      border-radius: 50px;
      --padding-start: 10px;
      background: #ffffff;
      border: 1px solid #024c71;
      border-radius: 50px;
    }
    .add {
      width: 20%;
      height: 40px !important;
    }
  }
`;

export default StyledNewcomments;
