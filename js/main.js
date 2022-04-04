const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

function openMobileMenu() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
  document.querySelector('.main').classList.add('blur');
  document.querySelector('.logo').classList.add('blur');
  openMenu.classList.add('blur');
}

function closeMobileMenu() {
  mainMenu.style.top = '-100%';
  document.querySelector('.main').classList.remove('blur');
  document.querySelector('.logo').classList.remove('blur');
  openMenu.classList.remove('blur');
}

/**
 * Remove the mobile menu link once a link get clicked
 */
document.querySelectorAll('.link').forEach((link) => {
  link.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    document.querySelector('.main').classList.remove('blur');
    document.querySelector('.logo').classList.remove('blur');
    openMenu.classList.remove('blur');
  });
});

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);
