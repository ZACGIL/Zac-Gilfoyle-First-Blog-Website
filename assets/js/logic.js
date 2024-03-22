// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const themeBackground = document.querySelector('.theme-bg');
const themeHeader = document.querySelector('.theme-header');
const themeMain = document.querySelector('.theme-main');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    themeBackground.setAttribute('class', 'light-bg');
    themeHeader.setAttribute('class', 'light')
    themeMain.setAttribute('class', 'light')
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    themeBackground.setAttribute('class', 'dark-bg');
    themeHeader.setAttribute('class', 'dark')
    themeMain.setAttribute('class', 'dark')
  }
});
