<script>
import { defineComponent, reactive } from 'vue'
import View from '../chat/View.vue'
import Send from '../chat/Send.vue'
import { getDatabase, ref, push, onValue } from "firebase/database";
import DisplayName from '../chat/DisplayName.vue'
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

export default defineComponent({
  components: {
    View,
    Send,
    DisplayName
  },
  setup() {
    const data = reactive({
      user: {},
      chat: [],
      input: '',
      displayName: ''
    });

    data.user = getAuth().currentUser;
    data.displayName = data.user.displayName ?? '自分さん';
    const refMessage = ref(getDatabase(), 'chat');

    onValue(refMessage, (snapshot) => {
      const data = snapshot.val();
      updateChat(data);
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

    beforeRouteEnter: (to, from, next) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      } else {
        next('/login');
      }
    });
  }
});
</script>

<template>
  <div class="container">
   <DisplayName v-model="data.displayName" @update="updateDisplayName" />
   <View :data="data" />
   <Send @sendMessage="pushMessage" />
  </div>
</template>

<style scoped>

</style>