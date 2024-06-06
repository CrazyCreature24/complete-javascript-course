'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden'); // No dot when calling classes in this instance
  overlay.classList.remove('hidden');
};

// Setting up event listener for each modal button
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// Close modal via Escape key press
document.addEventListener('keydown', function (event) {
  // Sending this parameter give access to the event

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
