<template>
  <div class="story">
    <main-title
        main="Our"
        important="Story"
    ></main-title>
    <div class="story__wrapper">
      <div class="story__block">
        <h3 class="story__subTitle">The importance of Leadership Conference in 2022</h3>
        <p class="story__desc">Leadership Event is one-page Bootstrap v5.1.3 CSS layout for your website. Thank you for
          choosing TemplateMo website where you can instantly download free CSS templates at no cost.</p>
        <main-btn
            btnContent="Meat speakers"
        ></main-btn>
        <main-btn
            btnContent="Check out Schedule"
            :withBg="true"
        ></main-btn>
      </div>
      <div class="story__block">
        <h3 class="story__subTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut dolore</h3>
        <div class="story__users">
          <img src="../assets/imgs/user1.jpg" alt="" class="story__userImg">
          <img src="../assets/imgs/user2.jpg" alt="" class="story__userImg">
          <img src="../assets/imgs/user3.jpg" alt="" class="story__userImg">
          <img src="../assets/imgs/user4.jpg" alt="" class="story__userImg">
          <img src="../assets/imgs/user5.jpg" alt="" class="story__userImg">
          <p class="story__usersCount">120+ People are attending with us</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.story {
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 55px 20px;
  box-sizing: border-box;

  &__wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__block {
    width: 49%;
  }

  &__subTitle {
    font-size: 36px;
    font-weight: 700;
    color: #000;
    font-family: sans-serif;
    margin-top: 0;
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
  }
}
</style>