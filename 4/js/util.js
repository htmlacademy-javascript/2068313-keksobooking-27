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

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export {getRandomArrayElement, getRandomNumberWithPoint, getRandomNumber};

