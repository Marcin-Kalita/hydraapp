import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')

const addButton = document.querySelector ('.add-glass');

const closeButton = document.querySelector ('.remove-glass');

const GlassValue = document.querySelector ('.water__number');

const key = new Date ().toISOString ().slice(0,10);

let currentGlassValue = 0; 

addButton.addEventListener('click', () => {
          currentGlassValue++;
          GlassValue.innerHTML = currentGlassValue;
          localStorage.setItem (new Date, currentGlassValue);
})

closeButton.addEventListener('click', () => {
    currentGlassValue--;
    GlassValue.innerHTML = currentGlassValue;
})

