<script setup>
import { ref, watch } from "vue";


import HeaderComp from "@/components/HeaderComp.vue";
import MainComp from "@/components/MainComp.vue";

/* --- Etat principal --- */
const jour = ref("Monday");
const isEdit = ref(false);
const currentTask = ref("");
const isShow = ref(false);

/* --- Tableau principal (avec localStorage) --- */
const days = ref(
  JSON.parse(localStorage.getItem("tabTasks")) || [
    { name: "Monday", tasks: [] },
    { name: "Tuesday", tasks: [] },
    { name: "Wednesday", tasks: [] },
    { name: "Thursday", tasks: [] },
    { name: "Friday", tasks: [] },
    { name: "Saturday", tasks: [] },
    { name: "Sunday", tasks: [] },
  ]
);

/* --- Sauvegarde auto localStorage --- */
watch(
  days,
  (newVal) => {
    localStorage.setItem("tabTasks", JSON.stringify(newVal));
  },
  { deep: true }
);

/* --- Ajouter une tâche depuis Header --- */
function addtask(newtask) {
  const day = days.value.find((d) => d.name === jour.value);
  if (!day) return;

  day.tasks.push(newtask);
}

/* --- Edit task --- */
function edit(task) {
  isEdit.value = true;
  currentTask.value = task;
  
  console.log(task);
  
}

/* --- Changer jour sélectionné --- */
function receive(name) {
  jour.value = name;
}

/* --- Ouvrir modal --- */
function showw() {
  isShow.value = true;
}

</script>

<template>
  <header>
    <!-- Props pour jour.value qui sera récupéré dans le composant enfant headerComp -->
    <HeaderComp :isShow="isShow" :jour="jour" @task="addtask" :currentTask="currentTask"/>
  </header>

  <main>
    <MainComp @modifier="edit" :tab="days" @envoie="receive" @show="showw" />
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
