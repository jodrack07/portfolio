const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

function openMobileMenu() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function closeMobileMenu() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);
