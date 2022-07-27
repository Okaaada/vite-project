<script>
import { defineComponent, reactive } from 'vue'
import View from '../chat/View.vue'
import Send from '../chat/Send.vue'
import DisplayName from '../chat/DisplayName.vue'
import Header from '../header/Header.vue'
import Footer from '../footer/Footer.vue'
import { getDatabase, ref, push, onValue } from "firebase/database";


export default defineComponent({
  components: {
    View,
    Header,
    Send,
    DisplayName,
    Footer
  },
  setup() {
    const data = reactive({
      user: {},
      chat: [],
      input: '',
      displayName: ''
    });


    const updateChat = (snap) => {
      data.chat = [];
      for (const key in snap) {
        data.chat.push({
        message: snap[key].message,
        uid: snap[key].uid,
        displayName: snap[key].displayName
        })
      }
    };

    const pushMessage = (chatData) => {
      chatData.uid = data.user.uid
      chatData.displayName = data.displayName
      const db = getDatabase();
      push(ref(db, 'chat'), chatData);
    };

    const updateDisplayName = (name) => {
      updateProfile(data.user, {
      displayName: name
      });
      data.displayName = name
    }
      return {
      data,
      pushMessage,
      updateDisplayName
      }
    },

});
</script>

<template>
  <Header />
  <div class="container">
    <View :data="data" />
    <DisplayName v-model="data.displayName" @update="updateDisplayName" />
    <Send @sendMessage="pushMessage" />
  </div>
  <Footer />
</template>

<style scoped>

</style>