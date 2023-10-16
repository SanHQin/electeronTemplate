import { createApp } from 'vue'
import './style.css'
//引入路由
import router from './router'
//引入VueX
import store from './store'

import App from './App.vue'


const app = createApp(App)

//使用Router路由
app.use(router)
//使用VueX
app.use(store);

app.mount("#app")
