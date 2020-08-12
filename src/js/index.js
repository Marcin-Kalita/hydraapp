import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')

const addButton = document.querySelector ('.add-beer');

const closeButton = document.querySelector ('.enclose-beer');

const beerValue = document.querySelector ('.beer__number');

const key = new Date ().toISOString ().slice(0,10);

const myNumber = beerValue;

addButton.addEventListener('click', () => {
    function calculate (myNumber){
        return myNumber+1;
}   localStorage.setItem (new Date, calculate('click'));
})
