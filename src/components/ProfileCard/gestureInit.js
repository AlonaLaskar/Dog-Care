import { saveRightSwipe } from '../../hook/swips';
import { createGesture } from '@ionic/react';


export const gestureInit = (card, setSwipeDirection, availabilityId, userId1, userId2) => {
  // const swipeThreshold = window.innerWidth * 0.5; // Adjust the value as needed
  const windowWidth = window.innerWidth;

  if (card) {
    const gesture = createGesture({
      el: card,
      gestureName: 'card-swipe',

      onStart: () => {
        card.style.transition = 'none';
      },
      onMove: (detail) => {
        card.style.transform = `translateX(${detail.deltaX}px) rotate(${detail.deltaX / 20}deg)`;
        if (detail.deltaX > 0) {
          card.classList.add('right'); // add right class
          card.classList.remove('left'); // remove left class
          setSwipeDirection('right');
        } else if (detail.deltaX < 0) {
          card.classList.add('left'); // add left class
          card.classList.remove('right'); // remove right class
          setSwipeDirection('left');
        } else {
          card.classList.remove('left'); // remove left class
          card.classList.remove('right'); // remove right class
          setSwipeDirection(null);
        }
      },

      onEnd: (detail) => {
        card.style.transition = '0.3s ease-out';
        if (detail.deltaX > windowWidth / 2) {
          card.style.transform = `translateX(${windowWidth * 1.5}px)`;
          saveRightSwipe(availabilityId, userId1, userId2);
          setSwipeDirection(null);
        } else if (detail.deltaX < -windowWidth / 2) {
          card.style.transform = `translateX(-${windowWidth * 1.5}px)`;
          setSwipeDirection(null);
        } else {
          card.style.transform = '';
          card.classList.remove('left'); // remove left class
          card.classList.remove('right'); // remove right class
          setSwipeDirection(null);
        }
      }
    });
    gesture.enable();
  }
};
