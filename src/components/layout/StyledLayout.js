import styled from 'styled-components';

const StyledLayout = styled.div`
  ion-router-outlet,
  ion-page {
    padding: 20px;
    padding-top: ${({ theme }) => theme.layout.headerHeight}px;
  }
`;

export default StyledLayout;
