import styled from 'styled-components';

const StyledActionPost = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  flex-direction: column;
  ion-button {
    border: 1px solid rgb(2, 76, 113);
    border-radius: 50px;
    font-size: 10px;
    --padding-start: 10px;
    --padding-end: 10px;
    height: 24px;
    margin-right: 5px;
    --color: #024c71;
    color: #024c71;
    box-shadow: 0px 2px 3px #0000002b;
    &.active {
      background: #024c71;
      color: #fff;
    }
    @media (max-width:370px){
      font-size:7px;
    }
  }
  .action-post {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    .action-counter {
      color: #000;
      font-size: 13px;
      display: flex;
      align-items: center;
      gap: 8px;
      span {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      ion-icon {
        color: #024c71;
      }
    }
  }
`;

export default StyledActionPost;