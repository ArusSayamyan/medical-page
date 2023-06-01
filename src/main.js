import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import MainBtn from '@/components/MainBtn'


const app = createApp(App);
app.component('main-btn', MainBtn)
//routing
app.use(router)
app.mount('#app')
