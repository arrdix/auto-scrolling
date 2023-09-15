// SET DATE
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// TOGGLE NAVBAR
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if(containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

function toggle() {
};

// FIXED NAVBAR
const navbar = document.getElementById('id');
const topLink = document.querySelector('.top-link');
const navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener('scroll', function() {
  const windowScroll = window.pageYOffset;

  if (windowScroll > navbarHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav')
  }
  if (windowScroll >= 150 && windowScroll <= 2200) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }

});

// AUTO SCROLL
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const elem = document.getElementById(id);
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const navbarHeight = navbar.getBoundingClientRect().height;
    let position = elem.offsetTop - navbarHeight;

    if (!navbar.classList.contains('fixed-nav')) {
      position = position - navbarHeight;
      console.log('b');
    }
    if (navbarHeight > 82) {
      position = position + containerHeight ;
      console.log('a');
    }

    window.scrollTo({
    left: 0, top: position,
    });
    linksContainer.style.height = 0;
  });
});