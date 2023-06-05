<template>
  <h1 class="title" :class="{'title__isWhite':props.isWhite , 'title__isCentered':props.centered}">{{ props.main }} <span class="title__important">{{ props.important }}</span></h1>
</template>

<script setup >
import defineProps from 'vue';

const props = defineProps({
  main: String,
  important: String,
  isWhite: Boolean,
  centered: Boolean
})
</script>

<style scoped lang="scss">
.title {
    font-size: 48px;
    color: #000;
    font-family: sans-serif;
    text-transform: capitalize;
    font-weight: 700;

  @media(max-width: 500px) {
    font-size: 30px;
  }

  &__important {
    text-decoration: underline;
    color: #0dcaf0;
  }

  &__isWhite {
    color: #fff;
  }

  &__isCentered {
    text-align: center;
  }
}
</style>