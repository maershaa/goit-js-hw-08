// import throttle from 'lodash.throttle'; // Импортируйте lodash.throttle

// const STORAGE_MESSAGE_KEY = 'feedback-message';
// const STORAGE_EMAIL_KEY = 'feedback - email';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   input: document.querySelector('.feedback-form input'),
//   texterea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.input.addEventListener('input', throttle(onInput, 500));
// refs.texterea.addEventListener('input', throttle(onTextereaInput, 500));

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();

//   localStorage.removeItem(STORAGE_EMAIL_KEY);
//   localStorage.removeItem(STORAGE_MESSAGE_KEY);
// }

// function onInput(evt) {
//   const email = evt.target.value;
//   localStorage.setItem(STORAGE_EMAIL_KEY, JSON.stringify(email));
//   console.log(JSON.stringify(email));
// }

// function onTextereaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem(STORAGE_MESSAGE_KEY, message);
//   console.log(message);
// }

// function populateTextereaInput() {
//   const savedMessage = localStorage.getItem(STORAGE_MESSAGE_KEY);
//   if (savedMessage) {
//     //   не нужен JSON так как значение textarea всегда строка
//     refs.texterea.value = savedMessage;
//   }
// }

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-data'; // Изменил ключ для хранения

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function onInput(evt) {
  const fieldName = evt.target.getAttribute('name');
  formData[fieldName] = evt.target.value; // Записываем значение в объект
  saveDataToLocalStorage();
}

function onTextareaInput(evt) {
  const fieldName = evt.target.getAttribute('name');
  formData[fieldName] = evt.target.value; // Записываем значение в объект
  saveDataToLocalStorage();
}

function saveDataToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Эта функция используется для восстановления данных из локального хранилища при загрузке страницы. Она получает сохраненные данные, разбирает их с помощью JSON.parse, затем заполняет соответствующие поля формы значениями из сохраненных данных и обновляет объект
function populateFormFields() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    for (const fieldName in parsedData) {
      if (parsedData.hasOwnProperty(fieldName)) {
        const inputField = refs.form.querySelector(`[name="${fieldName}"]`);
        if (inputField) {
          inputField.value = parsedData[fieldName];
          formData[fieldName] = parsedData[fieldName];
        }
      }
    }
  }
}

populateFormFields();
