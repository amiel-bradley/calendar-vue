<script setup>
import NavBar from './components/NavBar.vue';
</script>


<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>


<style scoped></style>