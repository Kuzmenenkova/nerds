const modal = document.querySelector('.modal');
const buttonOpen = document.querySelector('.button.open');
const close = modal.querySelector('.close');

buttonOpen.addEventListener('click', function (evt) {
  evt.preventDefault(); //отмена поведения по умолчанию evt.preventDefault();
  modal.classList.add('modal--show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault(); //отмена поведения по умолчанию evt.preventDefault();
  modal.classList.remove('modal--show'); //нажата кнопка "Закрыть"
});
