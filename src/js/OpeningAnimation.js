export default class OpeningAnimation {
  constructor(logoElement, pageListElement, blurElement) {
    this.logoElement = document.querySelector(logoElement);
    this.pageListElement = document.querySelector(pageListElement);
    this.blurElement = document.querySelector(blurElement);
    this.fadeIn = 'fadeIn';
    this.fadeOut = 'fadeOut';
    this.fadeInUp = 'fadeInUp';
    this.isHide = 'is-hide';
    this.showTimer = 400;
  }
  event() {
    this.logoElement.addEventListener('click', () => {
      this.logoElement.classList.add(this.fadeOut);
      this.blurElement.classList.remove(this.isHide);
      this.blurElement.classList.add(this.fadeIn);
      setTimeout(() => {
        this.pageListElement.classList.remove(this.isHide);
        this.pageListElement.classList.add(this.fadeInUp);
      }, this.showTimer);
    }, false);
  }
}
