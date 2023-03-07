import styled from 'styled-components';

const StyledFooter = styled.div`
  height: ${({ theme }) => theme.layout.headerHeight}px;
  background-color: ${({ theme }) => theme.colors.backgroudLayout};
  color: ${({ theme }) => theme.colors.primary};

  font-size: 1.5rem;

  background-color: ${({ theme }) => theme.colors.backgroudLayout};
  * {
    background-color: ${({ theme }) => theme.colors.backgroudLayout};
    color: ${({ theme }) => theme.colors.primary};

    .tab-selected * {
      color: ${({ theme }) => theme.colors.activeLink};
    }
  }
`;

export default StyledFooter;
