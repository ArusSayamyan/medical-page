<template>
  <swiper
      :slidesPerView="slidesPerView"
      :spaceBetween="20"
      :pagination="{
      clickable: true,
    }"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide v-for="obj in services" :key="obj.id">
  <div class="pricingTicket" >
    <div class="pricingTicket__header">
      <h4 class="pricingTicket__name">{{ obj.doctorName }}</h4>
      <h5 class="pricingTicket__price">{{ obj.price }}$</h5>
    </div>
    <div class="pricingTicket__main">
      <ul class="pricingTicket__list">
        <li class="pricingTicket__item" v-for="serv in obj.service" :key="serv">{{ serv }}</li>
        <li class="pricingTicket__item">24/7 Support</li>
      </ul>
      <p class="pricingTicket__desc">Quick group meetings for multiple teams</p>
      <router-link to="/chat" class="pricingTicket__chat">Buy ticket</router-link>
    </div>
  </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import {ref, onMounted} from 'vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper';
const slidesPerView = ref(3)
const modules = [Pagination]
const  services  = ref([
  {
    id: 'serv1',
    doctorName: 'Illiam Agras',
    service: ['Dental care', 'Preventative care'],
    price: 300
  },
  {
    id: 'serv2',
    doctorName: 'Virginia Apgar',
    service: ['Laboratory and diagnostic care', 'Physical and occupational therapy'],
    price: 300
  },
  {
    id: 'serv3',
    doctorName: 'Jean Astruc',
    service: ['Pharmaceutical care', 'Nutritional support'],
    price: 300
  },
  {
    id: 'serv4',
    doctorName: 'Gerbrand Bakker',
    service: ['Dental care', 'Physical and occupational therapy'],
    price: 300
  },
  {
    id: 'serv5',
    doctorName: 'Norman Bethune',
    service: ['Physical and occupational therapy', 'Preventative care'],
    price: 300
  }
])

function changeSliderValue() {
  if(window.screen.availWidth > 1024) {
    slidesPerView.value = 3
  }else if(window.screen.availWidth < 1024 && window.screen.availWidth > 768) {
    slidesPerView.value = 2
  }else if(window.screen.availWidth < 768) {
    slidesPerView.value = 1
  }
}

window.addEventListener('resize', ()=> {
  changeSliderValue();
})

onMounted(()=> {
  changeSliderValue();
})
</script>

<style scoped lang="scss">
.pricingTicket {
  max-width: 415px;
  width: 100%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;

  @media(max-width: 1024px) {
    margin: 0 auto;
  }

  @media(max-width: 992px) {
    flex-basis: 48%;
    max-width: unset;

  }

  &:nth-child(2) {
    margin: 0 20px;

    @media(max-width: 992px) {
      margin: 0;
    }
  }

  &__name {
    margin: 0;
    font-size: 20px;
  }

  &__price {
    margin: 0;
    font-size: 20px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    align-items: center;
    background: #273053;
    border-radius: 20px 20px 0 0;
    color: #fff;
    box-sizing: border-box;
  }

  &__main {
    padding: 30px;
    box-sizing: border-box;
  }

  &__list {
    padding: 0 0 30px;
    list-style: none;
    border-bottom: 1px solid #dee2e6;
    box-sizing: border-box;
  }

  &__item {
    color: #717275;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__desc {
    color: #717275;
    font-size: 18px;
  }

  &__chat {
    padding: 10px 20px;
    font-size: 16px;
    margin-right: 20px;
    cursor: pointer;
    text-align: center;
    background: none;
    border-radius: 25px;
    background: #273053;
    border: 2px solid #273053;
    color: #fff;
    outline: none;
    text-decoration: none;
  }
}

.mainContainer__ticketsWrapper .swiper-horizontal {
  width: 100%;
  padding: 20px 10px !important;

}

</style>