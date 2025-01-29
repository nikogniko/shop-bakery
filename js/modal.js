// (() => {
//   const refs = {
//     modal: document.querySelector('.backdrop'),
//     modalBtnOpen: document.querySelector('.modal-btn-open'),
//     modalBtnClose: document.querySelector('.modal-btn-close'),
//   };

//   refs.modalBtnOpen.addEventListener('click', toggleModal);
//   refs.modalBtnClose.addEventListener('click', toggleModal);

//   function toggleModal() {
//     // document.body.classList.toggle('modal-open');
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
