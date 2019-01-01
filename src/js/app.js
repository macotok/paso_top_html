import OpeningAnimation from './OpeningAnimation';

window.onload = () => {
  const openingAnimation = new OpeningAnimation('.fn-logo', '.fn-pageList', '.m-background-01');
  if (openingAnimation.logoElement) {
    openingAnimation.event();
  }
};
