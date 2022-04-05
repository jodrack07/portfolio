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

// Popup windows for Projects viewing
const project = document.querySelector('.name');
const company = document.querySelector('.company');
const role = document.querySelector('.role');
const year = document.querySelector('.year');
const project__lang = document.querySelector('.project__lang');
const imageLink = document.querySelector('.image');
const modalContainer = document.querySelector('.modelContainer');
const all_works = document.querySelector('.all_works');
// const project_description = document.querySelector('.description');

// generating content dynamically from the object
function generateProjectContent() {
  all_works.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    let languages = '';
    data[i].technologies.forEach((language) => {
      languages += `
      <li>${language}</li>
    `;
    });

    all_works.innerHTML += `
    <article class='works'>
      <div class='works__image'>
        <img src='${data[i].imageLink}' alt='work ${i}' class='img1' />
      </div>
      <div class='work__description'>
        <h2>${data[i].projectName}</h2>
        <div class='short_desc'>
          <h4>${data[i].company}</h4>
          <span></span>
          <h4>${data[i].role}</h4>
          <span></span>
          <p>${data[i].year}</p>
        </div>
        <div class='long_desc'>
          <p>
            ${data[i].projectDescription}
          </p>
          <ul class='work__lang'>
            ${languages}
          </ul>
        </div>
        <button type='button' class='btn btn-enabled project-modal-${i}'>
          See project
        </button>
      </div>
    </article>`;
  }
}

// showing the popup window once a button get clicked
function toggleProjectPopWindow() {
  for (let i = 0; i < data.length; i += 1) {
    let languages = '';
    data[i].technologies.forEach((language) => {
      languages += `
      <li>${language}</li>
    `;
    });
    document
      .querySelector(`.project-modal-${i}`)
      .addEventListener('click', () => {
        project.innerHTML = data[i].projectName;
        imageLink.src = data[i].imageLink;
        role.innerHTML = data[i].role;
        company.innerHTML = data[i].company;
        year.innerHTML = data[i].year;
        project__lang.innerHTML = languages;

        document.querySelector('.all_works').classList.add('blur');
        document.querySelector('.header').classList.add('blur');
        document.querySelector('.showcase').classList.add('blur');
        document.querySelector('.contact-form').classList.add('blur');
        document.querySelector('.about-me').classList.add('blur');
        modalContainer.classList.add('show');
      });
  }
  document.querySelector('.closeModal').addEventListener('click', () => {
    modalContainer.style.display = 'none';
    window.location.reload();
    document.querySelector('.header').classList.remove('blur');
    document.querySelector('.showcase').classList.remove('blur');
  });
}
