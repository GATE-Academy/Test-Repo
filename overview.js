/*eslint-disable*/
const sideBarNavDropDown = document.querySelectorAll('.sidebar__nav__dropdown');
const hamburgerContainer = document.querySelector('.hamburger__container');
const sidebar = document.querySelector('.sidebar');

sideBarNavDropDown.forEach((el) =>
    el.addEventListener('click', () => {
        el.classList.toggle('active');
    })
);

hamburgerContainer.addEventListener('click', () => {
    hamburgerContainer.classList.toggle('active');
    sidebar.classList.toggle('active');
});