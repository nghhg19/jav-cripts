'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const imageContainer = document.querySelector('.images');

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

let displayHide;

createImage('./img/img-1.jpg')
  .then(img => {
    displayHide = img;
    return wait(2);
  })
  .then(() => {
    displayHide.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  // img--2
  .then(img => {
    displayHide = img;
    return wait(2);
  })
  .then(() => {
    displayHide.style.display = 'none';
    return createImage('./img/img-3.jpg');
  })
  // img--3
  .then(img => {
    displayHide = img;
    return wait(2);
  })
  .then(() => {
    displayHide.style.display = 'none';
  })
  .catch(err => console.error(err));
