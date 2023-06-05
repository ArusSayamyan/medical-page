<template>
  <div class="footer">
    <div class="footer__wrapper">
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
          <li class="footer__linkItem"><a href="" class="footer__link">Our Story</a></li>
          <li class="footer__linkItem"><a href="" class="footer__link">
            Code of Conduct
          </a></li>
          <li class="footer__linkItem"><a href="" class="footer__link">
            Privacy and Terms
          </a></li>
          <li class="footer__linkItem"><a href="" class="footer__link">
            Contact</a></li>
        </ul>
        <div class="footer__copyright">
          <p class="footer__copyrightText">Copyright © 2022 Leadership Event Co., Ltd.<br>
            All Rights Reserved.<br><br>
         Design: TemplateMo</p>
          <a href="#" class="footer__scrollLink">
            <img src="../assets/icons/arrow-up.svg" alt="arrow" class="header__arrowDown">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.footer {
  padding: 50px 0;

  &__wrapper {
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;

    @media(max-width: 992px) {
      max-width: 720px;
    }

    @media(max-width: 768px) {
      max-width: 540px;
    }
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
    background: #f0f8ff;
    border-radius: 100px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: inline-block;
    margin: auto;

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