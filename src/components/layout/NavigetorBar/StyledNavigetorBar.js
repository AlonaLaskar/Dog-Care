import styled from 'styled-components';

export const StyledNavigetorBar = styled.div`
  display: flex;
  flex-direction: row;
  font-family: inherit;
  background-color: red;
  .navbar-header {
    background-color: #f5f5f5;
  }

  .navbar-title {
    font-size: 1.2rem;
    font-family: inherit;
    font-weight: bold;
    color: #333;
  }

  .navbar-btn {
    margin-left: auto;
    color: #4285f4;
  }

  .navbar-item {
    font-size: 1rem;
    font-family: inherit;
    color: #333;
    text-transform: none;
    align-items: flex-end;
  }

  .navbar-item:hover {
    color: #4285f4;
  }
`;

export default StyledNavigetorBar;
