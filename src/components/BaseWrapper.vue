<template>
  <div class="baseWrapper">
    <slot></slot>
  </div>

</template>

<script setup>
</script>

<style scoped lang="scss">
.baseWrapper {
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
}
</style>