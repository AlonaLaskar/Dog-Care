import styled from 'styled-components';

const StyledInput = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  label {
    color: ${({ theme }) => theme.colors.forms?.labelColor};
  }

  .error {
    color: ${({ theme }) => theme.colors.forms?.errorColor};
  }
`;

export default StyledInput;
