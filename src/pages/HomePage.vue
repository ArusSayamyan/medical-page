<template>
  <div class="pages">
    <div class="mainContainer__header" id="home">
      <div class="mainContainer__videoWrapper">
        <video class="mainContainer__headerVideo" autoplay loop muted>
          <source src="../assets/medvideo.mp4" type="video/mp4">
        </video>
      </div>
      <TheHeader/>
    </div>

    <!--      hightlught block-->
    <div class="mainContainer__highlightsContent">
      <base-wrapper>
      <div class="mainContainer__highlightsBlock">
        <swiper-vue
            class="swiper"
            :slides-per-view="1"
            :space-between="15"
            :keyboard="{ enabled: true }"
            swiper.animating=true
            :effect="'fade'"
            :modules="modules"
            :navigation="true"
            :pagination="{
      clickable: true,
    }"
        >
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/icons/hightlight1.jpg" alt="" class="mainContainer__highlightImg">
              <div class="mainContainer__highlightContent">
                <h3 class="mainContainer__highlightTitle">2019 {{ $t('conferences') }}</h3>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide" data-swiper-autoplay="2000">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf2.jpg" alt="" class="mainContainer__highlightImg">
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf3.jpg" alt="" class="mainContainer__highlightImg">
            </div>
          </swiper-slide>
          <swiper-slide class="slide" data-swiper-autoplay="2000">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf4.jpg" alt="" class="mainContainer__highlightImg">
            </div>
          </swiper-slide>
          <swiper-slide class="slide" data-swiper-autoplay="2000">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf6.jpg" alt="" class="mainContainer__highlightImg">
            </div>
          </swiper-slide>
        </swiper-vue>
        <swiper-vue
            class="swiper"
            :slides-per-view="1"
            :space-between="20"
            :keyboard="{ enabled: true }"
            swiper.animating=true
            :effect="'fade'"
            :modules="modules"
            :navigation="true"
            :pagination="{
            clickable: true,
    }"
        >
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf5.jpg" alt="" class="mainContainer__highlightImg">
              <div class="mainContainer__highlightContent">
                <h3 class="mainContainer__highlightTitle">2021 {{ $t('conferences') }}</h3>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf7.jpg" alt="" class="mainContainer__highlightImg">
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf8.jpg" alt="" class="mainContainer__highlightImg">
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf9.jpg" alt="" class="mainContainer__highlightImg">
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf10.jpg" alt="" class="mainContainer__highlightImg">
            </div>
          </swiper-slide>
        </swiper-vue>
        <swiper-vue
            class="swiper"
            :slides-per-view="1"
            :space-between="20"
            :keyboard="{ enabled: true }"
            swiper.animating=true
            :effect="'fade'"
            :modules="modules"
            :navigation="true"
            :pagination="{
            clickable: true,
            }"

        >
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf15.jpg" alt="" class="mainContainer__highlightImg">
              <div class="mainContainer__highlightContent">
                <h3 class="mainContainer__highlightTitle">2022 {{ $t('conferences') }}</h3>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf11.jpg" alt="" class="mainContainer__highlightImg">
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf12.jpg" alt="" class="mainContainer__highlightImg">
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf13.jpg" alt="" class="mainContainer__highlightImg">
            </div>
          </swiper-slide>
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf14.jpg" alt="" class="mainContainer__highlightImg">
            </div>
          </swiper-slide>
        </swiper-vue>

      </div>
      </base-wrapper>
    </div>

    <!--      our story-->
    <div class="mainContainer__story" id="ourStory">
      <OurStory></OurStory>
    </div>

    <!--    speakers-->
    <div class="mainContainer__speakers speakers" id="ourDoctors">
      <base-wrapper>
      <div class="speakers__wrapper">
        <div class="speakers__header">
          <div class="speakers__descSection">
            <main-title :main="$t('doctors')['title']['mainWorld']"
                        :important="$t('doctors')['title']['mainTitle']"></main-title>
            <p class="speakers__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut dolore</p>
          </div>
          <div class="speakers__descSection">
            <img src="../assets/imgs/user1.jpg" alt="" class="speakers__lead">
            <span class="speakers__featured">Featured</span>
            <doctor-info doctorName="Franklin Alier" :doctorSpec="$t('doctors')['specialist1']"></doctor-info>
          </div>
        </div>
        <div class="speakers__main">
          <div class="speakers__members">
            <swiper
                :slidesPerView="slidesPerView"
                :spaceBetween="20"
                :pagination="{
                clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
            >
              <swiper-slide v-for="obj in doctorsSlide" :key="obj.docSpec">
                <div class="speakers__doctor">
                  <img :src="obj.img" alt="" class="speakers__member">
                  <doctor-info :doctorName="obj.docName" :doctorSpec="$t('doctors')[obj.docSpec]"></doctor-info>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      </base-wrapper>
    </div>

    <!--    order tables-->

    <div class="mainContainer__orderTable orderTable">
      <base-wrapper>
      <div class="orderTable__tableSection">
        <main-title :main="$t('registration')['title']['mainWorld']"
                    :important="$t('registration')['title']['mainTitle']"></main-title>
        <div class="orderTable__tableWrapper">
          <table class="orderTable__table">
            <thead class="orderTable__thead">
            <tr>
              <th>{{ $t('registration')['docName'] }}</th>
              <th>{{ $t('registration')['date'] }}</th>
              <th>{{ $t('registration')['service'] }}</th>
              <th>{{ $t('registration')['price'] }}</th>
            </tr>
            </thead>
            <tbody class="orderTable__tbody">
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>02/06/23, 18:50</td>
              <td>service 1</td>
              <td>50$</td>
            </tr>
            <tr>
              <td>Berglunds snabbköp</td>
              <td>02/06/23, 18:50</td>
              <td>service 2</td>
              <td>50$</td>
            </tr>
            <tr v-for="obj in user" :key="obj.dateTime">
              <td>{{ obj.selectedDoctor.name }}</td>
              <td>
                {{ new Date(obj.dateTime).toLocaleDateString() + ' / ' + new Date(obj.dateTime).toLocaleTimeString() }}
              </td>
              <td><span v-for="service in obj.selectedServices" :key="service.id">{{ service.name }}<br></span></td>
              <td>{{ obj.totalCost }}$</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      </base-wrapper>
    </div>

    <!--    become a speaker-->

    <div class="mainContainer__becomeSpeaker" id="register">
      <base-wrapper>
      <div class="becomeSpeaker">
        <div class="becomeSpeaker__info">
          <main-title :main="$t('register')['title']['mainWorld']" :important="$t('register')['title']['mainTitle']"
                      :isWhite="true"></main-title>
          <p class="becomeSpeaker__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut dolore</p>
        </div>
        <div class="becomeSpeaker__btnBlock">
          <router-link to="/register" class="becomeSpeaker__link">{{ $t('register')['linkContent'] }}</router-link>
        </div>
      </div>
      </base-wrapper>
    </div>

    <!--    tickets block-->

    <div class="mainContainer__tickets" id="tickets">
      <main-title :main="$t('primaryCare')['title']['mainWorld']" :important="$t('primaryCare')['title']['mainTitle']"
                  centered></main-title>
      <base-wrapper>
      <div class="mainContainer__ticketsWrapper">
        <MainTicket/>
      </div>
      </base-wrapper>
    </div>

    <!--    contact us-->
    <div class="mainContainer__contactUs" id="contactUs">
      <base-wrapper>
      <div class="mainContainer__contactUsWrapper">
        <main-title :main="$t('contactUs')['title']['mainWorld']" :important="$t('contactUs')['title']['mainTitle']"></main-title>
        <div class="mainContainer__contactContent">
          <div class="mainContainer__mapBlock">
            <iframe class="mainContainer__map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.091461689997!2d-73.9866630916883!3d40.758001294831736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855a96da09d%3A0x860bf5a5e1a00a68!2sTimes%20Square%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2ssg!4v1643035529098!5m2!1sen!2ssg"
                    width="100%" height="371.59" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div class="mainContainer__contactInfo">
            <div class="mainContainer__contactHeader">
              <h4 class="mainContainer__contactTitle">Times Square</h4>
            </div>
            <div class="mainContainer__contactMain">
              <ul class="mainContainer__contactList">
                <li class="mainContainer__contactItem mainContainer__contactItem--bolder">
                  <img src="../assets/icons/geo.svg" alt="" class="mainContainer__contactGeo">
                  102 South. 7th Street, New York, NY 10036, USA
                </li>
                <li class="mainContainer__contactItem">
                  <img src="../assets/icons/envelope.svg" alt="" class="mainContainer__contactIcon">
                  hi@company.com
                </li>
                <li class="mainContainer__contactItem">
                  <img src="../assets/icons/telephone.svg" alt="" class="mainContainer__contactIcon">
                  010-020-0340
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
      </base-wrapper>
    </div>

    <!--    users messages-->

    <div class="mainContainer__usersMessages" id="opinion">
      <base-wrapper>
      <div class="mainContainer__usersMessagesContent usersMessages">
        <div class="usersMessages__block">
          <div class="usersMessages__header">
            <h4 class="usersMessages__name">{{ $t('messages')['title'] }}</h4>
          </div>
          <div class="usersMessages__main">
            <form class="usersMessages__form" @submit.prevent="isItValid">
              <div class="usersMessages__inputs">
                <input type="text" class="usersMessages__input" :placeholder="$t('messages')['username']" name="name" @keyup="validate($event.target, username)">
                <input type="email" class="usersMessages__input" :placeholder="$t('messages')['mail']" name="email" @keyup="validate($event.target, mail)">
                <input type="text" class="usersMessages__input" :placeholder="$t('messages')['subject']" name="subject" @keyup="validate($event.target, dni)">
              </div>
              <div class="usersMessages__opinion">
                <textarea name="message" :placeholder="$t('messages')['message']" id="" cols="30" rows="10"
                          class="usersMessages__message" @keyup="validate($event.target, message)"></textarea>
              </div>
              <button type="submit" class="usersMessages__sendBtn">{{ $t('messages')['submit'] }}</button>
            </form>
          </div>
        </div>
      </div>
      </base-wrapper>

    </div>
  </div>

