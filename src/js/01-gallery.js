// импорт шаблона handlebars см. папку templates с html разметкой файла для ВАРИАНТА 2 для генерации разметки для галереи из набора данных galleryItems => см строку 36
import cardsMarkup from '../templates/card.hbs';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

// Создание разметки галереи: С помощью функции createGalleryMarkup вы генерируете разметку для галереи на основе массива galleryItems.
const galleryMarkup = createGalleryMarkup(galleryItems);

//=============== ВАРИАНТ 1  генерации разметки для галереи из набора данных galleryItems ==========
// В этом варианте используется метод map для преобразования каждого элемента galleryItems в строку разметки. Каждый элемент обрабатывается внутри функции обратного вызова, которая возвращает строку с разметкой для каждого элемента. Затем метод join('') объединяет все строки в одну большую строку.
// function createGalleryMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//         <li class="gallery__item">
//    <a class="gallery__link"
//    href="${original}">
//       <img class="gallery__image"
//       src="${preview}"
//       alt="${description}"
//       title= "${description}"
//       loading="lazy"/>
//    </a>
// </li>`;
//     })
//     .join('');
// }

//=============== ВАРИАНТ 2  генерации разметки для галереи из набора данных galleryItems ==========
// В этом варианте используется метод map, но вместо того чтобы внутри него создавать строку разметки, он вызывает функцию cardsMarkup для каждого элемента galleryItems. Предполагается, что функция cardsMarkup преобразует элемент данных в строку с разметкой. Для его работы мы создали шаблон handlebars (это шаблонизатор для создания динамической HTML-разметки. Он позволяет вам создавать шаблоны, которые могут быть заполнены данными на сервере или в клиентском JavaScript. В вашем случае, файлы с расширением .hbs вероятно содержат шаблоны для галереи изображений ) => см. папку templates с html разметкой файла, подключили parcel-transformer-hbs v1.0.4 ( Поскольку браузеры не могут непосредственно понимать файлы с расширением .hbs, необходимо преобразовать их в HTML, который браузер может корректно отобразить. Трансформер parcel-transformer-hbs выполняет эту задачу, обрабатывая файлы .hbs и преобразуя их в соответствующий HTML-код.)
function createGalleryMarkup(galleryItems) {
  return galleryItems.map(cardsMarkup).join('');
}

// Вставка разметки в контейнер галереи: С помощью galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup); вы вставляете сгенерированную разметку внутрь контейнера галереи.
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Этот код добавляет обработчик события клика на контейнере галереи.
galleryContainer.addEventListener('click', open);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Атрибут, из которого брать текст для подписи к изображению
  captionsDelay: 250, // Задержка перед показом подписи (в миллисекундах) после открытия изображения
});
