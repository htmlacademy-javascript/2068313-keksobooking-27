/* eslint-disable no-console */
const form = document.querySelector('.ad-form');
const capasityField = form.querySelector('#capacity');
const roomField = form.querySelector('#room_number');

const roomsCapasityOption = {
  '1' : ['для 1 гостя'],
  '2' : ['для 2 гостей', 'для 1 гостя'],
  '3' : ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  '100' : ['не для гостей'],
};

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--invalid',
}, true);

const validateCapasity = () => {
  roomsCapasityOption[roomField.value].includes(capasityField.value);
};

const getOptionErrorMessage = () => {

  let result = '';

  switch(roomField.value) {
    case '1' : result = '1 комната для 1 гостя';
      break;
    case '2' : result = '2 комнтаты для 2 гостей или для 1 гостя';
      break;
    case '3' : result = '3 комнтаты для 3 гостей или для 2 гостей, или для 1 гостя';
      break;
    case '100' : result = 'не для гостей';
      break;
  }
  return result;
};

pristine.addValidator(
  capasityField,
  validateCapasity,
  '',
);

pristine.addValidator(
  roomField,
  validateCapasity,
  getOptionErrorMessage,
);

capasityField.addEventListener('change', () => {
  pristine.validate(capasityField);
  pristine.validate(roomField);
});

roomField.addEventListener('change', () => {
  pristine.validate(roomField);
  pristine.validate(capasityField);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if(isValid) {
    console.log('Можно отправлять');
  }else {
    console.log(pristine.getErrors());
  }
});
