const TIMEOUT_DELAY = 500;
const isEscEvent = (evt) => evt.key === ('Escape' || 'Esc');

const debounce = (callback, timeoutDelay = TIMEOUT_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {isEscEvent, debounce};

