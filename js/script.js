const modal = document.querySelector('.modal');
const buttonOpen = document.querySelector('.button.open');
const close = modal.querySelector('.close');
const formName = modal.querySelector('[name=form-name]');
const formEmail = modal.querySelector('[name=form-email]');
const formText = modal.querySelector('[name=form-text]');
const formFeedback = modal.querySelector('.feedback');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

buttonOpen.addEventListener('click', function (evt) {
  evt.preventDefault(); //отмена поведения по умолчанию evt.preventDefault();
  modal.classList.add('modal--show');

  if (storage) {
    formName.value = storage;
    formEmail.focus();
  } else {
      formName.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault(); //отмена поведения по умолчанию evt.preventDefault();
  modal.classList.remove('modal--show'); //нажата кнопка "Закрыть"
  modal.classList.remove('modal--error');

});

formFeedback.addEventListener('submit', function (evt) {
  if (!formName.value || !formEmail.value || !formText.value) {
    evt.preventDefault();
    modal.classList.remove('modal--error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('modal--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', formName.value);
      localStorage.setItem('email', formEmail.value);
      localStorage.setItem('text', formText.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal--show')) {
      evt.preventDefault();
      modal.classList.remove('modal--show');
      modal.classList.remove('modal--error');
    }
  }
});
