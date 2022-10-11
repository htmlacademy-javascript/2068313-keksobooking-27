function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }
  return Math.round(Math.random() * (max - min) + min);
}


function getRandomNumberWithPoint(min, max, amount) {
  if (min < 0 || max < 0 || amount < 0 || max < min) {
    return NaN;
  }
  return (Math.random() * (max - min) + min).toFixed(amount);
}


const offer = {
  title : ['Выгодное предложение','разные плюшки', 'самый лучший отдых', 'Лучшее предложение этого месяца',],
  adress : '{{location.lat}}, {{location.lng}}',
  price : 0,
  type : ['palace', 'flat', 'house', 'bungalow', 'hotel',],
  rooms : 0,
  guests :0,
  checkin : ['12:00', '13:00', '14:00',],
  checkout : ['12:00', '13:00', '14:00',],
  features : ['wifi','dishwasher','parking', 'washer', 'elevator', 'conditioner'],
  description : ['Кондиционер', 'тренажерный зал', 'спа процедуры','хороший вид',],
  photos : ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
};

// lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

// lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.

const xMin = 35.65000;
const xMax = 35.70000;

const yMin = 139.70000;
const yMax = 139.80000;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const SIMILAR_ADD_COUNT = 10;

const createAdd = () => ({


  author: {
    avatar : `${getRandomNumber(0, 10) < 10 ? `img/avatars/user${0}${getRandomNumber(0, 10)}.png` : `img/avatars/user${getRandomNumber(0, 10)}.png}`
    }`
  },
  location : {
    lat : `${getRandomNumberWithPoint(xMin, xMax, 5)}`,
    lng : `${getRandomNumberWithPoint(yMin, yMax, 5)}`,
  },
  offer : {
    title :[getRandomArrayElement(offer.title)],
    adress : `${getRandomNumberWithPoint(xMin, xMax, 5)}, ${getRandomNumberWithPoint(yMin, yMax, 5)}`,
    price : getRandomNumber(1, 10),
    type : [getRandomArrayElement(offer.type)],
    rooms : getRandomNumber(1, 10),
    guests :getRandomNumber(1, 10),
    checkin : [getRandomArrayElement(offer.checkin)],
    checkout : [getRandomArrayElement(offer.checkout)],
    features : [getRandomArrayElement(offer.features)],
    description : [getRandomArrayElement(offer.description)],
    photos : [getRandomArrayElement(offer.photos)],
  },

});

createAdd();

const similarAdd = Array.from({length: SIMILAR_ADD_COUNT}, createAdd);

// eslint-disable-next-line no-console
console.log(similarAdd);

