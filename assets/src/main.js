require('./sass/main.scss');
let randomColor = require('randomcolor');

document.addEventListener("DOMContentLoaded", function() {
  logo();
  setInterval(logo, 1500);
  menu_button();
});

function menu_button() {
  if(document.getElementById('menu')) {
    let menu_button = document.getElementById('menu');
    let page_wrapper = document.getElementsByClassName('page-wrapper')[0];
    let page_wrapper_overlay = page_wrapper.getElementsByClassName('page-wrapper__overlay')[0];
    menu_button.addEventListener("click", function() {
        this.classList.toggle('header__menu-icon--active');
        page_wrapper.classList.toggle("page-wrapper--active");
    });
    page_wrapper_overlay.addEventListener("click", function() {
      if(page_wrapper.classList.contains('page-wrapper--active')) {
        page_wrapper.classList.remove('page-wrapper--active');
        menu_button.classList.remove('header__menu-icon--active');
      }
    });
  }
}

function logo() {
  if(document.querySelectorAll("polygon.triangle").length) {
    let triangles = document.querySelectorAll("polygon.triangle");
    let gradients = document.querySelectorAll('linearGradient.gradient');
    for(let triangle of triangles) {
      triangle.style.fill = randomColor({luminosity: 'normal', format: 'rgba', hue: 'black', alpha: 0.7});
      // triangle.style.stroke = randomColor({luminosity: 'bright', format: 'rgba', hue: 'white', alpha: 1});
    }
  }

}
