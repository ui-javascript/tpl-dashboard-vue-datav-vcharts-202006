import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './assets/common.less'

import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false

Vue.use(dataV)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
