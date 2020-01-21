console.log('hello, webpack')
import './assets/index.css'
import Vue from 'vue'
import App from './app'

new Vue({
  render: h => h(App)
}).$mount('#app')