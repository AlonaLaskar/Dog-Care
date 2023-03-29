import { useIonToast } from '@ionic/react';

const useToast = () => {
  const present = useIonToast();

  const presentToast = (message, success) => {
    present({
      message: message,
      position: 'top',
      color: success ? 'success' : 'danger',
      duration: 2000
    });
  };
  return presentToast;
};

export default useToast;
