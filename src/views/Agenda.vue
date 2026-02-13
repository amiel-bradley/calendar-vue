<script setup>
import { ref } from 'vue';
import HeaderComp from '@/components/HeaderComp.vue';
import MainComp from '@/components/MainComp.vue';

const jour = ref('Monday')
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
const isShow = ref(false)
function edit(id) {
  isEdit.value = true
  currentId.value = id
}
function receive(name) {
  jour.value = name
}
function showw() {
  isShow.value = true
}
</script>


<template>
  <header>
    <HeaderComp 
    :isShow="isShow" 
    :jour="jour" />
  </header>
  <main>
    <MainComp 
    @modifier="edit" 
    :tab="days" 
    @envoie="receive" 
    @show="showw" />
  </main>
</template>


<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

main {
  background-color: #f1f5f9; 
  min-height: calc(100vh - 80px);
  padding: 2rem;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  main {
    padding: 1rem;
  }
}
</style>