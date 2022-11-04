import {similarAdd} from './data.js';
import {formActive, formDisable, setAdress} from'./form.js';
import {initMap, setOnMapLoad, setOnMainPinMove, setAdPins} from './map.js';

const startCoordinate = {
  lat: 35.66023,
  lng: 139.73007,
};

const offers = similarAdd;

setOnMapLoad(()=> {
  setOnMainPinMove(setAdress);
  setAdress(startCoordinate);
  formActive();
  setAdPins(offers);
});

formDisable();
initMap(startCoordinate);
