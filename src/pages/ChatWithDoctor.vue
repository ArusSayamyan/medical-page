<template>
  <div class="chat">
    <h1 class="chat__title" >Chat</h1>
    <div class="chat__wrapper">
      <div class="chat__mainChat" ref="myElement">
        <p class="chat__answer">Hi, how can I help you?</p>
        <div class="chat__conversation" v-for="quest in selectedQuest" :key="quest">
          <p class="chat__selectedQuest">{{ quest.mess }}</p>
          <p class="chat__answer">{{ quest.ans }}</p>
        </div>
      </div>
      <div class="chat__messagesWrapper">
        <p class="chat__message" v-for="message in messages" :key="message.id"
           @click="sendMessage($event, message.message)">{{ message.message }}</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import {ref} from 'vue'

const myElement = ref();

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
    answer: '1.Dental care - 100$, '  +
        '2.Laboratory and diagnostic care, '  +
        '3.Preventative care, ' +
        '4.Physical and occupational therapy, ' +
        '5.Nutritional support, ' +
        '6.Pharmaceutical care'
  },
  {
    id: 'message4',
    message: 'can you tell me your address?',
    answer: 'send address'
  },
])


function sendMessage(event, selectedMessage) {
  if (event.target.textContent === selectedMessage) {
    selectedQuest.value.push({
      mess: selectedMessage,
      ans: '. . .'
    })
  }
  setTimeout(() => {
    addAnswer(selectedMessage);
  }, 3000)

  if(myElement.value.clientHeight <  myElement.value.scrollHeight) {
    myElement.value.lastElementChild.scrollIntoView({ behavior: 'smooth' })
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


</script>

<style scoped lang="scss">
.chat {
  padding: 80px 20px;
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  &__mainChat {
    width: 100%;
    height: 300px;
    box-shadow: rgba(50, 50, 93, 0.25) 0 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    border-radius: 5px;
    padding: 10px;
    overflow: auto;
  }

  &__wrapper {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
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

}
</style>