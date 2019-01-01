export default class OpeningAnimation {
  constructor(logoElement, pageListElement) {
    this.logoElement = document.querySelector(logoElement);
    this.pageListElement = document.querySelector(pageListElement);
    this.fadeOut = 'fadeOut';
    this.fadeInUp = 'fadeInUp';
    this.isHide = 'is-hide';
    this.showTimer = 400;
  }
  event() {
    this.logoElement.addEventListener('click', () => {
      this.logoElement.classList.add(this.fadeOut);
      setTimeout(() => {
        this.pageListElement.classList.remove(this.isHide);
        this.pageListElement.classList.add(this.fadeInUp);
      }, this.showTimer);
    }, false);
  }
}
