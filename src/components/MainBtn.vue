<template>
  <button class="btn" :class="{'btn__withBg': props.withBg}">{{ props.btnContent }}</button>
</template>

<script setup>
import defineProps from 'vue';

const props = defineProps({
  btnContent: String,
  withBg: Boolean
})
</script>

<style scoped lang="scss">
.btn {
  border: 2px solid #0dcaf0;
  color: #0dcaf0;
  padding: 10px 20px;
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
  text-align: center;
  background: none;
  border-radius: 25px;

  &:hover {
    background: #0dcaf0;
    color: #fff;
    border: 2px solid #0dcaf0;
  }

  &__withBg {
    background: #273053;
    border: 2px solid #273053;
    color: #fff;
    outline: none;
  }
}
</style>