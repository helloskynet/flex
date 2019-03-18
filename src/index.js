import Vue from 'vue';
import App from './APP/App.vue';
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
Vue.use(Antd);


new Vue({
  el: '#J_App',
  template: '<App/>',
  components: {
    App,
  }
})