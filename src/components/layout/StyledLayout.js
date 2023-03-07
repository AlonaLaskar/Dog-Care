import styled from 'styled-components';

const StyledLayout = styled.div`
  ion-router-outlet {
    padding-top: ${({ theme }) => theme.layout.headerHeight+20}px;
  }
`;

export default StyledLayout;
