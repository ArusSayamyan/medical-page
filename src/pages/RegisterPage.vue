<template>
  <div class="registerPage">
    <h1 class="registerPage__title">Registration</h1>
    <div class="registerPage__formContainer">
      <form class="registerPage__form" @submit.prevent="setData">
        <div class="card flex justify-content-center">
          <MultiSelect v-model="selectedServices" :options="services" optionLabel="name" placeholder="Select Services"
                       :maxSelectedLabels="3" class="w-full md:w-20rem"/>
        </div>
        <div class="card flex justify-content-center">
          <Dropdown v-model="selectedDoctor" :options="doctors" optionLabel="name" placeholder="Select a doctor"
                    class="w-full md:w-14rem"/>
        </div>
        <div class="card flex flex-wrap gap-3 p-fluid">
          <div class="card flex justify-content-center">
        <span class="p-float-label">
            <Calendar id="calendar-24h" v-model="datetime24h" showTime hourFormat="24"/>
            <label for="calendar-24h">Date</label>
        </span>
          </div>
        </div>
        <input type="tel" class="registerPage__formInput" placeholder="Your phone number" required
               v-model="phoneNumber">
        <button class="registerPage__formBtn" type="submit">Save order</button>
      </form>
    </div>

  </div>
</template>

<script setup>
import MultiSelect from 'primevue/multiselect';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import {ref} from "vue";

const selectedServices = ref();
const services = ref([
  {name: 'Dental care', id: 'Dc', price: 100},
  {name: 'Laboratory and diagnostic care', id: 'Lc',  price: 150},
  {name: 'Preventative care', id: 'Pc',  price: 200},
  {name: 'Physical and occupational therapy', id: 'Pt',  price: 180},
  {name: 'Nutritional support', id: 'Ns',  price: 220},
  {name: 'Pharmaceutical care', id: 'Phc',  price: 110}
]);

//dropdown
const selectedDoctor = ref();
const doctors = ref([
  {name: 'William Stewart Agras', code: 'w1'},
  {name: 'Virginia Apgar', code: 'V2'},
  {name: 'Jean Astruc', code: 'J3'},
  {name: 'Gerbrand Bakker ', code: 'G4'},
  {name: 'Norman Bethune', code: 'N5'}
]);

//date
const datetime24h = ref();
const phoneNumber = ref();


function setData() {
  if (selectedServices.value && selectedDoctor.value && datetime24h.value) {
    let info = {
      selectedServices: selectedServices.value,
      selectedDoctor: selectedDoctor.value,
      dateTime: datetime24h.value
    }

    let dataArr = JSON.parse(localStorage.getItem("data")) || [];
    dataArr.push(info);
    localStorage.setItem('data', JSON.stringify(dataArr));
  }
}


</script>

<style scoped lang="scss">
.registerPage {
  padding-top: 100px;
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;

  &__title {
    text-align: center;
  }

  &__formContainer {
    max-width: 400px;
    width: 100%;
    padding: 50px;
    box-sizing: border-box;
    margin: 0 auto;
    background: #273053;
    border-radius: 8px;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__formInput {
    padding: 15px 12px;
    border-radius: 6px;
    font-size: 16px;
  }

  &__formBtn {
    max-width: 150px;
    margin: 20px auto 0;
    width: 100%;
    border: 2px solid #fff;
    padding: 10px;
    background: none;
    color: #fff;
    text-transform: uppercase;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      background: #fff;
      color: #273053;
    }
  }
}

//styles of prime vue

.p-component, .p-component * {
  width: 100%;
  margin-bottom: 15px;
  font-family: sans-serif;
}

.p-dropdown .p-dropdown-label.p-placeholder {
  font-family: sans-serif;
}


</style>