import './form-validate.js';

const NUMBER_POINT = 5;
const form = document.querySelector('.ad-form');
const fieldsets = form.querySelectorAll('fieldset');
const adress = form.querySelector('#address');

const formDisable = () => {
  form.classList.add('ad-form--disabled');
  fieldsets.forEach((elem)=>{
    elem.disabled = true;
  });

};

formDisable();

const formActive = () => {
  form.classList.remove('ad-form--disabled');
  fieldsets.forEach((elem)=>{
    elem.disabled = false;
  });

};

formActive();

const setAddress = (coordinates) => {
  adress.value = `${coordinates.lat.toFixed(NUMBER_POINT)}, ${coordinates.lng.toFixed(NUMBER_POINT)}`;
};

export {formActive, formDisable, setAddress};
