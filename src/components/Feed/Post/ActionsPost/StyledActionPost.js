import styled from 'styled-components';

const StyledActionPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid rgb(227, 213, 202);
  border-radius: 10px;
  padding: 10px;

  & > button {
    margin: 5px;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 10px;
    border-radius: 50px;
  }

  & > button:first-child {
    background-color: var(--ion-color-primary);
    color: white;
  }

  & > button:nth-child(2) {
    background-color: var(--ion-color-secondary);
    color: white;
  }

  & > button:last-child {
    background-color: var(--ion-color-danger);
    color: white;
  }
`;

export default StyledActionPost;
