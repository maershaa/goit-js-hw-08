//Кратко, этот код обрабатывает ввод данных в форму, сохраняет их в локальное хранилище, восстанавливает данные при загрузке страницы и обеспечивает контроль за частотой обновления данных с помощью метода throttle.

import throttle from 'lodash.throttle';

// Определение константы STORAGE_KEY, которая будет использоваться в качестве ключа для сохранения и извлечения данных из локального хранилища.
const STORAGE_KEY = 'feedback-data';

// Создание объекта refs, который содержит ссылки на различные элементы DOM, такие как форма, поле ввода email и поле textarea.
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
};

// Создание пустого объекта formData, который будет использоваться для хранения данных формы.
const formData = {};

// Добавление обработчика события submit на форму. Когда форма отправляется, вызывается функция onFormSubmit.
refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// Внутри функции onFormSubmit сначала предотвращается стандартное поведение формы с помощью evt.preventDefault(). Затем проверяется, заполнены ли оба поля ввода (email и message). Если хотя бы одно из полей не заполнено, выводится предупреждающее сообщение с помощью alert и функция завершается с помощью return, чтобы остальные действия не выполнялись.
function onFormSubmit(evt) {
  evt.preventDefault();

  // Здесь вы проверяете, заполнены ли оба поля email и message в форме. Если хотя бы одно из полей пустое, выводится alert с предупреждением.
  if (refs.input.value === '' || refs.textarea.value === '') {
    alert('Please fill in all the fields!');
    return;
  }
  //   Если оба поля заполнены, этот блок будет выполнен.
  // Создается объект result с данными из полей email и password.
  // Объект result выводится в консоль.
  // Метод form.reset() вызывается для сброса значений полей формы.
  else {
    // После этого выполняется сброс значений полей формы с помощью evt.currentTarget.reset(), и данные удаляются из локального хранилища с помощью localStorage.removeItem(STORAGE_KEY).
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
  }
}

// Далее, определены функции onInput и onTextareaInput, которые вызываются при вводе данных в поля ввода email и message. Внутри этих функций значения записываются в объект formData, а затем вызывается функция saveDataToLocalStorage, чтобы сохранить обновленные данные в локальное хранилище.
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

// Функция saveDataToLocalStorage записывает данные из объекта formData в локальное хранилище с помощью localStorage.setItem.
function saveDataToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

//Функция populateFormFields используется для восстановления данных из локального хранилища при загрузке страницы. Она получает сохраненные данные, разбирает их с помощью JSON.parse, затем обновляет значения соответствующих полей формы и объекта formData.
function populateFormFields() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    for (const fieldName in parsedData) {
      if (parsedData.hasOwnProperty(fieldName)) {
        const inputField = refs.form.querySelector(`[name="${fieldName}"]`);
        if (inputField) {
          inputField.value = parsedData[fieldName] || '';
          formData[fieldName] = parsedData[fieldName];
        }
      }
    }
  }
}

// функция populateFormFields заполнит объект formData и сохранит его в локальное хранилище.
populateFormFields();
