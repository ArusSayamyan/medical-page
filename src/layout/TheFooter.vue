<template>
  <base-wrapper>
    <div class="footer">
      <div class="footer__block">
        <div class="footer__logoBlock">
          <img src="../assets/icons/pageLogo.svg" alt="pageLogo" class="footer__logo">
          <span class="footer__pageTopic"><router-link class="footer__logoLink"
                                                       to="/">Family Healthcare</router-link></span>
        </div>
        <div class="footer__socialLinks">
          <div class="footer__socialLink">
            <a href="#" class="footerLink">
              <img src="../assets/icons/facebook.svg" alt="" class="footer__socialIcon">
            </a>
          </div>
          <div class="footer__socialLink">
            <a href="#" class="footerLink">
              <img src="../assets/icons/instagram.svg" alt="" class="footer__socialIcon">
            </a>
          </div>
          <div class="footer__socialLink">
            <a href="#" class="footerLink">
              <img src="../assets/icons/whatsapp.svg" alt="" class="footer__socialIcon">
            </a>
          </div>
          <div class="footer__socialLink">
            <a href="#" class="footerLink">
              <img src="../assets/icons/youtube.svg" alt="" class="footer__socialIcon">
            </a>
          </div>
        </div>
      </div>
      <div class="footer__links">
        <ul class="footer__linksList">
          <li class="footer__linkItem"><a href="" class="footer__link"></a></li>
          <li class="footer__linkItem"><a href="#home" class="footer__link">
            {{ $t('nav')['home'] }}
          </a></li>
          <li class="footer__linkItem"><a href="#aboutUs" class="footer__link">
            {{ $t('nav')['aboutUs'] }}
          </a></li>
          <li class="footer__linkItem"><a href="#contactUs" class="footer__link">
            {{ $t('nav')['contact'] }}</a></li>
        </ul>
        <div class="footer__copyright">
          <p class="footer__copyrightText">Copyright © 2022 Leadership Event Co., Ltd.<br>
            All Rights Reserved.<br><br>
         Design: TemplateMo</p>
          <a href="#" class="footer__scrollLink" v-if="showArrow">
            <img src="../assets/icons/arrow-up.svg" alt="arrow" class="header__arrowDown">
          </a>
        </div>
      </div>
    </div>
  </base-wrapper>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useStore} from "vuex";
const showArrow = ref(false)
const store = useStore()

// change Language
const $t = computed(() => {
  return store.getters.getLanguage

})

window.addEventListener('scroll', () => {
  if(document.documentElement.scrollTop > 100) {
    showArrow.value = true
  }else {
    showArrow.value = false
  }
});
</script>

<style scoped lang="scss">
.footer {

  &__logoBlock {
    display: flex;
    align-items: center;
  }

  &__pageTopic {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: sans-serif;
    margin-left: 5px;
    color: #0dcaf0;
    text-decoration: none;
  }

  &__logoLink {
    text-decoration: none;
    color: #0dcaf0;
  }

  &__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 48px;
    margin-bottom: 40px;
  }

  &__socialLinks {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 500px) {
      flex-wrap: wrap;
    }
  }

  &__socialLink {
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background: #0dcaf0;
      transition: ease 0.2s;
    }

  }

  &__socialIcon {
    width: 20px;
  }

  &__links {
    display: flex;
    justify-content: space-between;

    @media(max-width: 992px) {
      flex-direction: column;
    }

  }

  &__linksList {
    padding: 0;
    list-style: none;
    display: flex;

    @media(max-width: 992px) {
      margin: 0;
    }

    @media(max-width: 500px) {
      flex-wrap: wrap;
    }

  }

  &__linkItem {
    margin-right: 20px;
    color: #717275;
  }

  &__link {
    text-decoration: none;
    color: #717275;

    &:hover {
      color: #0dcaf0;
    }
  }

  &__copyrightText {
    line-height: 24px;
    color: #717275;
  }

  &__scrollLink {
    background: #d0dae2;
    border-radius: 100px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: inline-block;
    margin: auto;
    position: fixed;
    bottom: 70px;
    right: 70px;
    z-index: 1;

    &:hover {
      background: #0dcaf0;
      transition: ease 0.2s;
    }
  }

  &__copyright {
    display: flex;
  }
}
</style>