<template>
<div class="aboutDoctor">
  <div class="aboutDoctors__wrapper" v-for="doc in doctors" :key="doc.name.trim()">
    <div class="aboutDoctor__mainInfo" v-if="key === doc.name.trim()">
      <div class="aboutDoctor__info">
        <p class="aboutDoctor__docName">{{ doc.name }}</p>
        <p class="aboutDoctor__docDesc">
          <img :src="doc.imgSrc" alt="" class="aboutDoctor__docImg">
           {{ doc.info }}</p>
      </div>
    </div>
  </div>

</div>
</template>

<script setup>
import {useStore} from 'vuex';
import doctor1 from '../assets/imgs/user1.jpg'
import doctor2 from '../assets/imgs/user2.jpg'
import doctor3 from '../assets/imgs/user3.jpg'
import doctor4 from '../assets/imgs/user4.jpg'
import doctor5 from '../assets/imgs/user5.jpg'
import doctor6 from '../assets/imgs/user6.jpg'
import doctor7 from '../assets/imgs/user7.jpg'
import doctor8 from '../assets/imgs/user8.jpg'

const store = useStore();
const key = store.getters.getKey

let doctors = [
  {
    name: 'Franklin Alier',
    info: 'Franklin Alier practiced as a registered nurse both in labor and delivery and the neonatal intensive care unit at a hospital in Mississauga, Ontario after earning her Bachelor' +
        ' of Science in Nursing. As an undergraduate student at McMaster University School of Nursing, she was a standout student and received an award for Outstanding Academic Achievement.\n' +
        '\n' +
        'Going to medical school was never far from her mind though. “I worked with a resident at my hospital' +
        ' who had told me about how she attended medical school in the Caribbean. I didn’t really know much about Caribbean medical schools. She had gone to MUA and highly recommended it.” Samantha applied and was accepted into the Gateway Program at MUA. “It was an awesome program and a good way to review everything that I had learned a while back. The program really helps prepare you for the first semester of medical school.”\n' +
        '\n' +
        'Embracing both fellow students and those living on the island, Samantha became actively involved in the ' +
        'school, and in the community on Nevis. “There were students from all around the world and the diversity was great and so positive. “ In addition to forging bonds with her fellow students, she was awarded the prestigious "Premier of Nevis" award on the island for her exceptional volunteer work and involvement with the local community. “I got to know a woman who was a breast cancer survivor there, and she had started the “Pink Lilly Program” to help educate others about the topic of breast cancer, screening and provide resources to those in need . I worked with her throughout my time on the island to help promote her vision, it was inspiring.”',    imgSrc: doctor1
  },
  {
    name: 'Emily Ackerman',
    info: 'Emily Ackerman practiced as a registered nurse both in labor and delivery and the neonatal intensive care unit at a hospital in Mississauga, Ontario after earning her Bachelor' +
        ' of Science in Nursing. As an undergraduate student at McMaster University School of Nursing, she was a standout student and received an award for Outstanding Academic Achievement.\n' +
        '\n' +
        'Going to medical school was never far from her mind though. “I worked with a resident at my hospital' +
        ' who had told me about how she attended medical school in the Caribbean. I didn’t really know much about Caribbean medical schools. She had gone to MUA and highly recommended it.” Samantha applied and was accepted into the Gateway Program at MUA. “It was an awesome program and a good way to review everything that I had learned a while back. The program really helps prepare you for the first semester of medical school.”\n' +
        '\n' +
        'Embracing both fellow students and those living on the island, Samantha became actively involved in the ' +
        'school, and in the community on Nevis. “There were students from all around the world and the diversity was great and so positive. “ In addition to forging bonds with her fellow students, she was awarded the prestigious "Premier of Nevis" award on the island for her exceptional volunteer work and involvement with the local community. “I got to know a woman who was a breast cancer survivor there, and she had started the “Pink Lilly Program” to help educate others about the topic of breast cancer, screening and provide resources to those in need . I worked with her throughout my time on the island to help promote her vision, it was inspiring.”',    imgSrc: doctor2
  },
  {
    name: 'Dorcas Adaramola',
    info: 'Dorcas Adaramola practiced as a registered nurse both in labor and delivery and the neonatal intensive care unit at a hospital in Mississauga, Ontario after earning her Bachelor' +
        ' of Science in Nursing. As an undergraduate student at McMaster University School of Nursing, she was a standout student and received an award for Outstanding Academic Achievement.\n' +
        '\n' +
        'Going to medical school was never far from her mind though. “I worked with a resident at my hospital' +
        ' who had told me about how she attended medical school in the Caribbean. I didn’t really know much about Caribbean medical schools. She had gone to MUA and highly recommended it.” Samantha applied and was accepted into the Gateway Program at MUA. “It was an awesome program and a good way to review everything that I had learned a while back. The program really helps prepare you for the first semester of medical school.”\n' +
        '\n' +
        'Embracing both fellow students and those living on the island, Samantha became actively involved in the ' +
        'school, and in the community on Nevis. “There were students from all around the world and the diversity was great and so positive. “ In addition to forging bonds with her fellow students, she was awarded the prestigious "Premier of Nevis" award on the island for her exceptional volunteer work and involvement with the local community. “I got to know a woman who was a breast cancer survivor there, and she had started the “Pink Lilly Program” to help educate others about the topic of breast cancer, screening and provide resources to those in need . I worked with her throughout my time on the island to help promote her vision, it was inspiring.”',    imgSrc: doctor3
  },
  {
    name: 'Samantha Agar',
    info: 'Samantha Agar practiced as a registered nurse both in labor and delivery and the neonatal intensive care unit at a hospital in Mississauga, Ontario after earning her Bachelor' +
        ' of Science in Nursing. As an undergraduate student at McMaster University School of Nursing, she was a standout student and received an award for Outstanding Academic Achievement.\n' +
        '\n' +
        'Going to medical school was never far from her mind though. “I worked with a resident at my hospital' +
        ' who had told me about how she attended medical school in the Caribbean. I didn’t really know much about Caribbean medical schools. She had gone to MUA and highly recommended it.” Samantha applied and was accepted into the Gateway Program at MUA. “It was an awesome program and a good way to review everything that I had learned a while back. The program really helps prepare you for the first semester of medical school.”\n' +
        '\n' +
        'Embracing both fellow students and those living on the island, Samantha became actively involved in the ' +
        'school, and in the community on Nevis. “There were students from all around the world and the diversity was great and so positive. “ In addition to forging bonds with her fellow students, she was awarded the prestigious "Premier of Nevis" award on the island for her exceptional volunteer work and involvement with the local community. “I got to know a woman who was a breast cancer survivor there, and she had started the “Pink Lilly Program” to help educate others about the topic of breast cancer, screening and provide resources to those in need . I worked with her throughout my time on the island to help promote her vision, it was inspiring.”',
    imgSrc: doctor4
  },
  {
    name: 'Richard Austin',
    info: 'Richard Austin practiced as a registered nurse both in labor and delivery and the neonatal intensive care unit at a hospital in Mississauga, Ontario after earning her Bachelor' +
        ' of Science in Nursing. As an undergraduate student at McMaster University School of Nursing, she was a standout student and received an award for Outstanding Academic Achievement.\n' +
        '\n' +
        'Going to medical school was never far from her mind though. “I worked with a resident at my hospital' +
        ' who had told me about how she attended medical school in the Caribbean. I didn’t really know much about Caribbean medical schools. She had gone to MUA and highly recommended it.” Samantha applied and was accepted into the Gateway Program at MUA. “It was an awesome program and a good way to review everything that I had learned a while back. The program really helps prepare you for the first semester of medical school.”\n' +
        '\n' +
        'Embracing both fellow students and those living on the island, Samantha became actively involved in the ' +
        'school, and in the community on Nevis. “There were students from all around the world and the diversity was great and so positive. “ In addition to forging bonds with her fellow students, she was awarded the prestigious "Premier of Nevis" award on the island for her exceptional volunteer work and involvement with the local community. “I got to know a woman who was a breast cancer survivor there, and she had started the “Pink Lilly Program” to help educate others about the topic of breast cancer, screening and provide resources to those in need . I worked with her throughout my time on the island to help promote her vision, it was inspiring.”',    imgSrc: doctor5
  },
  {
    name: 'Robert Anderson',
    info: 'Robert Anderson practiced as a registered nurse both in labor and delivery and the neonatal intensive care unit at a hospital in Mississauga, Ontario after earning her Bachelor' +
        ' of Science in Nursing. As an undergraduate student at McMaster University School of Nursing, she was a standout student and received an award for Outstanding Academic Achievement.\n' +
        '\n' +
        'Going to medical school was never far from her mind though. “I worked with a resident at my hospital' +
        ' who had told me about how she attended medical school in the Caribbean. I didn’t really know much about Caribbean medical schools. She had gone to MUA and highly recommended it.” Samantha applied and was accepted into the Gateway Program at MUA. “It was an awesome program and a good way to review everything that I had learned a while back. The program really helps prepare you for the first semester of medical school.”\n' +
        '\n' +
        'Embracing both fellow students and those living on the island, Samantha became actively involved in the ' +
        'school, and in the community on Nevis. “There were students from all around the world and the diversity was great and so positive. “ In addition to forging bonds with her fellow students, she was awarded the prestigious "Premier of Nevis" award on the island for her exceptional volunteer work and involvement with the local community. “I got to know a woman who was a breast cancer survivor there, and she had started the “Pink Lilly Program” to help educate others about the topic of breast cancer, screening and provide resources to those in need . I worked with her throughout my time on the island to help promote her vision, it was inspiring.”',    imgSrc: doctor6
  },
  {
    name: 'Kathryn Barlow',
    info: 'Kathryn Barlow practiced as a registered nurse both in labor and delivery and the neonatal intensive care unit at a hospital in Mississauga, Ontario after earning her Bachelor' +
        ' of Science in Nursing. As an undergraduate student at McMaster University School of Nursing, she was a standout student and received an award for Outstanding Academic Achievement.\n' +
        '\n' +
        'Going to medical school was never far from her mind though. “I worked with a resident at my hospital' +
        ' who had told me about how she attended medical school in the Caribbean. I didn’t really know much about Caribbean medical schools. She had gone to MUA and highly recommended it.” Samantha applied and was accepted into the Gateway Program at MUA. “It was an awesome program and a good way to review everything that I had learned a while back. The program really helps prepare you for the first semester of medical school.”\n' +
        '\n' +
        'Embracing both fellow students and those living on the island, Samantha became actively involved in the ' +
        'school, and in the community on Nevis. “There were students from all around the world and the diversity was great and so positive. “ In addition to forging bonds with her fellow students, she was awarded the prestigious "Premier of Nevis" award on the island for her exceptional volunteer work and involvement with the local community. “I got to know a woman who was a breast cancer survivor there, and she had started the “Pink Lilly Program” to help educate others about the topic of breast cancer, screening and provide resources to those in need . I worked with her throughout my time on the island to help promote her vision, it was inspiring.”',    imgSrc: doctor7
  },
  {
    name: 'Joseph Shaffer',
    info: 'Joseph Shaffer practiced as a registered nurse both in labor and delivery and the neonatal intensive care unit at a hospital in Mississauga, Ontario after earning her Bachelor' +
        ' of Science in Nursing. As an undergraduate student at McMaster University School of Nursing, she was a standout student and received an award for Outstanding Academic Achievement.\n' +
        '\n' +
        'Going to medical school was never far from her mind though. “I worked with a resident at my hospital' +
        ' who had told me about how she attended medical school in the Caribbean. I didn’t really know much about Caribbean medical schools. She had gone to MUA and highly recommended it.” Samantha applied and was accepted into the Gateway Program at MUA. “It was an awesome program and a good way to review everything that I had learned a while back. The program really helps prepare you for the first semester of medical school.”\n' +
        '\n' +
        'Embracing both fellow students and those living on the island, Samantha became actively involved in the ' +
        'school, and in the community on Nevis. “There were students from all around the world and the diversity was great and so positive. “ In addition to forging bonds with her fellow students, she was awarded the prestigious "Premier of Nevis" award on the island for her exceptional volunteer work and involvement with the local community. “I got to know a woman who was a breast cancer survivor there, and she had started the “Pink Lilly Program” to help educate others about the topic of breast cancer, screening and provide resources to those in need . I worked with her throughout my time on the island to help promote her vision, it was inspiring.”',    imgSrc: doctor8
  }
]

window.addEventListener('load', ()=> {
  window.location.replace('/')
})
</script>

<style scoped lang="scss">

.aboutDoctor {
padding: 80px 20px 0;
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;

  @media(max-width: 992px) {
    max-width: 720px;
  }

  @media(max-width: 768px) {
    max-width: 540px;
  }

  &__docName {
    margin-top: 0;
    font-size: 30px;
    font-weight: 700;
    color: #273053;
  }

  &__docImg {
    float: left;
    max-width: 400px;
    width: 100%;
    margin-right: 20px;
  }

  &__docDesc {
    line-height: 24px;
    color: #717275;
  }

}
</style>