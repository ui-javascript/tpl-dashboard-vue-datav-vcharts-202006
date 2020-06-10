import Vue from 'vue'
import ElementUI from 'element-ui';
import DataV from '@jiaminghi/data-view'
import VCharts from 'v-charts'
import VeMap from 'v-charts/lib/map.common'


// 样式
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.less'

// 组件
import router from './router'
import App from './App.vue'

// import echarts from "echarts";
// Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

// 注册组件
Vue.use(DataV)
Vue.use(VCharts)
Vue.use(ElementUI, {
  // size: 'medium',
})
Vue.component(VeMap.name, VeMap)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
