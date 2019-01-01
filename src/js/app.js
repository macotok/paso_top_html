import OpeningAnimation from './OpeningAnimation';

window.onload = () => {
  const openingAnimation = new OpeningAnimation('.fn-logo', '.fn-pageList');
  if (openingAnimation.logoElement) {
    openingAnimation.event();
  }
};
