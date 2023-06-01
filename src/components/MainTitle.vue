<template>
  <h1 class="title">{{ props.main }} <span class="title__important">{{ props.important }}</span></h1>
</template>

<script setup >
import defineProps from 'vue';

const props = defineProps({
  main: String,
  important: String
})
</script>

<style scoped lang="scss">
.title {
    font-size: 48px;
    color: #000;
    font-family: sans-serif;
    text-transform: capitalize;
    font-weight: 700;

  &__important {
    text-decoration: underline;
    color: #0dcaf0;
  }
}
</style>