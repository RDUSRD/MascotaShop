// Get the container element for the menu active
let enlacesHeader = document.querySelector(".enlaces-header");

// Get all buttons with class="btn" inside the container
let btns = enlacesHeader.querySelectorAll(".btn");

btns.forEach(linkActive => {
  linkActive.addEventListener('click', function () {
    enlacesHeader.querySelector('.active').classList.remove('active');
    linkActive.classList.add('active');
  });
});

// Menu for mobile
let semaforo = true;
let icon = document.querySelector('.fa-bars');

document.querySelector('.hamburger').addEventListener('click', function () {

  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-times');
    semaforo = false;
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
    semaforo = true;
  }

  enlacesHeader.classList.toggle('menuAnimation');
});
