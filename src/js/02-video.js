import Player from '@vimeo/player';
import throttle from 'lodash.throttle'; // Импортируйте lodash.throttle

const vimeoPlayer = document.querySelector('#vimeo-player');

// Создание экземпляра плеера
const player = new Player(vimeoPlayer, {
  id: 236203659, // Идентификатор видео на Vimeo
  width: 640,
});

// Функция для обработки события play
// Вы добавляете обработчик события play, который будет вызван, когда начнется воспроизведение видео. Внутри обработчика вы сохраняете текущее время воспроизведения в локальное хранилище.
const onPlay = function (data) {
  const playbackTime = data.seconds;

  // Сохранение текущего времени воспроизведения в локальное хранилище
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(playbackTime)
  );
};

// Добавление обработчика события play
player.on('play', onPlay);

// Восстановление времени воспроизведения при загрузке страницы
// Вы проверяете локальное хранилище на наличие сохраненного времени воспроизведения и устанавливаете его с помощью player.setCurrentTime(). Если возникнет ошибка (например, время за пределами допустимого диапазона), она будет обработана.
const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (savedTime) {
  player.setCurrentTime(savedTime).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // Время меньше 0 или больше продолжительности видео
        break;

      default:
        // Произошла другая ошибка
        break;
    }
  });
}

// Обработка события timeupdate с использованием lodash.throttle
// Вы добавляете обработчик события timeupdate, который будет вызываться при обновлении времени воспроизведения видео. Внутри обработчика вы также сохраняете текущее время воспроизведения в локальное хранилище.
const currentTimeElement = document.getElementById('current-time'); // Замените на ваш элемент
player.on(
  'timeupdate',
  throttle(function (data) {
    const playbackTime = data.seconds;
    console.log('Current playback time:', playbackTime);

    // Сохранение времени воспроизведения в локальное хранилище
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(playbackTime)
    );
  }, 1000)
); // Один раз в секунду

// Очистка локального хранилища при обновлении времени воспроизведения
// Вы добавляете обработчик события input для элемента с id current-time (замените на свой), который очищает локальное хранилище при обновлении времени воспроизведения.
currentTimeElement.addEventListener('input', function () {
  localStorage.clear();
});
