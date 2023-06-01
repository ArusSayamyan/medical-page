<template>
  <div class="mainContainer">
    <div class="mainContainer__nav">
      <TheNav/>
    </div>
    <div class="mainContainer__header">
      <div class="mainContainer__videoWrapper">
        <video class="mainContainer__headerVideo" autoplay loop muted>
          <source src="./assets/medvideo.mp4" type="video/mp4">
        </video>
      </div>
      <TheHeader/>
    </div>

    <!--      hightlught block-->
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

    <!--      our story-->
    <div class="mainContainer__story">
      <OurStory></OurStory>
    </div>

<!--    speakers-->
    <div class="mainContainer__speakers speakers">
      <div class="speakers__wrapper">
        <div class="speakers__header">
          <div class="speakers__descSection">
            <main-title main="Our" important="speakers"></main-title>
            <p class="speakers__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut dolore</p>
          </div>
          <div class="speakers__descSection">
            <img src="./assets/imgs/user1.jpg" alt="" class="speakers__lead">
            <span class="speakers__featured">Featured</span>
          </div>
        </div>
        <div class="speakers__main">
          <div class="speakers__members">
            <img src="./assets/imgs/user2.jpg" alt="" class="speakers__member">
            <img src="./assets/imgs/user3.jpg" alt="" class="speakers__member">
            <img src="./assets/imgs/user4.jpg" alt="" class="speakers__member">
            <img src="./assets/imgs/user5.jpg" alt="" class="speakers__member">
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
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
            <td>Sweden</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheNav from "@/layout/TheNav";
import TheHeader from "@/layout/TheHeader";
import OurStory from "@/components/OurStory"
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  //background-color: #273053;
  font-family: sans-serif;
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
    height: 600px;
    object-fit: cover;
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
    padding: 55px 20px;
    box-sizing: border-box;
  }

  &__highlightImg {
    width: 100%;

    &:hover {
      transform: scale(1.2);
      transition: transform 2s;
    }
  }

  &__highlight {
    max-width: 400px;
    width: 100%;
    position: relative;
    overflow: hidden;

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
      top: 0;
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
    }
  }

  &__lead {
    width: 100%;
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

  &__member {
    width: 24.5%;
    box-sizing: border-box;
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

    & tr:nth-child(even){background-color: #f2f2f2;}

    & tr:hover {background-color: #ddd;}

    & th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #273053;
      color: white;
    }
  }
}
</style>
