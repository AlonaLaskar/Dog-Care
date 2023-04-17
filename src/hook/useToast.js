import { useIonToast } from '@ionic/react';
import { useCallback } from 'react';

const useToast = () => {
  const [present] = useIonToast();

  const presentToast = useCallback((message, success) => {
    present({
      message: message,
      position: 'top',
      color: success ? 'success' : 'danger',
      duration: 2000
    });
  }, [present]);

  return presentToast;
};

export default useToast;

