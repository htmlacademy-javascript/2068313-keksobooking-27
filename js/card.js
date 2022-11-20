const template = document.querySelector('#card').content;
const popup = template.querySelector('.popup');

const PHOTO_WIDTH = 45;
const PHOTO_HEIGHT = 40;
const TYPES_OF_HOUSING = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};


const createFeatures = (features) => {
  const featuresFragment = document.createDocumentFragment();
  features.forEach((element) => {
    const featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature', `popup__feature--${element}`);
    featuresFragment.appendChild(featureElement);
  });
  return featuresFragment;
};

const createPhotos = (photos) => {
  const photosFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const PhotoElement = document.createElement('img');
    PhotoElement.classList.add('popup__photo');
    PhotoElement.src = photo;
    PhotoElement.alt = 'Фотография жилья';
    PhotoElement.width = PHOTO_WIDTH;
    PhotoElement.height = PHOTO_HEIGHT;
    photosFragment.appendChild(PhotoElement);
  });
  return photosFragment;
};

const renderCard = (arr) => {

  const cradElement = popup.cloneNode(true);
  cradElement.querySelector('.popup__avatar').src = arr.author.avatar;
  cradElement.querySelector('.popup__text--address').textContent = arr.offer.address;
  cradElement.querySelector('.popup__title').textContent = arr.offer.title;
  cradElement.querySelector('.popup__text--price').textContent = `${arr.offer.price} ₽/ночь`;
  cradElement.querySelector('.popup__type').textContent = TYPES_OF_HOUSING[arr.offer.type];
  cradElement.querySelector('.popup__text--capacity').textContent = `${arr.offer.rooms}  комнаты для ${arr.offer.guests} гостей`;
  cradElement.querySelector('.popup__text--time').textContent = `Заезд после ${arr.offer.checkin}, выезд до ${arr.offer.checkout}`;

  const CardDesc = cradElement.querySelector('.popup__description');
  CardDesc.textContent = arr.offer.description;
  if (CardDesc && CardDesc.textContent.length === 0) {
    CardDesc.classList.add('visually-hidden');
  }

  const Cardfeatures = cradElement.querySelector('.popup__features');
  Cardfeatures.innerHTML = '';
  if (arr.offer.features) {
    const newFeatureElements = createFeatures(arr.offer.features);
    Cardfeatures.appendChild(newFeatureElements);
  } else {
    Cardfeatures.classList.add('visually-hidden');
  }

  const Cardphoto = cradElement.querySelector('.popup__photos');
  Cardphoto.innerHTML = '';
  if (arr.offer.photos) {
    const newPhotoElements = createPhotos(arr.offer.photos);
    Cardphoto.appendChild(newPhotoElements);
  } else {
    Cardphoto.classList.add('visually-hidden');
  }


  return cradElement;
};

export {renderCard};
