<template>
  <div class="mainContainer">
    <div class="mainContainer__nav">
      <TheNav/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import TheNav from "@/layout/TheNav";

</script>

<style lang="scss">
* {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  //background-color: #273053;
  font-family: sans-serif;
}

.mainContainer {

  &__nav {
    background-color: #273053;
    position: fixed;
    width: 100%;
    z-index: 2;
  }

}
</style>
