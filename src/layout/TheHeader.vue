<template>
<header class="header">
  <div class="header__medInfo">
    <h1 class="header__mainTitle"><span class="header__important"> Family</span> Medicine and Internal Medicine</h1>
    <div class="header__dateBlock">
      <span class="header__date">July 12 to 18, 2022</span>
      <span class="header__date">July 12 to 18, 2022</span>
    </div>
    <div class="header__scrollDown">
      <a href="#ourStory" class="header__scrollLink">
        <img src="../assets/icons/arrowDown.svg" alt="arrow" class="header__arrowDown">
      </a>
    </div>
  </div>
</header>
</template>

<script setup>

</script>

<style scoped lang="scss">
.header {
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &__medInfo {
    display: flex;
    flex-direction: column;
    max-width: 460px;
    width: 100%;
    margin: 0 auto;
  }

  &__mainTitle {
    font-size: 48px;
    color: #fff;
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
  }

  &__important {
    text-decoration: underline;
    color: #0dcaf0;
  }

  &__dateBlock {
    max-width: 460px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }

  &__date {
    padding: 10px 20px;
    color: #fff;
    text-align: center;
    border: 1px solid #fff;
  }

  &__scrollDown {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35px auto 0;
  }
}
</style>