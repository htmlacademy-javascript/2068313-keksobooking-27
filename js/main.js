// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || max < min) {
    return NaN;
  }
  return Math.round(Math.random() * (max - min) + min);
}

getRandomNumber();

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomNumberWithPoint(min, max, amount) {
  if (min < 0 || max < 0 || amount < 0 || max < min) {
    return NaN;
  }
  return (Math.random() * (max - min) + min).toFixed(amount);
}

getRandomNumberWithPoint();
