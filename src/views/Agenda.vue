<script setup>
import NavBar from '@/components/NavBar.vue';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';

const tabTasks = [
    {id: 1, title: 'Tâche', day: 'Monday'}
]

</script>


<template>
  <NavBar/>
  <header>
    <HeaderComp></HeaderComp>
  </header>
  <main>
    <MainComp></MainComp>
  </main>
</template>


<style scoped></style>