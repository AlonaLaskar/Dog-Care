import styled from 'styled-components';
import { IonFooter } from '@ionic/react';

const StyledFooter = styled(IonFooter)`
  height: ${({ theme }) => theme.layout.headerHeight}px;
  color: ${({ theme }) => theme.colors.primary};

  font-size: 1.5rem;

  .tab-has-icon {
    /* color: ${({ theme }) => theme.colors.primary}; */
  }

  .tab-selected {
    /* color: ${({ theme }) => theme.colors.activeLink}; */
  }
`;

export default StyledFooter;
