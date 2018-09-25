// === navbar ===
(function() {
  const toggleMenu = document.querySelector('.nav-icon');
  const navMain = document.querySelector('.nav-main');
  const expandList = document.querySelectorAll('.nav-main .expand');
  const plusMinus = document.querySelectorAll('.nav-main .expand span');
  const navSub = document.querySelectorAll('.nav-sub');
  const navLinks = document.querySelectorAll('.nav-menu li');

  toggleMenu.addEventListener('click', function(){
    navMain.classList.toggle('active');
  })

  // sub-menus
  for (let i = 0; i < expandList.length; i++) {
    expandList[i].addEventListener('click', function() {
      navSub[i].classList.toggle('active');
      navSub[i].classList.contains('active') ? plusMinus[i].innerHTML = '-' : plusMinus[i].innerHTML = '+'
    })
  }

  // link click behaviour
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      // close the menu and all the sub-menus when clicking a link that does not contain a sub-menu
      if (!navLinks[i].classList.contains('expand')) {
        if (screen.width < 920) {
          navMain.classList.toggle('active');
        }
        for (let j = 0; j < navSub.length; j++) {
          navSub[j].classList.remove('active');
          plusMinus[j].innerHTML = '+';
        }
      } else {
        // when opening a sub-menu, close all the other sub-menus
        for (let j = 0; j < expandList.length; j++) {
          if (navLinks[i] !== expandList[j]) {
            navSub[j].classList.remove('active');
            plusMinus[j].innerHTML = '+';
          }
        }
      }
    })
  }
})();

// === gallery ===
(function() {
  let mainImg = document.querySelector('.gallery > .main-img > img');
  const thumbnails = document.querySelectorAll('.gallery .thumb-container > img');

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function(e) {
      let thumbSrc = thumbnails[i].getAttribute('src');
      mainImg.setAttribute('src', thumbSrc);
    })
  }
})();

// === slideshow ===
(function() {
  const slides = document.querySelectorAll('.slideshow .slide');
  const arrowL = document.querySelector('#arrow-l');
  const arrowR = document.querySelector('#arrow-r');
  const titlesBigScreen = document.querySelectorAll('.titles-big span.title');

  let activeSlide = 1; //numbers start at 0, so 0, 1, 2

  const displaySlide = (n) => {
    for (let i = 0; i < slides.length; i++) {
      if (n === i) {
        slides[i].classList.add('active')
      } else {
        slides[i].classList.remove('active')
      }
    }
  }

  arrowL.addEventListener('click', function(){
    activeSlide > 0 ? activeSlide-- : activeSlide = 2;
    displaySlide(activeSlide);
  })

  arrowR.addEventListener('click', function(){
    activeSlide < 2 ? activeSlide++ : activeSlide = 0;
    displaySlide(activeSlide);
  })

  // slideshow - big screen only
  for (let i = 0; i < titlesBigScreen.length; i++) {
    titlesBigScreen[i].addEventListener('click', function() {
      displaySlide(i);
      for (let j = 0; j < titlesBigScreen.length; j++) {
        if (i === j) {
          titlesBigScreen[j].classList.add('active');
        } else {
          titlesBigScreen[j].classList.remove('active');
        }
      }
    })
  }
})();


// tabs
(function() {
  const tabs = document.querySelectorAll('.bottom-row .tabs-list .tab');
  const tabTitles = document.querySelectorAll('.bottom-row .tabs-list .tab .tab-title');
  const tabDescr = document.querySelectorAll('.bottom-row .tabs-list .tab .text');
  let tabBtn = document.querySelectorAll('.bottom-row .tabs-list .tab .tab-title img');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(){
      tabTitles[i].classList.toggle('active');
      tabDescr[i].classList.toggle('active');
      if (tabTitles[i].classList.contains('active')) {
        tabBtn[i].setAttribute('src', 'TEST_ASSETS/BOTTONI/BTN_close@2x.png')
      } else {
        tabBtn[i].setAttribute('src', 'TEST_ASSETS/BOTTONI/BTN_Open_OFF@2x.png')
      }
    })
  }
})();