</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/pagination';
import TheHeader from "@/layout/TheHeader";
import OurStory from "@/components/OurStory";
import MainTicket from "@/components/MainTicket";
import DoctorInfo from "@/components/DoctorInfo";

import 'swiper/css'
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";

// import required modules
import {EffectFade, Navigation, Pagination} from "swiper";
import doctor2 from '../assets/imgs/user2.jpg';
import doctor3 from '../assets/imgs/user3.jpg';
import doctor4 from '../assets/imgs/user4.jpg';
import doctor5 from '../assets/imgs/user5.jpg';
import doctor6 from '../assets/imgs/user6.jpg';
import doctor7 from '../assets/imgs/user7.jpg';
import doctor8 from '../assets/imgs/user8.jpg';
import BaseWrapper from "@/components/BaseWrapper.vue";

// import { Pagination } from 'swiper';
const slidesPerView = ref(4)
const modules = [EffectFade, Navigation, Pagination]

const doctorsSlide = [
  {
    img: doctor2,
    docName: 'Emily Ackerman',
    docSpec: 'specialist1'
  },
  {
    img: doctor3,
    docName: 'Dorcas Adaramola',
    docSpec: 'specialist2'
  },
  {
    img: doctor4,
    docName: 'Samantha Agar',
    docSpec: 'specialist3'
  },
  {
    img: doctor5,
    docName: 'Richard Austin',
    docSpec: 'specialist4'
  },
  {
    img: doctor6,
    docName: 'Robert Anderson',
    docSpec: 'specialist1'
  },
  {
    img: doctor7,
    docName: 'Kathryn Barlow',
    docSpec: 'specialist2'
  },
  {
    img: doctor8,
    docName: 'Joseph Shaffer',
    docSpec: 'specialist3'
  },
]
let user = JSON.parse(localStorage.getItem('data'));
const store = useStore()

