<script setup>
import { ref } from 'vue';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';

const tabTasks = ref([
    {id: 1, title: 'Tâche', day: 'Monday'}
])
const isEdit = ref(false);
function edit(){
  isEdit.value = true
}

</script>


<template>
  <header>
    <HeaderComp></HeaderComp>
  </header>
  <main>
    <MainComp @edit="edit"></MainComp>
  </main>
</template>


<style scoped></style>