import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import {$toast} from 'components/content/details/toast'
import VueLazyload from "vue-lazyload";
Vue.use($toast)
import store from "./store";
Vue.prototype.$bus=new Vue()
FastClick.attach( document.body )
Vue.use(VueLazyload,{
  loading:require('./assets/img/placeholder.png')
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