// change Language
const $t = computed(() => {
  return store.getters.getLanguage

})

//change slider properties
function sliderMobile() {
  if (window.screen.availWidth > 992) {
    slidesPerView.value = 4
  } else if (window.screen.availWidth < 993 && window.screen.availWidth > 768) {
    slidesPerView.value = 2
  } else if (window.screen.availWidth < 768) {
    slidesPerView.value = 1
  }
}

window.addEventListener('resize', () => {
  sliderMobile();
})

onMounted(() => {
  sliderMobile();
})

//function of form validation
const username = /^[a-z\d]{3,12}$/i;
const dni = /^[A-Z]*\d{7}$/i
const mail = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
const message = /^[A-Z]/i


function validate(input, regex) {
  if (!regex.test(input.value)) {
    input.classList.add('invalid');
  } else {
    input.classList.remove('invalid');
  }

}

function isItValid() {
  const inputs  = document.querySelectorAll('.usersMessages__input, .usersMessages__message');
  // const mess  = document.querySelector('.usersMessages__message');
  inputs.forEach(input => {
    if (input.name === 'name') {
      validate(input, username)
    }else if(input.name === 'subject') {
      validate(input, dni)
    }else if(input.name === 'email') {
      validate(input, mail)
    }else if(input.name === 'message') {
      validate(input, message)
    }
  })
  for(let inp of inputs) {
    if(inp.classList.contains('invalid')) {
      return;
    }else {
      inp.value = '';
      message.value = '';
    }
  }

}

</script>

<style lang="scss">

