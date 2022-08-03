import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 全局引入Element-Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入清除浏览器默认样式
import '@/assets/less/rest.less'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faBell } from '@fortawesome/free-solid-svg-icons'
import { faAffiliatetheme } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faAffiliatetheme,faBell)

const app = createApp(App)
// 注册使用图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('font-awesome-icon', FontAwesomeIcon)
// 注册使用Element-Plus
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')