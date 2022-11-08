import {setAdPins} from './map.js';
import {showError} from './popup.js';

fetch('https://27.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((cards) => {
    setAdPins(cards);
  })
  .catch(() => {
    showError('Не удалось получить данные');
  });
