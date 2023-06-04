import { createApp } from 'vue'
import { createStore } from 'vuex'
import router from './router'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import MainBtn from '@/components/MainBtn'
import MainTitle from '@/components/MainTitle'
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import { Swiper, SwiperSlide } from 'swiper/vue'


const store = createStore({
    state() {
        return {
            doctorKey: '',
        }
    },
    mutations: {
        changeDoctorKey(state, payload) {
            state.doctorKey = payload
        },
    },
    getters: {
        getKey(state) {
            return state.doctorKey
        },
    },
})



const app = createApp(App);
app.component('main-btn', MainBtn)
app.component('main-title', MainTitle)
app.component('swiper-vue', Swiper)
app.component('swiper-slide', SwiperSlide)
//routing
app.use(router)
app.use(PrimeVue)
app.use(store)
app.mount('#app')
