import {similarAdd} from './data.js';

const canvas = document.querySelector('.map__canvas');

const template = document.querySelector('#card').content;
const popup = template.querySelector('.popup');

const TYPES_OF_HOUSING = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const renderFeatures = (items, elem) => {
  elem.innerHTML = '';

  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    const element = document.createElement('li');
    element.classList.add('popup__feature');
    element.classList.add(`popup__feature--${item}`);
    fragment.appendChild(element);
  });

  elem.appendChild(fragment);

  if (elem && elem.length === 0 ){
    elem.classList.add('.visually-hidden');
  }
};

const renderCard = (arr) => {
  const fragment = document.createDocumentFragment();
  const element = popup.cloneNode(true);
  element.querySelector('.popup__avatar').src = arr.author.avatar;
  element.querySelector('.popup__text--address').textContent = arr.offer.adress;
  element.querySelector('.popup__title').textContent = arr.offer.title;
  element.querySelector('.popup__text--price').textContent = `${arr.offer.price} ₽/ночь`;
  element.querySelector('.popup__type').textContent = TYPES_OF_HOUSING[arr.offer.type];
  element.querySelector('.popup__text--capacity').textContent = `${arr.offer.rooms}  комнаты для ${arr.offer.guests} гостей`;
  element.querySelector('.popup__text--time').textContent = `Заезд после ${arr.offer.checkin}, выезд до ${arr.offer.checkout}`;
  element.querySelector('.popup__photo').src = arr.offer.photos;

  const desc = element.querySelector('.popup__description');
  desc.textContent = arr.offer.description;
  if (desc.textContent.length === 0) {
    desc.classList.add('.visually-hidden');
  }

  const features = element.querySelector('.popup__features');
  renderFeatures(arr.offer.features, features);

  fragment.appendChild(element);
  return fragment;
};


canvas.appendChild(renderCard(similarAdd[0]));

export {renderCard};
