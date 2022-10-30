const form = document.querySelector('.ad-form');
const capasityField = form.querySelector('#capacity');
const roomField = form.querySelector('#room_number');

const roomsOption = {
  1 : ['1'],
  2 : ['2', '1'],
  3 : ['3', '2', '1'],
  100 : ['0'],
};

const capacityOption = {
  0 : ['100'],
  1 : ['1'],
  2 : ['1', '2'],
  3 : ['3', '2', '1'],
};


const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--invalid',
}, true);

const validateCapasity = () => {
  roomsOption[roomField.value].includes(capasityField.value);
};

const getCapacityErrorMessage = () =>
  `Для указанного колличества гостей требуется ${capacityOption[capasityField.value].join(' или ')} комнат.`;


const getRoomsErrorMessage = () =>
  `указанное колличество комнат вмещает ${roomsOption[roomField.value].join(' или ')} гостей.`;

pristine.addValidator(
  capasityField,
  validateCapasity,
  getCapacityErrorMessage,
);

pristine.addValidator(
  roomField,
  validateCapasity,
  getRoomsErrorMessage ,
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
  pristine.validate();
});
