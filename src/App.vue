<template>
  <div class="mainContainer">
    <div class="mainContainer__nav">
      <TheNav/>
    </div>
    <div class="mainContainer__header">
      <video class="mainContainer__headerVideo" autoplay loop muted>
        <source src="./assets/medvideo.mp4" type="video/mp4">
      </video>
      <TheHeader />
      <div class="mainContainer__highlightsContent">
        <div class="mainContainer__highlightsBlock">
          <div class="mainContainer__highlight">
            <img src="./assets/icons/hightlight1.jpg" alt="" class="mainContainer__highlightImg">
            <div class="mainContainer__highlightContent">
              <h3 class="mainContainer__highlightTitle">2019 Highlights</h3>
            </div>
          </div>
          <div class="mainContainer__highlight">
            <img src="./assets/icons/hightlight1.jpg" alt="" class="mainContainer__highlightImg">
            <div class="mainContainer__highlightContent">
              <h3 class="mainContainer__highlightTitle">2019 Highlights</h3>
            </div>
          </div>
          <div class="mainContainer__highlight">
            <img src="./assets/icons/hightlight1.jpg" alt="" class="mainContainer__highlightImg">
            <div class="mainContainer__highlightContent">
              <h3 class="mainContainer__highlightTitle">2019 Highlights</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
    <router-view>
    </router-view>
  </div>
</template>

<script setup>
import TheNav from "@/layout/TheNav";
import TheHeader  from "@/layout/TheHeader"
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  //background-color: #273053;
}

.mainContainer {
  &__nav {
    background-color: #273053;
  }

  &__header {
    width: 100%;
    position: relative;
  }

  &__headerVideo {
    width: 100%;
    height: 385px;
    object-fit: cover;

    &:after {
      content: '';
      background: rgba(0, 0, 0, 0) linear-gradient(rgba(39, 48, 83, 0.1) 0%, rgb(39, 48, 83) 100%) repeat scroll 0% 0%;
      position: absolute;
      top: 50%;
    }
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
    flex-wrap: wrap;
    padding: 55px 0;
  }

  &__highlight {
    max-width: 425px;
    width: 100%;
  }

  &__highlightImg {
    width: 100%;
  }

  &__highlight {
    position: relative;
  }

  &__highlightContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

  }

  &__highlightTitle {
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-family: sans-serif;
    font-size: 36px;
  }
}
</style>
