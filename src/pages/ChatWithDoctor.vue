<template>
  <div class="chat">
    <h1 class="chat__title">Consultation</h1>
    <div class="chat__container">
      <div class="chat__wrapper">
        <div class="chat__mainChat" ref="myElement">
          <p class="chat__answer">Hi, how can I help you?</p>
          <div class="chat__conversation" v-for="quest in selectedQuest" :key="quest">
            <p class="chat__selectedQuest">{{ quest.mess }}</p>
            <div class="chat__bubble" v-if="quest.animate">
              <div class="chat__typing">
                <div class="chat__dot"></div>
                <div class="chat__dot"></div>
                <div class="chat__dot"></div>
              </div>
            </div>
            <p class="chat__answer" v-else>{{ quest.ans }}</p>
          </div>
        </div>
        <div class="chat__messagesWrapper">
          <p class="chat__message" v-for="message in messages" :key="message.id"
             @click="sendMessage($event, message.message)">{{ message.message }}</p>
        </div>
      </div>
      <form class="card flex justify-content-center chat__colorPicker" @submit.prevent="selectColor">
        <ColorPicker v-model="color" inline />
        <button class="chat__colorSubmit">Select</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import ColorPicker from 'primevue/colorpicker';


const myElement = ref();
const color = ref();
const selectedQuest = ref([])
const messages = ref([
  {
    id: 'message1',
    message: 'What other services are available to you?',
    answer: '1.Dental care, 2.Laboratory and diagnostic care, 3.Preventative care, 4.Physical and occupational therapy, 5.Nutritional support, 6.Pharmaceutical care'
  },
  {
    id: 'message2',
    message: 'How can I register?',
    answer: 'For registration click here'
  },
  {
    id: 'message3',
    message: 'Can I see the price list for the services?',
    answer: '1.Dental care - 100$, ' +
        '2.Laboratory and diagnostic care, ' +
        '3.Preventative care, ' +
        '4.Physical and occupational therapy, ' +
        '5.Nutritional support, ' +
        '6.Pharmaceutical care'
  },
  {
    id: 'message4',
    message: 'can you tell me your address?',
    answer: 'Our address is 102 South. 7th Street, New York, NY 10036, USA'
  },
])


function sendMessage(event, selectedMessage) {
  //add animation
  document.querySelectorAll('.chat__message').forEach(item => {
    item.classList.add('chat__slideRight')
  })
  if (event.target.textContent === selectedMessage) {
    selectedQuest.value.push({
      mess: selectedMessage,
      ans: null,
      animate: false
    })

    //SET VALUE OF TYPING TRUE
      for (let i = 0; i < selectedQuest.value.length; i++) {
        if(selectedQuest.value.length > 0) {
          selectedQuest.value[selectedQuest.value.length-1].animate = true
        }

      }
    }
    setTimeout(() => {
      addAnswer(selectedMessage);

      //SET VALUE OF TYPING FALSE
      for (let i = 0; i < selectedQuest.value.length; i++) {
        if(selectedQuest.value.length > 0) {
          selectedQuest.value[selectedQuest.value.length-1].animate = false
        }
      }

      //Remove animation
      document.querySelectorAll('.chat__message').forEach(item => {
        item.classList.remove('chat__slideRight')
      })
    }, 4000)

    if (myElement.value.clientHeight < myElement.value.scrollHeight) {
      myElement.value.lastElementChild.scrollIntoView({behavior: 'smooth'})
      myElement.value.scrollTop = myElement.value.scrollHeight - myElement.value.clientHeight;
    }

  }


//send answer of question
  function addAnswer(select) {
    for (let text of messages.value) {
      if (select === text.message) {
        let object = [...selectedQuest.value]
        for (let i = 0; i < object.length; i++) {
          object[object.length - 1].ans = text.answer
        }
      }
    }
  }

  //SELECT COLOR FOR CHAT

function selectColor() {
  myElement.value.style.backgroundColor = '#' + color.value

}
</script>

