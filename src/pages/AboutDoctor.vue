<template>
  <base-wrapper>
    <div class="aboutDoctor">
      <div class="aboutDoctors__wrapper" v-for="doc in doctors" :key="doc.name.trim()">
        <div class="aboutDoctor__mainInfo" v-if="key === doc.name.trim()">
          <div class="aboutDoctor__info">
            <p class="aboutDoctor__docName">{{ doc.name }}</p>
            <p class="aboutDoctor__docDesc">
              <img :src="doc.imgSrc" alt="" class="aboutDoctor__docImg">
              {{ doc.name }} {{ $t('aboutDoctor')[doc.info] }}</p>
          </div>
        </div>
      </div>
    </div>
  </base-wrapper>
</template>

<script setup>
import {useStore} from 'vuex';
import doctor1 from '../assets/imgs/user1.jpg'
import doctor2 from '../assets/imgs/user2.jpg'
import doctor3 from '../assets/imgs/user3.jpg'
import doctor4 from '../assets/imgs/user4.jpg'
import doctor5 from '../assets/imgs/user5.jpg'
import doctor6 from '../assets/imgs/user6.jpg'
import doctor7 from '../assets/imgs/user7.jpg'
import doctor8 from '../assets/imgs/user8.jpg'
import BaseWrapper from "@/components/BaseWrapper.vue";
import {computed} from "vue";
const store = useStore()

// change Language
const $t = computed(() => {
  return store.getters.getLanguage

})
const key = store.getters.getKey

let doctors = [
  {
    name: 'Franklin Alier',
    info: 'text',
    imgSrc: doctor1
  },
  {
    name: 'Emily Ackerman',
    info: 'text',
    imgSrc: doctor2
  },
  {
    name: 'Dorcas Adaramola',
    info: 'text',
    imgSrc: doctor3
  },
  {
    name: 'Samantha Agar',
    info: 'text',
    imgSrc: doctor4
  },
  {
    name: 'Richard Austin',
    info: 'text',
    imgSrc: doctor5
  },
  {
    name: 'Robert Anderson',
    info: 'text',
    imgSrc: doctor6
  },
  {
    name: 'Kathryn Barlow',
    info: 'text',
    imgSrc: doctor7
  },
  {
    name: 'Joseph Shaffer',
    info: 'text',
    imgSrc: doctor8
  }
]

window.addEventListener('load', () => {
  window.location.replace('/')
})
</script>

<style scoped lang="scss">

.aboutDoctor {

  &__docName {
    margin-top: 0;
    font-size: 30px;
    font-weight: 700;
    color: #273053;
  }

  &__docImg {
    float: left;
    max-width: 400px;
    width: 100%;
    margin-right: 20px;
  }

  &__docDesc {
    line-height: 24px;
    color: #717275;
  }

}
</style>