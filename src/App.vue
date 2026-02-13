<script setup>
import MainComp from './components/MainComp.vue';
import NavBar from './components/NavBar.vue';
</script>


<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <RouterView></RouterView>
    <MainComp></MainComp>
  </main>
</template>


<style scoped></style>