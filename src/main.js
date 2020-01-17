import show from './show.js'
import './assets/main.css'

show('Webpack');

document.querySelector('#app').addEventListener('click', function() {
  import('./b.js')
}, false);