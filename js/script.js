
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--hidden')) {
      navMain.classList.remove('main-nav--hidden');
      navMain.classList.add('main-nav--visible');
    } else {
      navMain.classList.add('main-nav--hidden');
      navMain.classList.remove('main-nav--visible');
    }
  });

