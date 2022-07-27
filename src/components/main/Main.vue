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
  <div class="container-fluid bg-success text-white ">
    <router-link class="navbar-brand text-white" to="/login" >大人のための札幌バレーボール部</router-link>
  </div>
   <button @click="locate" class="btn btn-primary">line 追加</button>
</template>