* {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.mainContainer {

  &__contactInfo {
    width: 50%;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    margin-left: 15px;

    @media(max-width: 992px) {
      flex-basis: 48%;
      max-width: unset;
      margin-left: 0;
      width: 100%;

    }

  }

  &__contactGeo {
    width: 27px;
    height: 27px;
    object-fit: cover;
    margin: 5px 5px 0 0;
  }

  &__contactIcon {
    width: 21px;
    margin-right: 5px;
  }

  &__contactTitle {
    margin: 0;
    font-size: 36px;
  }

  &__contactHeader {
    display: flex;
    justify-content: space-between;
    padding: 25px;
    align-items: center;
    background: #273053;
    border-radius: 20px 20px 0 0;
    color: #fff;
    box-sizing: border-box;
  }

  &__contactMain {
    padding: 30px;
    box-sizing: border-box;
  }

  &__contactList {
    padding: 0 0 30px;
    list-style: none;
    box-sizing: border-box;
  }

  &__contactItem {
    color: #717275;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: flex-start;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &--bolder {
      font-size: 28px;
      color: #000;
    }
  }


  &__nav {
    background-color: #273053;
    position: fixed;
    width: 100%;
    z-index: 2;
  }

  &__ticketsWrapper {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    @media(max-width: 992px) {
      row-gap: 25px;
      flex-wrap: wrap;
    }

    @media(max-width: 768px) {
      flex-direction: column;
    }
  }

  &__contactUs {
    padding: 55px 0;
    background-color: #f0f8ff;
  }

  &__contactContent {
    display: flex;
    justify-content: space-between;

    @media(max-width: 992px) {
      flex-direction: column;
      row-gap: 15px;
    }

    & .pricingTicket {
      @media(max-width: 992px) {
        max-width: unset;
      }
    }
  }

  &__mapBlock {
    width: 50%;

    @media(max-width: 992px) {
      width: 100%;
    }
  }

  &__map {
    border: none;
    border-radius: 20px;
  }

  //users messages

  &__usersMessages {
    background-image: url(../assets/imgs/usersMessages.jpg);
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    padding: 100px 0;
  }

  //header

  &__header {
    width: 100%;
    position: relative;
  }

  &__headerVideo {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }

  &__becomeSpeaker {
    background-image: url(../assets/imgs/speakersBg.jpg);
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    padding: 100px 0;
  }

  &__highlightsContent {
    background-color: #273053;
  }

  &__highlightsBlock {
    display: flex;
    justify-content: space-between;

    @media(max-width: 992px) {
      flex-wrap: wrap;
      row-gap: 30px;
    }
  }

  &__highlightImg {
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  &__highlight {
    max-width: 400px;
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 100%;

    @media(max-width: 992px) {
      width: 320px;
    }

    @media(max-width: 768px) {
      width: 100%;
      max-width: unset;
    }

    &:nth-child(2) {
      margin: 0 15px;
    }

    &:after {
      content: "";
      background: rgba(0, 0, 0, 0.45);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  }

  &__highlightContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 1;

  }

  &__highlightTitle {
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 36px;

    @media(max-width: 992px) {
      font-size: 30px;
    }
  }

  &__videoWrapper {
    &:after {
      content: "";
      background: rgba(0, 0, 0, 0) linear-gradient(rgba(39, 48, 83, 0.1) 0%, rgb(39, 48, 83) 100%) repeat scroll 0% 0%;
      position: absolute;
      top: 6px;
      right: 0;
      bottom: 0;
      left: 0;
      margin-bottom: -5px;
      height: 600px;
    }
  }

  &__speakers {
    background-color: #f0f8ff;
    padding: 120px 0;
    box-sizing: border-box;

    @media(max-width: 768px) {
      padding: 16px;
    }
  }
}

.speakers {
  &__wrapper {
    @media(max-width: 500px) {
      padding: 0;
    }
  }

  &__descSection {
    width: 50%;
    position: relative;

    @media(max-width: 992px) {
      width: 100%;
    }

    &:first-child {
      padding: 100px;
      box-sizing: border-box;

      @media(max-width: 1024px) {
        padding: 10px;
      }
    }
  }

  &__lead {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__header {
    display: flex;
    justify-content: space-between;

    @media(max-width: 992px) {
      flex-direction: column;
    }
  }

  &__main {
    margin-top: 8px;
  }

  &__desc {
    font-size: 18px;
    color: #717275;
  }

  &__members {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media(max-width: 992px) {
      row-gap: 15px;
    }
  }

  &__doctor {
    width: 100%;
    box-sizing: border-box;
    position: relative;

    @media(max-width: 992px) {
      flex-basis: 49%;
    }

    @media(max-width: 768px) {
      flex-basis: unset;
      width: 100%;
    }
  }


  &__member {
    width: 100%;
    height: 100%;
  }

  &__featured {
    background: #0d6efd;
    border-radius: 4px;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
    text-transform: uppercase;
    margin: 10px;
    padding: 4px 12px;
  }
}

//style of table
.orderTable {
  &__tableWrapper {
    overflow-x: auto;
  }

  &__table {
    border-collapse: collapse;
    width: 100%;

    & td, & th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    & tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    & tr:hover {
      background-color: #ddd;
    }

    & th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #273053;
      color: white;
    }
  }
}

//fixed background section

.becomeSpeaker {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 960px) {
    flex-direction: column;
    align-items: unset;
  }


  &__info {
    width: 80%;

    @media(max-width: 992px) {
      width: 100%;
    }
  }

  &__desc {
    font-size: 18px;
    color: #fff;
  }

  &__link {
    border: none;
    color: #000;
    padding: 15px 25px;
    font-size: 16px;
    margin-right: 20px;
    cursor: pointer;
    text-align: center;
    background: #fff;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 700;


    &:hover {
      background: #0dcaf0;
      color: #fff;
      border: 2px solid #0dcaf0;
    }
  }

  &__btnBlock {
    @media(max-width: 960px) {
      margin-top: 25px;
    }
  }

}

