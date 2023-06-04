<template>
  <div class="pages">
    <div class="mainContainer__header">
      <div class="mainContainer__videoWrapper">
        <video class="mainContainer__headerVideo" autoplay loop muted>
          <source src="../assets/medvideo.mp4" type="video/mp4">
        </video>
      </div>
      <TheHeader/>
    </div>

    <!--      hightlught block-->
    <div class="mainContainer__highlightsContent">
      <div class="mainContainer__highlightsBlock">
        <swiper-vue
            class="swiper"
            :slides-per-view="1"
            :space-between="20"
            :keyboard="{ enabled: true }"
            swiper.animating=true
        >
          <swiper-slide class="slide">
        <div class="mainContainer__highlight">
          <img src="../assets/icons/hightlight1.jpg" alt="" class="mainContainer__highlightImg">
          <div class="mainContainer__highlightContent">
            <h3 class="mainContainer__highlightTitle">2019 Highlights</h3>
          </div>
        </div>
          </swiper-slide>
          <swiper-slide class="slide">
          <div class="mainContainer__highlight">
            <img src="../assets/imgs/medConf2.jpg" alt="" class="mainContainer__highlightImg">
          </div>
          </swiper-slide>
          <swiper-slide class="slide">
          <div class="mainContainer__highlight">
            <img src="../assets/imgs/medConf3.jpg" alt="" class="mainContainer__highlightImg">
          </div>
          </swiper-slide>
          <swiper-slide class="slide">
          <div class="mainContainer__highlight">
            <img src="../assets/imgs/medConf4.jpg" alt="" class="mainContainer__highlightImg">
          </div>
          </swiper-slide>
          <swiper-slide class="slide">
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
        >
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf5.jpg" alt="" class="mainContainer__highlightImg">
              <div class="mainContainer__highlightContent">
                <h3 class="mainContainer__highlightTitle">2021 Highlights</h3>
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
        >
          <swiper-slide class="slide">
            <div class="mainContainer__highlight">
              <img src="../assets/imgs/medConf15.jpg" alt="" class="mainContainer__highlightImg">
              <div class="mainContainer__highlightContent">
                <h3 class="mainContainer__highlightTitle">2022 Highlights</h3>
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
    </div>

    <!--      our story-->
    <div class="mainContainer__story" id="ourStory">
      <OurStory></OurStory>
    </div>

    <!--    speakers-->
    <div class="mainContainer__speakers speakers" id="ourDoctors">
      <div class="speakers__wrapper">
        <div class="speakers__header">
          <div class="speakers__descSection">
            <main-title main="Our" important="Doctors"></main-title>
            <p class="speakers__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut dolore</p>
          </div>
          <div class="speakers__descSection">
            <img src="../assets/imgs/user1.jpg" alt="" class="speakers__lead">
            <span class="speakers__featured">Featured</span>
            <doctor-info doctorName="Franklin Alier" doctorSpec="Neurologist"></doctor-info>
          </div>
        </div>
        <div class="speakers__main">
          <div class="speakers__members">
            <div class="speakers__doctor">
              <img src="../assets/imgs/user2.jpg" alt="" class="speakers__member">
              <doctor-info doctorName="Emily Ackerman" doctorSpec="Neurologist"></doctor-info>
            </div>
            <div class="speakers__doctor">
              <img src="../assets/imgs/user3.jpg" alt="" class="speakers__member">
              <doctor-info doctorName="Dorcas Adaramola" doctorSpec="Clinical Psychiatrist"></doctor-info>
            </div>
            <div class="speakers__doctor">
              <img src="../assets/imgs/user4.jpg" alt="" class="speakers__member">
              <doctor-info doctorName="Samantha Agar" doctorSpec="Oncologist"></doctor-info>
            </div>
            <div class="speakers__doctor">
              <img src="../assets/imgs/user5.jpg" alt="" class="speakers__member">
              <doctor-info doctorName="Richard Austin" doctorSpec="Plastic Surgeon"></doctor-info>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    order tables-->

    <div class="mainContainer__orderTable orderTable">
      <div class="orderTable__tableSection">
        <main-title main="Table of" important="orders"></main-title>
        <table class="orderTable__table">
          <thead class="orderTable__thead">
          <tr>
            <th>Doctor</th>
            <th>date</th>
            <th>Service</th>
            <th>price</th>
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

    <!--    become a speaker-->

    <div class="mainContainer__becomeSpeaker" id="register">
      <div class="becomeSpeaker">
        <div class="becomeSpeaker__info">
          <main-title main="Make your order" important="now" :isWhite="true"></main-title>
          <p class="becomeSpeaker__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut dolore</p>
        </div>
        <div class="becomeSpeaker__btnBlock">
          <router-link to="/register" class="becomeSpeaker__link">Register today</router-link>
        </div>
      </div>
    </div>

    <!--    tickets block-->

    <div class="mainContainer__tickets" id="tickets">
      <main-title main="Get Your" important=" Tickets" centered></main-title>
      <div class="mainContainer__ticketsWrapper">
        <MainTicket/>
        <MainTicket/>
        <MainTicket/>
      </div>
    </div>

    <!--    contact us-->
    <div class="mainContainer__contactUs" id="contactUs">
      <div class="mainContainer__contactUsWrapper">
        <main-title main="Contact" important="Us"></main-title>
        <div class="mainContainer__contactContent">
          <div class="mainContainer__mapBlock">
            <iframe class="mainContainer__map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.091461689997!2d-73.9866630916883!3d40.758001294831736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855a96da09d%3A0x860bf5a5e1a00a68!2sTimes%20Square%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2ssg!4v1643035529098!5m2!1sen!2ssg"
                    width="100%" height="371.59" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <MainTicket/>
        </div>


      </div>
    </div>

    <!--    users messages-->

    <div class="mainContainer__usersMessages" id="opinion">
      <div class="mainContainer__usersMessagesContent usersMessages">
        <div class="usersMessages__block">
          <div class="usersMessages__header">
            <h4 class="usersMessages__name">Please Say Hi</h4>
          </div>
          <div class="usersMessages__main">
            <form class="usersMessages__form">
              <div class="usersMessages__inputs">
                <input type="text" class="usersMessages__input" placeholder="Name">
                <input type="email" class="usersMessages__input" placeholder="Email">
                <input type="text" class="usersMessages__input" placeholder="Subjecty">
              </div>
              <div class="usersMessages__opinion">
                <textarea name="" placeholder="Message" id="" cols="30" rows="10"
                          class="usersMessages__message"></textarea>
              </div>
              <button type="submit" class="usersMessages__sendBtn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheHeader from "@/layout/TheHeader";
