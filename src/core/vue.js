import Vue from 'vue';
import App from './App.vue';
import store from './store';

new Vue({
  el: '#app', // 找到 index.html 中 id为元素
  store,
  render: h => h(App) // render 和 template 作用一样是用来创建html模板
})
