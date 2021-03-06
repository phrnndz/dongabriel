// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueKinesis from 'vue-kinesis'
import VueCarousel from 'vue-carousel';
import VueImageLoader from '@kevindesousa/vue-image-loader'

Vue.use(VueImageLoader)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
