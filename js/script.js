const modal = document.querySelector('.modal');
const buttonOpen = document.querySelector('.button.open');
const close = modal.querySelector('.close');

buttonOpen.addEventListener('click', function (evt) {
  evt.preventDefault(); //отмена поведения по умолчанию evt.preventDefault();
  // console.log('');
  modal.classList.add('modal--show');

});

close.addEventListener('click', function () {
  // console.log('');
  modal.classList.remove('modal--show'); //нажата кнопка "Закрыть"
});
