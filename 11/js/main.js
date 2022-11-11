import {formActive, formDisable, setAdress} from'./form.js';
import {initMap, setOnMapLoad, setOnMainPinMove, startCoordinate} from './map.js';
import {setAdPins} from './map.js';
import {getData} from './api.js';
import {setUserFormSubmit} from './form-validate.js';
import {showAlert, showSuccess, showError} from './popup.js';
import {setChangeEventOnFilter, filterOffers } from './filter.js';
import {debounce} from './util.js';

////загрузка карты
setOnMapLoad(()=> {
  setOnMainPinMove(setAdress);
  setAdress(startCoordinate);
  formActive();
});

formDisable();
initMap(startCoordinate);

/// отпрака данных
setUserFormSubmit(showSuccess, showAlert);

//получение данных и отриссовка меток с фильтрацией
getData((offers) => {
  setAdPins(offers);
  setChangeEventOnFilter(
    debounce(() => {
      setAdPins(offers.filter(filterOffers));
    })
  );
}, () => {
  showError('Не удалось получить похожие объявления. Попробуй еще раз!');
});