import OurStory from "@/components/OurStory";
import MainTicket from "@/components/MainTicket";
import DoctorInfo from "@/components/DoctorInfo";
import ImageCarousel from "@/components/ImageCarousel.vue";

import {ref} from 'vue';
import { defineComponent } from 'vue'
import { Pagination, Navigation, Keyboard } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
defineComponent({
  name: 'swiper-example-keyboard-control',
  title: 'Keyboard control',
  url: import.meta.url,
  setup() {
    const pageNum = ref(1)
    const onSlideChange = () => {
      if(pageNum.value === 1) {
        pageNum.value++
      }
      else if(pageNum.value === 2) {
        pageNum.value--
      }
      console.dir(Pagination);
    };
    return {
      modules: [Pagination, Navigation, Keyboard],
      onSlideChange,
      pageNum
    }
  }
})
// Add the event listener with passive: true
let user = JSON.parse(localStorage.getItem('data'));
</script>

<style lang="scss">

* {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  //background-color: #273053;
  font-family: sans-serif;
}

.mainContainer {

  &__nav {
    background-color: #273053;
    position: fixed;
    width: 100%;
    z-index: 2;
  }

  &__ticketsWrapper {
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
    padding: 55px 20px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }

  &__contactUs {
    padding: 55px 0;
    background-color: #f0f8ff;
  }

  &__contactUsWrapper {
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  &__contactContent {
    display: flex;
    justify-content: space-between;
  }

  &__mapBlock {
    width: 100%;
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
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 55px 20px;
    box-sizing: border-box;
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
  }
}

.speakers {
  &__wrapper {
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  &__descSection {
    width: 50%;
    position: relative;

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
  }

  &__header {
    display: flex;
    justify-content: space-between;
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
  }

  &__doctor {
    width: 24.5%;
    box-sizing: border-box;
    position: relative;
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
  padding: 100px 0;

  &__tableSection {
    max-width: 1320px;
    padding: 0 20px;
    box-sizing: border-box;
    margin: 0 auto;
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
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 960px) {
    flex-direction: column;
    align-items: unset;
  }

  &__info {
    width: 80%;
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
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

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
    }
  }

  &__inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
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

.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 0 !important;
}

.swiper-pagination-bullet-active {
  background: #000 !important;
}

.swiper-horizontal {
  width: 400px
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
</style>