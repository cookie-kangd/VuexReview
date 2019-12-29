// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入Vuex
import Vuex from 'vuex'

Vue.config.productionTip = false
//Vue使用Vuex
Vue.use(Vuex)
const store = new Vuex.Store({
  //全局状态
  state: {
    count: 0
  },
  getters: {
    
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {

  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
