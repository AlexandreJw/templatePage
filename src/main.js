/**
 * 只针对开发环境，承载开发调试时的组件渲染，如果模拟组件的props
 * 请不要在这加传递数据，因为每次编译（npm run dev/start）都会覆盖此文件，请在对应的组件中写好default即可
 */
import Vue from 'vue';
import example from '../example/index.vue';

/* eslint-disable no-new */
new Vue({el: '#app', render(h) { return h(example); }});
