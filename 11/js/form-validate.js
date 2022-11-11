import {sendData} from './api.js';

const form = document.querySelector('.ad-form');
const capasityField = form.querySelector('#capacity');
const roomField = form.querySelector('#room_number');
const submitBtn = form.querySelector('.ad-form__submit');

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

const validateCapasity = () => roomsOption[roomField.value].includes(capasityField.value);


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

// изменение  минимального значения и плейсхолдера поля «Цена за ночь»

const typeofHouseOption = {
  'bungalow': '0',
  'flat' : '1000',
  'hotel' : '3000',
  'house' : '5000',
  'palace' : '10000',
};

const typeOfHouse = form.querySelector('#type');
const price = form.querySelector('#price');

const setTypePrice = () => {
  price.placeholder = typeofHouseOption[typeOfHouse.value];
  price.min = typeofHouseOption[typeOfHouse.value];
  price.dataset.pristineMinMessage = `минимальное значение ${typeofHouseOption[typeOfHouse.value]}`;
};

// слайдер

const sliderElement = document.querySelector('.ad-form__slider');

const sliderConfig = {
  min: 0,
  max: 100000,
  start : price.placeholder,
  step: 1,
};

noUiSlider.create(sliderElement, {
  range : {
    min : sliderConfig.min,
    max : sliderConfig.max,
  },
  start : sliderConfig.start,
  step: sliderConfig.step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});


sliderElement.noUiSlider.on('update', () => {
  price.value = sliderElement.noUiSlider.get();
});

typeOfHouse.addEventListener('change', ()=> {
  setTypePrice();
  sliderElement.noUiSlider.set(price.placeholder);
});

price.addEventListener('change', setTypePrice);

// «Время заезда», «Время выезда» — выбор опции одного поля автоматически изменяют значение другого

const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

const getTimeInChange = () => {
  timeIn.value = timeOut.value;
};

const getTimeOutChange = () => {
  timeOut.value = timeIn.value;
};

timeIn.addEventListener('change', getTimeOutChange);
timeOut.addEventListener('change', getTimeInChange);

//////////Вызовы валидации

capasityField.addEventListener('change', () => {
  pristine.validate(capasityField);
  pristine.validate(roomField);
});

roomField.addEventListener('change', () => {
  pristine.validate(roomField);
  pristine.validate(capasityField);
});

///// блокировка кнопки при отправке

const blockSubmitButton = () => {
  submitBtn.disabled = true;
  submitBtn.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitBtn.disabled = false;
  submitBtn.textContent = 'Сохранить';
};


/////отправка данных по кнопке

const setUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
        },
        () => {
          onFail('Не удалось отправить форму. Попробуйте ещё раз');
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit};
