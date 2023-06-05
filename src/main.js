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
import en from "@/translateJsons/en.json";
import ru from "@/translateJsons/ru.json";
import arm from "@/translateJsons/arm.json";


const store = createStore({
    state() {
        return {
            doctorKey: '',
            currentLanguage: 'en',
            translations: {
                en,
                ru,
                arm
            }
        }
    },
    mutations: {
        changeDoctorKey(state, payload) {
            state.doctorKey = payload
        },

        changeLanguage(state, payload) {
            state.currentLanguage = payload
        },
    },
    getters: {
        getKey(state) {
            return state.doctorKey
        },

        getLanguage(state) {
            return  key => state.translations[state.currentLanguage][key];
        }
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
