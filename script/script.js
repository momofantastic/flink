var slides;
var windowHeight;

  function init() {

    slides = document.querySelectorAll('.up');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < slides.length; i++) {
      var slide = slides[i];

      var SpositionFromTop = slides[i].getBoundingClientRect().top;

      if (SpositionFromTop - windowHeight <= 0) {
        slide.classList.add('scroll-up');
        slide.style.opacity = '1';
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();