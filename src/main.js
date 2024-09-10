import Vue from 'vue'
import App from './App.vue'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由
import router from './router'
// 引入vuex
import store from './store'
// 引入icon
import '@/assets/icon/iconfont.css'
// 引入axios
import axios from "axios";
// 引入echarts
import echarts from 'echarts'


Vue.prototype.$axios = axios
// 挂载echarts
Vue.prototype.$echarts = echarts
// 关闭生产模式下给出的提示
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
