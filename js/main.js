import {formActive, formDisable, setAdress} from'./form.js';
import {initMap, setOnMapLoad, setOnMainPinMove, startCoordinate} from './map.js';
import './load.js';
import {setUserFormSubmit} from './form-validate.js';
import {showSuccess} from './popup.js';


setOnMapLoad(()=> {
  setOnMainPinMove(setAdress);
  setAdress(startCoordinate);
  formActive();
});

formDisable();
initMap(startCoordinate);

setUserFormSubmit(showSuccess);

