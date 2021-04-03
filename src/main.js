import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueSax)
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
