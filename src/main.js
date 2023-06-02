import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import MainBtn from '@/components/MainBtn'
import MainTitle from '@/components/MainTitle'
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";




const app = createApp(App);
app.component('main-btn', MainBtn)
app.component('main-title', MainTitle)
//routing
app.use(router)
app.use(PrimeVue)
app.mount('#app')
