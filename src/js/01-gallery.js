// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

// Создание разметки галереи: С помощью функции createGalleryMarkup вы генерируете разметку для галереи на основе массива galleryItems.
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
   <a class="gallery__link" 
   href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      alt="${description}"
      title= "${description}"
      loading="lazy"/>
    
   </a>
</li>`;
    })
    .join('');
}

// Вставка разметки в контейнер галереи: С помощью galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup); вы вставляете сгенерированную разметку внутрь контейнера галереи.
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Этот код добавляет обработчик события клика на контейнере галереи.
galleryContainer.addEventListener('click', open);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Атрибут, из которого брать текст для подписи к изображению
  captionsDelay: 250, // Задержка перед показом подписи (в миллисекундах) после открытия изображения
});
