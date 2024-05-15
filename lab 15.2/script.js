'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imageContainer = document.querySelector('.images');

///////////////////////////////////////
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imageContainer.appendChild(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Failure for image loaded'));
    });
  });
};

const loadNPause = async () => {
  try {
    let img = await createImage('./img/img-1.jpg');
    await wait(2);
    img.style.display = 'none';

    // img--2
    img = await createImage('./img/img-2.jpg');
    await wait(2);
    img.style.display = 'none';

    // img--3
    img = await createImage('./img/img-3.jpg');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

loadNPause();

// createImage('./img/img-1.jpg')
//   .then(img => {
//     displayHide = img;
//     return wait(2);
//   })
//   .then(() => {
//     displayHide.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   // img--2
//   .then(img => {
//     displayHide = img;
//     return wait(2);
//   })
//   .then(() => {
//     displayHide.style.display = 'none';
//     return createImage('./img/img-3.jpg');
//   })
//   // img--3
//   .then(img => {
//     displayHide = img;
//     return wait(2);
//   })
//   .then(() => {
//     displayHide.style.display = 'none';
//   })
//   .catch(err => console.error(err));
