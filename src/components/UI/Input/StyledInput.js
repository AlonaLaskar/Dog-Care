import styled from 'styled-components';

const StyledInput = styled.div`
  .error {
    color: ${({ theme }) => theme.colors.forms?.errorColor};
  }
`;

export default StyledInput;
