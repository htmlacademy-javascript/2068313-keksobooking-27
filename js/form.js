/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
const form = document.querySelector('.ad-form');
const fieldsets = form.querySelectorAll('fieldset');

const formDisable = () => {
  form.classList.add('ad-form--disabled');
  fieldsets.forEach((elem)=>{
    elem.disabled - true;
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

const pristineTitle = new Pristine(form, {
  classTo: 'ad-form__element--title',
  errorTextParent: 'ad-form__element--title',
  errorTextClass: 'ad-form__element--invalid',
});

// eslint-disable-next-line no-unused-vars
const pristinePrice = new Pristine(form, {
  classTo: 'ad-form__element--price',
  errorTextParent: 'ad-form__element--price',
  errorTextClass: 'ad-form__element--invalid',
});

const pristine = new Pristine(form, {
  classTo: 'ad-form__element--room',
  errorTextParent: 'ad-form__element--room',
  errorTextClass: 'ad-form__element--invalid',
} );

const roomField = form.querySelector('[name="rooms"]');
const capacityField = form.querySelector('[name="capacity"]');
const roomsCapasityOption = {
  '1' : ['для 1 гостя'],
  '2' : ['для 2 гостей', 'для 1 гостя'],
  '3' : ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  '100' : ['не для гостей'],
};

function validateroomsCapasityOption() {
  return roomsCapasityOption[roomField.value].includes(capacityField.value);
}

// eslint-disable-next-line no-nested-ternary
function getOptionErrorMessage () {
  return `
    ${roomField.value === '1' ? '1 комната для 1 гостя' :
    roomField.value === '2' ? '2 комнтаты для 2 гостей или для 1 гостя' :
      roomField.value === '3' ? '3 комнтаты для 3 гостей или для 2 гостей, или для 1 гостя' :
        'не для гостей'}
        `;
}


pristine.addValidator(roomField, validateroomsCapasityOption, getOptionErrorMessage );
pristine.addValidator(capacityField, validateroomsCapasityOption, getOptionErrorMessage );

form.addEventListener('submit', (evt) => {
  const isValid = pristineTitle.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
