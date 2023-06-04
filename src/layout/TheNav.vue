<template>
  <nav class="nav">
    <div class="nav__logoBlock">
      <img src="../assets/icons/pageLogo.svg" alt="pageLogo" class="nav__logo">
      <span class="nav__pageTopic"><router-link class="nav__logoLink" to="/">Family Healthcare</router-link></span>
    </div>
    <ul class="nav__linksContent">
      <li class="nav__item"><router-link to="/" class="nav__link">Home</router-link></li>
      <li class="nav__item"><a href="#tickets"  class="nav__link">PRIMARY CARE</a></li>
      <li class="nav__item"><a href="#ourDoctors"  class="nav__link">Our Doctors</a></li>
      <li class="nav__item"><a href="#register"  class="nav__link">Register now</a></li>
      <li class="nav__item"><a href="#opinion"  class="nav__link">your opinion</a></li>
      <li class="nav__item"><a href="#contactUs"  class="nav__link">CONTACT</a></li>
      <li class="nav__item"><a href="#aboutUs" class="nav__link">About us</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNav"
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
}
</style>