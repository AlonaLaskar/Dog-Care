import styled from 'styled-components';

const StyledNewcomments = styled.div`
  form {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    ion-input {
      box-sizing: border-box;
      height: 30px;
      min-height:30px !important;
      width: calc(100% - 40px);
      border-radius: 50px;
      --padding-start: 10px;
      --padding-end: 10px;
      background: #ffffff;
      border: 1px solid #024c71;
      border-radius: 50px;
    }
    .add {
      width: 30px;
      height: 30px !important;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0;
      background: #FB8500;
      border: 0;
      color: #fff;
      ion-icon {
        transform: rotate(-35deg);
        font-size: 17px;
        margin:0;
      }
    }
  }
`;

export default StyledNewcomments;