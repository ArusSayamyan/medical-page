<template>
  <div class="doctorInfo">
    <div class="doctorInfo__desc">
      <h5 class="doctorInfo__doctorName">{{ props.doctorName }}</h5>
      <p class="doctorInfo__doctorSpecialization">{{ props.doctorSpec }}</p>
    </div>
    <div class="doctorInfo__info">
      <router-link to="/aboutDoctor" class="doctorInfo__link">
        <img src="../assets/icons/info.svg" alt="" class="doctorInfo__icon" :id="props.doctorName.trim()" @click="changeKey">
      </router-link>
    </div>
  </div>
</template>


<script setup>
import {defineProps} from 'vue';
import {useStore} from "vuex";

const props = defineProps({
  doctorName: String,
  doctorSpec: String
})

const store = useStore();

function changeKey(event) {
    store.commit('changeDoctorKey', event.target.id)
}



</script>

<style scoped lang="scss">
.doctorInfo {
  position: absolute;
  background: #fff;
  padding: 10px;
  border-left: 5px solid #0dcaf0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateZ(0);
  transition: color 300ms;

  &__doctorName, &__doctorSpecialization {
    margin: 0;
  }

  &__doctorName {
    font-size: 24px;

    @media(max-width: 500px) {
      font-size: 20px;
    }
  }

  &__doctorSpecialization {
    font-size: 12px;
    text-transform: uppercase;
    margin-top: 5px
  }

  &__info {
    visibility: hidden;
  }

  &__icon {
    width: 20px;
    height: 20px;
  }

  &:hover {
    //background: #0dcaf0;
    color: #fff;

     & .doctorInfo__info {
      visibility: visible;
    }
  }
&:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0dcaf0;
  transform: scaleX(0);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition: 300ms ease-out;
  transition: 300ms ease-out;
}

&:hover:before {
  transform: scaleX(1);
}

}


</style>