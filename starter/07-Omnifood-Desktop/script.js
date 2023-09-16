'use strict';

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
yearEl.textContent = currentMonth + 1 + '/' + currentYear;

const myHeader = document.querySelector('.header');
const mobileNavBtn = document.querySelector('.btn-mobile-nav');

mobileNavBtn.addEventListener('click', function () {
  myHeader.classList.toggle('nav-open');
});

/*
@ Smooth Scrolling for JavaScript.
*/

const links = document.querySelectorAll('a:link');
console.log(links);
console.log(links.length);

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll to top
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (link.classList.contains('main-nav-link')) {
      const target = document.querySelector(href);
      target.scrollIntoView({ behavior: 'smooth' });
      myHeader.classList.toggle('nav-open');
    } else if (href !== '#' && href.startsWith('#')) {
      const target = document.querySelector(href);
      console.log(target);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Sticky Nav bar (Intersection observer way)
const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.querySelector('body').classList.add('sticky');
    } else {
      document.querySelector('body').classList.remove('sticky');
    }
  },
  {
    // observe in the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