<style scoped lang="scss">
.chat {
  padding: 80px 20px;
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  &__title {
    text-align: center;
    text-transform: uppercase;
  }

  &__mainChat {
    width: 100%;
    height: 300px;
    border-radius: 5px;
    background-color: #eef2ffe3;
    padding: 10px;
    overflow: auto;
  }

  &__wrapper {
    max-width: 500px;
    width: 100%;
    margin-right: 20px;
  }

  &__messagesWrapper {
    margin-top: 25px;
    line-height: 24px;
    display: flex;
    flex-wrap: wrap;
  }

  &__message {
    padding: 8px;
    background: #273053;
    color: #ffff;
    border-radius: 5px;
    margin: 0 5px 5px 0;
    cursor: pointer;

    &:nth-child(1) {
      display: inline-block;
      animation: slideLeft 0.5s forwards;
      //animation-delay: 0.5s;
      opacity: 0;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &:nth-child(2) {
      display: inline-block;
      animation: slideLeft 1s forwards;
      //animation-delay: 1s;
      opacity: 0;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &:nth-child(3) {
      display: inline-block;
      animation: slideLeft 1.5s forwards;
      //animation-delay: 1.5s;
      opacity: 0;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &:nth-child(4) {
      display: inline-block;
      animation: slideLeft 2s forwards;
      //animation-delay: 2s;
      opacity: 0;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }

  &__slideRight {
    &:nth-child(1) {
      display: inline-block;
      animation: slideRight 2s forwards;
      //animation-delay: 0.5s;
      //opacity: 0;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &:nth-child(2) {
      display: inline-block;
      animation: slideRight 1.5s forwards;
      //animation-delay: 1s;
      //opacity: 0;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &:nth-child(3) {
      display: inline-block;
      animation: slideRight 1s forwards;
      //animation-delay: 1.5s;
      //opacity: 0;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &:nth-child(4) {
      display: inline-block;
      animation: slideRight 0.5s forwards;
      //animation-delay: 0.5s;
      //opacity: 0;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }

  &__selectedQuest {
    background: #68b2687a;
    width: auto;
    color: #000;
    padding: 5px;
    border-radius: 5px;
    max-width: fit-content;
    align-self: end;
  }

  &__answer {
    background: #dbe5ee;
    width: auto;
    color: #000;
    padding: 5px;
    border-radius: 5px;
    max-width: fit-content;
  }

  &__conversation {
    display: flex;
    flex-direction: column;
  }

  &__typing {
    align-items: center;
    display: flex;
    height: 17px;
  }

  &__dot {
    animation: mercuryTypingAnimation 1.8s infinite ease-in-out;
    background-color: #dbe5ee;
    border-radius: 50%;
    height: 7px;
    margin-right: 4px;
    vertical-align: middle;
    width: 7px;
    display: inline-block;

    &:nth-child(1) {
      animation-delay: 200ms;
    }

    &:nth-child(2) {
      animation-delay: 300ms;
    }

    &:nth-child(3) {
      animation-delay: 400ms;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__container {
    display: flex;
    justify-content: center;

    @media(max-width: 520px) {
      flex-direction: column-reverse;
    }
  }

  &__colorSubmit {
    background-color: #c7d2fe;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    padding: 5px 20px;
    font-weight: 700;
    display: block;
    margin: 0 auto;
    cursor: pointer;

    @media(max-width: 520px){
      margin-top: 15px;
    }
  }

  &__colorPicker {
    @media(max-width: 520px) {
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;
      justify-content: center;
      align-items: center;
    }
  }
}

@keyframes mercuryTypingAnimation {
  0% {
    transform: translateY(0px);
    background-color: rgba(131, 164, 196, 0.98);
  }
  28% {
    transform: translateY(-7px);
    background-color: rgba(131, 164, 196, 0.75);
  }
  44% {
    transform: translateY(0px);
    background-color: #83A4C457;
  }
}


@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes slideRight {
  from {
    opacity: 1;
    transform: translateX(0%);
  }
  to {
    opacity: 0;
    transform: translateX(200px);
  }
}
</style>