import Vue from 'vue'
import App from './App.vue'
import plugin from './plugin'

Vue.config.productionTip = false


//使用插件
Vue.use(plugin)


new Vue({
  render: h => h(App),

  
  // render(h){
  //   return h('h1','Nihaoa')
  // },
}).$mount('#app')
