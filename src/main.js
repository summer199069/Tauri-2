import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { Toast } from 'vant'
// // 1. 引入你需要的组件
// import { Button } from 'vant';
//全量引入vant组件
import Vant from 'vant'
// // 2. 引入组件样式
import 'vant/lib/index.css'
import './assets/styles/fonts.css' // 引入字体定义
const app = createApp(App)
app.use(Vant)
app.use(Toast)
app.use(router) // 路由管理
app.mount('#app')
