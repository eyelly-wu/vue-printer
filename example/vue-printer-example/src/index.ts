import Vue from 'vue'
import app from './app.vue'
import Printer from '@eyelly/vue-printer'

Vue.component('Printer', Printer)

new Vue({
  el: '#app',
  render: (h: Function) => h(app)
})
