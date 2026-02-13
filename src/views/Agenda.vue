<script setup>
import { ref } from 'vue';
import HeaderComp from '@/components/HeaderComp.vue';
import MainComp from '@/components/MainComp.vue';

const jour = ref('')
const days = ref([
  { name: 'Monday', tasks: [] },
  { name: 'Tuesday', tasks: [] },
  { name: 'Wednesday', tasks: [] },
  { name: 'Thursday', tasks: [] },
  { name: 'Friday', tasks: [] },
  { name: 'Saturday', tasks: [] },
  { name: 'Sunday', tasks: [] }
])
const isEdit = ref(false);
const currentId = ref('')
function edit(id) {
  isEdit.value = true
  currentId.value = id
}
function receive(name) {
  jour.value = name
}
</script>


<template>
  <header>
    <HeaderComp></HeaderComp>
  </header>
  <main>
    <MainComp @modifier="edit" :tab="days" @envoie="receive" />
  </main>
</template>


<style scoped></style>