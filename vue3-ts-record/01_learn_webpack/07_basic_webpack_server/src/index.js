import { sum } from './js/math'
import { createApp } from 'vue/dist/vue.esm-bundler'
const { priceFormat } = require('./js/format')

import App from './vue/App.vue'

console.log(sum(20, 30))
console.log(priceFormat())

const app = createApp(App)
app.mount('#app')
