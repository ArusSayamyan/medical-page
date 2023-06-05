<template>
  <nav class="nav">
    <div class="nav__logoBlock">
      <img src="../assets/icons/pageLogo.svg" alt="pageLogo" class="nav__logo">
      <span class="nav__pageTopic"><router-link class="nav__logoLink" to="/">Family Healthcare</router-link></span>
    </div>
    <ul class="nav__linksContent">
      <li class="nav__item">
        <router-link to="/" class="nav__link">Home</router-link>
      </li>
      <li class="nav__item"><a href="#tickets" class="nav__link">PRIMARY CARE</a></li>
      <li class="nav__item"><a href="#ourDoctors" class="nav__link">Our Doctors</a></li>
      <li class="nav__item"><a href="#register" class="nav__link">Register now</a></li>
      <li class="nav__item"><a href="#opinion" class="nav__link">your opinion</a></li>
      <li class="nav__item"><a href="#contactUs" class="nav__link">CONTACT</a></li>
      <li class="nav__item"><a href="#aboutUs" class="nav__link">About us</a></li>
    </ul>
    <div class="nav__languages">
      <ul class="nav__langList">
        <li class="nav__translate">
          <img src="../assets/icons/globe.svg" alt="" class="nav__langFlag">
          <div class="nav__languagesWrapper">
            <span class="nav__language"  @click="setLanguage('en')">EN</span>
            <span class="nav__language"  @click="setLanguage('ru')">RU</span>
            <span class="nav__language"  @click="setLanguage('arm')">ARM</span>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import {useStore} from "vuex";

const store = useStore();
function setLanguage(language) {
  store.commit('changeLanguage', language)
}

</script>

<style scoped lang="scss">
.nav {
  max-width: 1320px;
  width: 100%;
  background-color: #273053;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 20px;

  @media(max-width: 992px) {
    max-width: 720px;
  }

  @media(max-width: 768px) {
    max-width: 540px;
  }

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

  &__linksContent {
    display: flex;
    justify-content: space-between;

    @media(max-width: 890px) {
      flex-wrap: wrap;
      justify-content: start;
    }
  }

  &__link {
    font-size: 12px;
    font-weight: 700;
    font-family: sans-serif;
    color: #fff;

    &:hover {
      color: #0dcaf0;
    }
  }

  &__linksContent {
    list-style: none;
    padding: 0;
  }

  &__link {
    text-transform: uppercase;
    text-decoration: none;
    padding: 8px;
  }

  &__logoLink {
    text-decoration: none;
    color: #0dcaf0;
  }

  &__langFlag {
    width: 25px;
    height: 20px;
    cursor: pointer;

    &:nth-child(2) {
      margin: 0 10px;
    }

  }

  &__langList {
    padding: 0;
    list-style: none;
    position: relative;
  }

  &__languagesWrapper {
    flex-direction: column;
    position: absolute;
    background: #fff;
    left: -8px;
    display: none;
  }

  &__language {
    padding: 5px;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }

  &__translate {
    &:hover {
      & .nav__languagesWrapper {
        display: flex;
      }

    }
  }
}
</style>