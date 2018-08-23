import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import vueFunc from './assets/js/VueFunction.js'

Vue.use(iview)
Vue.config.productionTip = false
Vue.prototype.vueFunc = vueFunc

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')