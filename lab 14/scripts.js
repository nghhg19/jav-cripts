const msg = document.querySelector('.top-banner .msg');
const list = document.querySelector('.ajax-section .cities');
const input = document.querySelector('.top-banner .input-city');
const form = document.forms[0];

const apiKey = '8ef33955fa1dacfae7dc4ae177bdec4c';

/* Your code: check list arrays */
const renderList = function (main, name, sys, weather, icon) {
  const html = `<li class='city city-name'><p>${name} <sup>${
    sys.country
  }</sup></p>
  <p class='city-temp'>${Math.floor(main.temp)}°C</p>
  <p class='city-icon'><img src="${icon}" alt="My Happy SVG"/></p>
  <p>${weather[0].description}</p></li>`;
  list.insertAdjacentHTML('beforeend', html);
};

//ajax here
form.addEventListener('submit', e => {
  e.preventDefault();
  let inputVal = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
      /* Your code: process element */
      renderList(main, name, sys, weather, icon);
    })
    .catch(() => {
      msg.textContent = 'Please search for a valid city';
    });
  msg.textContent = '';
  form.reset();
  input.focus();
});
