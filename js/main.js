import {formActive, formDisable, setAdress} from'./form.js';
import {initMap, setOnMapLoad, setOnMainPinMove, startCoordinate} from './map.js';
import {setAdPins} from './map.js';
import {getData} from './api.js';
import {setUserFormSubmit} from './form-validate.js';
import {showAlert, showSuccess, showError} from './popup.js';


////загрузка карты
setOnMapLoad(()=> {
  setOnMainPinMove(setAdress);
  setAdress(startCoordinate);
  formActive();
});

formDisable();
initMap(startCoordinate);

//// получение данных
getData(setAdPins, showError);

/// отпрака данных
setUserFormSubmit(showSuccess, showAlert);

