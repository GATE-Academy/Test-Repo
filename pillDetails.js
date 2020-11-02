/*eslint-disable*/

const detailOverview = document.querySelectorAll('.detail__overview');
const detailFull = document.querySelectorAll('.detail__full');

detailOverview.forEach((el, i) => {
    el.addEventListener('click', (event) => {
        const target = event.target.closest('div');

        target.classList.toggle('active');

        detailFull[i].classList.toggle('active');
    });
});