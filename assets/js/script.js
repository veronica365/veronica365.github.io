// Functions to read elements by class or name
const $ = (elementOrClass) => document.querySelector(elementOrClass);

/**
 * Below are scripts to populate my works section with projects
 */
const allProjectsArray = [
  {
    id: 1,
    title: 'Tonic',
    image: './assets/img/portfolio-1.svg',
    altText: 'project image',
    company: 'CANOPY',
    role: 'Backend Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    skills: ['html', 'css', 'javascript'],
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    image: './assets/img/portfolio-2.svg',
    altText: 'project image',
    company: 'CANOPY',
    role: 'Backend Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    skills: ['html', 'css', 'javascript'],
  },
  {
    id: 3,
    title: 'Tonic',
    image: './assets/img/portfolio-3.svg',
    altText: 'project image',
    company: 'CANOPY',
    role: 'Backend Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    skills: ['html', 'css', 'javascript'],
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    image: './assets/img/portfolio-4.svg',
    altText: 'project image',
    company: 'CANOPY',
    role: 'Backend Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    skills: ['html', 'css', 'javascript'],
  },
];

const generateWorkSkils = (skills, element) => {
  let innerHTML = '';
  skills.forEach((skill) => {
    innerHTML += `<${element} class="skill">${skill}</${element}>`;
  });
  return innerHTML;
};

const generateWorkProjects = (works) => {
  let innerHTML = '';
  works.forEach((project) => {
    innerHTML += `<article class="media">
    <div class="media-img img-1">
      <img src=${project.image} alt="work-image" />
    </div>
    <div class="media-body">
      <h4>${project.title}</h4>
      <div class="role">
        <span>${project.company}</span>
        <i></i>
        <span>${project.role}</span>
        <i></i>
        <span>${project.year}</span>
      </div>
      <div class="description">
        <p>${project.description}</p>
      </div>
      <ul class="skills">
      ${generateWorkSkils(project.skills, 'li')}
      </ul>
      <div class="read-more">
        <a href="#" class="read-more-link" data-project-id="${
  project.id
}"> See Project </a>
      </div>
    </div>
  </article>`;
  });
  return innerHTML;
};

const works = $('#works').getElementsByClassName('content')?.[0];
works.innerHTML = `${generateWorkProjects(allProjectsArray)}`;

/**
 * Below are scripts to show the mobile menu onclicking the hamburger button
 */

const menu = $('.mobile-nav');
const wrap = $('.wrap');
const menuButton = $('.menu-button');

// Used to show or hide navigation modal
function toggleNavigationModal() {
  $('.toolbar').classList.toggle('open');
  wrap.classList.toggle('mobile-menu-open');
}

// Used to hide navigation modal on clicking x or menu links
function hideNavigationModal() {
  menu.classList.toggle('open');
  toggleNavigationModal();
  wrap.removeEventListener('click', () => null);
}

// show or hide the navigation menu on clicking .mobile-nav
menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  toggleNavigationModal();
});

// show or hide the navigation menu on clicking .mobile-nav
menuButton.addEventListener('click', () => {
  hideNavigationModal();
});

// Get all links, add click eventlisteners, click on one to
// scroll correct part of the page into view
const allLinks = document.querySelectorAll('.menu-item');
allLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    hideNavigationModal();
    $(link.hash).scrollIntoView({ behavior: 'smooth' });
  });
});
