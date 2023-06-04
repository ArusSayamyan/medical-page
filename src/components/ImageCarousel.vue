<template>
  <div class="sliderBlock">
    <swiper-vue
        class="swiper"
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        :keyboard="{ enabled: true }"
        @slideChange="onSlideChange"
        swiper.animating=true
    >
      <swiper-slide class="slide">
              <div class="sliderBlock__icons">
                <img src="@/assets/imgs/user1.jpg" alt="" class="sliderBlock__downloadIcon">
              </div>
      </swiper-slide>
      <swiper-slide class="slide">
              <div class="sliderBlock__icons">
                <img src="@/assets/imgs/user1.jpg" alt="" class="sliderBlock__downloadIcon">
                <img src="@/assets/imgs/user1.jpg" alt="" class="sliderBlock__viewIcon">
              </div>
      </swiper-slide>
    </swiper-vue>
  </div>
</template>

<script>
import {ref} from 'vue';
import { defineComponent } from 'vue'
import { Pagination, Navigation, Keyboard } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
export default defineComponent({
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
</script>

<style lang="scss" >
.sliderBlock {
  max-width: 450px;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0 3px 26px #00000008;
  background-color: #ffff;
  position: relative;
  padding: 30px;
  margin-right: 30px;

  &__slider {
    border-radius: 30px;
    box-sizing: border-box;
    padding: 30px;
    background-color: #ffff;
    box-shadow: rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px;
    max-width: 960px;
    margin: 45px auto;
  }

  &__selectWrapper {
    display: flex;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
    position: absolute;
    top: 0;
    padding: 15px;
  }

  &__title {
    font-size: 15px;
    color: #A3A6B9;
    text-transform: uppercase;
    margin: 0;
  }

  &__select {
    padding: 0 10px;

    &--withBorder {
      border-right: 1px solid black;
    }
  }

  &__selectName {
    margin-right: 10px;
    font-size: 13px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__icons {
    display: flex;
    column-gap: 10px;
  }

  &__main {
    display: flex;
  }

  &__date {
    color: #43BCCD;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
  }

  &__section {
    color: #05081D;
    font-weight: 600;
    margin: 0;
  }

  &__mainTitle {
    color: #05081D;
    font-size: 26px;
    font-weight: 600;
  }

  &__subTitle {
    color: #43BCCD;
    text-transform: uppercase;
    font-size: 12px;
    margin: 0;
  }

  &__text {
    color: #A3A6B9;
    font-size: 13px;
    line-height: 24px;
    margin-right: 44px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    width: 100%;
  }

  &__filteredItem {
    display: flex;
    align-items: center;
  }

  &__filteredIcon {
    margin-right: 10px;
  }

  &__filteredName {
    color: #05081D;
    font-size: 13px;
    font-weight: 700;
  }

  &__number {
    margin: 0 10px;
  }
}


</style>
