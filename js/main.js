//Закрытие и открытие модального окна
const buttonModal = document.querySelector('#upload-file');
const popupImg = document.querySelector('.img-upload__overlay');
const closePopupImg = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

buttonModal.addEventListener('click', () => {
  popupImg.classList.remove('hidden');
  body.classList.add('modal-open');
});
closePopupImg.addEventListener('click', () => {
  popupImg.classList.add('hidden');
  body.classList.remove('modal-open');
});
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    popupImg.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

//Уменьшение и увеличение размера изображения
const less = document.querySelector('.scale__control--smaller');
const more = document.querySelector('.scale__control--bigger');
const sizeValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

less.onclick = function () {
  if (parseInt(sizeValue.value, 10) > 0) {
    sizeValue.value = `${parseInt(sizeValue.value, 10) - 25  }%`;
    imgPreview.style.transform = `scale(${  sizeValue.value  })`;
  }
};
more.onclick = function () {

  if (parseInt(sizeValue.value, 10) < 100) {
    sizeValue.value = `${parseInt(sizeValue.value, 10) + 25  }%`;
    imgPreview.style.transform = `scale(${  sizeValue.value  })`;
  }
};

//Добавляем эффект на картинку
const effectsRadio = document.querySelectorAll('.effects__radio');
const img = document.querySelector('img');
const effectsPreview = document.querySelectorAll('.effects__preview');
for (let i = 0; i < effectsRadio.length; i++) {
  for (let j = 0; j < effectsPreview.length; j++) {
    effectsRadio[i].onchange = function () {
      img.classList.remove(img.classList[0]);
      img.classList.add(effectsPreview[j].classList[1]);
    };
  }
}

//Настройка слайдера
const slider = document.getElementById('slider');
const filter = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

noUiSlider.create(slider, {
  start: 1,
  step: 0.1,
  range: {
    'min': 0,
    'max': 1
  },

});


slider.noUiSlider.on('update', () => {
  for (let i = 0; i < filter.length; i++) {
    for (let j = 0; j < effectsRadio.length; j++) {
      img.style.filter = `${effectsRadio[j].value  }(${  slider.noUiSlider.get()  })`;
    }
  }
});


// Проверяем длину комментария
const commentInput = document.querySelector('.text__description');

const getLengthComment = commentInput.oninput = function (textarea, amount) {
  textarea = commentInput;
  amount = 139;
  if (textarea.value.length > amount) {
    commentInput.maxLength = '';
  }
};
getLengthComment();
