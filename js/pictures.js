const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooserAvatar = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');

fileChooserAvatar.addEventListener('change', () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
});

const fileChooserPhoto = document.querySelector('.ad-form__upload input[type=file]');
const previewphoto = document.querySelector('.ad-form__photo');

fileChooserPhoto.addEventListener('change', () => {

  const file = fileChooserPhoto.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  const imagesHouse = document.createElement('img');
  imagesHouse.style.width = '150px';
  imagesHouse.alt = 'Фотография жилья';
  imagesHouse.width = '100';
  imagesHouse.height = '100';
  imagesHouse.style.borderRadius = '5px';

  if (matches) {
    imagesHouse.src = URL.createObjectURL(file);
  }

  previewphoto.append(imagesHouse);

});


