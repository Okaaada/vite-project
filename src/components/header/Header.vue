<script setup>
  import { signOut, getAuth } from "firebase/auth";
  import { useRouter } from "vue-router"

  const auth = getAuth();
  const router = useRouter();

  const logout = () => {
    signOut(auth);
    router.push('/login');
  }
  </script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid bg-success text-white ">
    <router-link class="navbar-brand text-white" to="/login" >大人のための札幌バレーボール部掲示板</router-link>
    <div>何かご質問があればどうぞ！</div>
  </div>
</nav>
</template>