<template>
  <div class="story" id="aboutUs">
    <main-title
        :main="$t('aboutUs')['title']['mainWorld']"
        :important="$t('aboutUs')['title']['mainTitle']"
    ></main-title>
    <div class="story__wrapper">
      <div class="story__block">
        <h3 class="story__subTitle">{{ $t('aboutUs')['subTitle1'] }}</h3>
        <p class="story__desc">{{ $t('aboutUs')['desc'] }}</p>
        <main-btn
            :btnContent="$t('aboutUs')['btnContent1']"
        ></main-btn>
        <main-btn
            :btnContent="$t('aboutUs')['btnContent2']"
            :withBg="true"
        ></main-btn>
      </div>
      <div class="story__block">
        <h3 class="story__subTitle">{{ $t('aboutUs')['subTitle2'] }}</h3>
        <div class="story__users">
          <img src="../assets/imgs/user1.jpg" alt="" class="story__userImg">
          <img src="../assets/imgs/user2.jpg" alt="" class="story__userImg">
          <img src="../assets/imgs/user3.jpg" alt="" class="story__userImg">
          <img src="../assets/imgs/user4.jpg" alt="" class="story__userImg">
          <img src="../assets/imgs/user5.jpg" alt="" class="story__userImg">
          <p class="story__usersCount">120+ {{ $t('aboutUs')['usersCount'] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const $t = computed(()=> {
  return store.getters.getLanguage
})
</script>

<style scoped lang="scss">
.story {
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 55px 20px;
  box-sizing: border-box;

  @media(max-width: 992px) {
    max-width: 720px;
  }

  @media(max-width: 768px) {
    max-width: 540px;
  }

  &__wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 992px) {
      flex-direction: column;
    }

    @media(max-width: 765px) {
      flex-direction: column;
    }

  }

  &__block {
    width: 49%;

    @media(max-width: 992px) {
      width: 100%;
      margin-bottom: 35px;
    }

    @media(max-width: 765px) {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  &__subTitle {
    font-size: 36px;
    font-weight: 700;
    color: #000;
    font-family: sans-serif;
    margin-top: 0;

    @media(max-width: 1024px) {
      font-size: 28px;
    }
  }

  &__desc {
    color: #717275;
    font-size: 18px;
    font-weight: 400;
    font-family: sans-serif;
    line-height: 32px;
  }

  &__users {
    display: flex;
    padding: 45px 0;
    margin-top: 45px;
    border-top: 1px solid #dee2e6;

    @media(max-width: 500px) {
      padding-bottom: 0;
    }
  }

  &__userImg {
    border: 2px solid #fff;
    border-radius: 100px;
    width: 50px;
    height: 50px;
    object-fit: cover;

    &:not(:first-child) {
      margin-left: -10px;
    }
  }

  &__usersCount {
    color: #717275;
    font-size: 18px;
    margin-left: 20px;

    @media(max-width: 500px) {
      font-size: 14px;
    }
  }
}
</style>