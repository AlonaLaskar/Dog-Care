import styled from 'styled-components';

const DisplayScheduleStayle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  border: 1px;
  border: 1px solid rgb(227, 213, 202);
  border-radius: 5px;
  border-radius: 1px;

  .description {
    border: 1px solid rgb(227, 213, 202);
    border-radius: 5px;
    outline: none;
    height: 5cm;
    line-height: 16px;
    transition: all 0.3s ease-in-out;
    font-family: 'Heebo';
    margin: 20px;
  }

  h1 {
    color: ${({ theme }) => theme.colors?.pageTitle};
    margin: 0;
    padding: 0 0 20px;
  }

  .ion-text-center {
    text-align: center;
    margin: 0;
    padding: 0 0 20px;
    font-size: 1.2rem;
    font-family: 'Heebo';
    color: ${({ theme }) => theme.colors?.pageTitle};
    border: 1px solid rgb(227, 213, 202);
    border-radius: 5px;
    width: 350px;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export default DisplayScheduleStayle;
