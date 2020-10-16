/*eslint-disable*/

const reportAbridged = document.querySelectorAll('.report__abridged');
const reportFull = document.querySelectorAll('.report__full');
const reportComment = document.querySelectorAll('.report__comment__container');
const reportCommentButton = document.querySelectorAll('.report-comment-button');
const reportCommentCloseButton = document.querySelectorAll(
    '.report-comment-close-button'
);

reportAbridged.forEach((el, i) =>
    el.addEventListener('click', () => {
        el.classList.toggle('active');
        reportFull[i].classList.toggle('active');
        if (reportComment[i].classList.contains('active'))
            reportComment[i].classList.remove('active');
    })
);

reportCommentButton.forEach((el, i) =>
    el.addEventListener('click', () => {
        reportComment[i].classList.add('active');
    })
);

reportCommentCloseButton.forEach((el, i) =>
    el.addEventListener('click', () => {
        reportComment[i].classList.remove('active');
    })
);