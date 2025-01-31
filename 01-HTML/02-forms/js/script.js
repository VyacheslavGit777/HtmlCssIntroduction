'use strict';

const demoSection = document.querySelector('.DemoSection');
const demoForm = document.querySelector('.DemoForm');
const buttonShow = document.querySelector('.buttonShow');

demoSection.addEventListener('click', e => {
  demoForm.style.display = e.target === buttonShow ? 'block' : 'none';
  buttonShow.style.display = e.target === buttonShow ? 'none' : 'block';
});
