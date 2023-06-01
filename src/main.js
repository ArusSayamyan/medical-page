import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import MainBtn from '@/components/MainBtn'
import MainTitle from '@/components/MainTitle'


const app = createApp(App);
app.component('main-btn', MainBtn)
app.component('main-title', MainTitle)
//routing
app.use(router)
app.mount('#app')
