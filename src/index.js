import Vue from 'vue';
import App from './element/main.vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from "element-ui";

Vue.use(ElementUI);

new Vue({
  el: '#J_App',
  template: '<App/>',
  components: {
    App,
  }
})