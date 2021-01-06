import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Filters from './filters/index';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './styles/base.less';
const app = createApp(App);

app.config.globalProperties.$filters = Filters;

console.log(app);
app
  .use(store)
  .use(Antd)
  .use(router)
  .mount('#app');

// 配置全局参数页面提示问题
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $f: typeof Filters;
  }
}
export {};
