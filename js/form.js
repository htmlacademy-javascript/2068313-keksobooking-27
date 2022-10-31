const form = document.querySelector('.ad-form');
const fieldsets = form.querySelectorAll('fieldset');

const formDisable = () => {
  form.classList.add('ad-form--disabled');
  fieldsets.forEach((elem)=>{
    elem.disabled = true;
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
