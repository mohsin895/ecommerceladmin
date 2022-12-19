// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import plugin from './plugin/plugin'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Import vuematerials
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

//import vue svg icons
import icons from "v-svg-icons";
Vue.component("icon", icons);


//import language file
import language from '@/language.json'
Vue.prototype.$language = language;





Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  plugin,
  components: { App },
  template: '<App/>'
})
