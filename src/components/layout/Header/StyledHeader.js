import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-weight: bold;
  font-size: 1.5rem;
  color: white;

  background-color: ${({ theme }) => theme.colors.primary};
  height: ${({ theme }) => theme.layout.headerHeight}px;

  box-shadow: 0 2px 5px 0 ${({ theme }) => theme.colors.primary}12, 0 2px 10px 0 rgb(0 0 0 / 12%);
`;

export default StyledHeader;
