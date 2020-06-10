import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VCharts from 'v-charts'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './assets/global.less'

import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false

Vue.use(dataV)
Vue.use(VCharts)

import VeMap from 'v-charts/lib/map.common'
Vue.component(VeMap.name, VeMap)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