.usersMessages {

  &__block {
    max-width: 750px;
    width: 100%;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    background-color: #fff;
    margin: 0 auto;
  }


  &__name {
    margin: 0;
    font-size: 32px;
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

  &__input {
    border: none;
    padding: 13px;
    box-sizing: border-box;
    background-color: #f0f8ff;
    color: #212529;
    max-width: 220px;
    width: 100%;
    border-radius: 5px;
    outline: none;

    &::placeholder {
      font-size: 16px;
      font-family: sans-serif;
      color: #717275;
    }

    &:nth-child(2) {
      margin: 0 20px;

      @media(max-width: 768px) {
        margin: 0 0 10px 0;
      }
    }

    @media(max-width: 768px) {
      max-width: unset;
      margin-bottom: 10px;
    }
  }

  &__inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    @media(max-width: 768px) {
      margin-bottom: 0;
      flex-direction: column;
    }
  }

  &__message {
    border: none;
    padding: 13px;
    box-sizing: border-box;
    background-color: #f0f8ff;
    color: #212529;
    border-radius: 5px;
    width: 100%;
    resize: none;
    outline: none;
    font-family: sans-serif;

    &::placeholder {
      font-size: 16px;
      font-family: sans-serif;
      color: #717275;
    }
  }

  &__sendBtn {
    border: none;
    margin-top: 20px;
    width: 100%;
    background: #0dcaf0;
    border-radius: 100px;
    color: #fff;
    font-weight: 700;
    transition: all 0.3s;
    margin-bottom: 0;
    padding: 13px 0;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      background: #273053;
    }
  }

}

.swiper {
  margin: 0;
}

.swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 0 !important;
}

.swiper-pagination-bullet-active {
  background: #000 !important;
}

.swiper-horizontal {
  width: 400px;
  cursor: grab;

  @media(max-width: 992px) {
    width: 320px
  }

  @media(max-width: 768px) {
    width: 100%;
  }

  &:nth-child(2) {
    margin: 0 10px;

    @media(max-width: 992px) {
      margin: 0
    }
  }
}

.swiper-button-next {
  right: 14px;
  left: auto;
  position: absolute;
  top: 40px;
  width: 10px;
  height: 10px;
  color: #000;
}

.swiper-button-prev {
  right: 64px;
  left: auto;
  position: absolute;
  top: 40px;
  width: 10px;
  height: 10px;
  color: #000;
}

.swiper-button-next::after {
  font-size: 14px;
}

.swiper-button-prev::after {
  font-size: 14px;
}

.swiper-pagination-bullet {
  background: #c7d2fe;
}

.swiper-pagination-bullet-active {
  background: #ffff !important;
}

.swiper-button-prev, .swiper-button-next {
  display: none;
}

.speakers__members .swiper-horizontal {
  width: 100% !important;
  padding: 20px 0;
}

.speakers__members .swiper-pagination-bullet {
  background: #6b6f82;
}

.swiper-pagination-bullet-active {
  background: #635f82 !important;
}


.invalid {
  border: 1px solid red;
  border-radius: 5px;
  outline: none;
  animation: shake 100ms 2 linear;
  -moz-animation: shake 150ms 2 linear
}

@keyframes shake {
  0% {
    transform: translate(3px, 0);
  }
  50% {
    transform: translate(-3px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}


</style>