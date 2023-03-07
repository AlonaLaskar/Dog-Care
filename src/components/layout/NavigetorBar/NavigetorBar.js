import React from 'react';
import { IonListHeader, IonList } from '@ionic/react';
import StyledNavigetorBar from './StyledNavigetorBar';
import { StyledButton } from '../../UI/Button/StyledButton';
function NavigationBar() {
  return (
    <StyledNavigetorBar>
      <IonListHeader className="navbar-header">
        <IonList>
          <IonListHeader>
            <StyledButton className="navbar-item" fill="clear">
              כל הקטגוריות
            </StyledButton>
            <StyledButton fill="clear" className="navbar-item">
              פרופיל
            </StyledButton>
            <StyledButton fill="clear" className="navbar-item">
              הצעות עבודה
            </StyledButton>
            <StyledButton fill="clear" className="navbar-item">
              הודעות
            </StyledButton>
            <StyledButton fill="clear" className="navbar-item">
              פייד
            </StyledButton>
            <StyledButton fill="solid" className="navbar-item">
              הגדרות
            </StyledButton>
          </IonListHeader>
        </IonList>
      </IonListHeader>
    </StyledNavigetorBar>
  );
}

export default NavigationBar;
