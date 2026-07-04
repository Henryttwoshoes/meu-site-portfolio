function scrollToSection1(event) {
  if (event) {
    event.preventDefault();
  }

  document.querySelector('.about-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}