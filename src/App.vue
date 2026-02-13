<script setup>
import MainComp from './components/MainComp.vue';
import NavBar from './components/NavBar.vue';
import Agenda from './views/Agenda.vue';
</script>


<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <RouterView></RouterView>
    <Agenda></Agenda>
  </main>
</template>


<style scoped></style>