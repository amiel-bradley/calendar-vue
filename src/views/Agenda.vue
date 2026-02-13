<script setup>
import { ref, watch } from "vue";
import HeaderComp from "@/components/HeaderComp.vue";
import MainComp from "@/components/MainComp.vue";
const jour = ref("Friday");
const tabTasks = ref(
  JSON.parse(localStorage.getItem("tabTasks")) || [
    { name: "Monday", tasks: [] },
    { name: "Tuesday", tasks: [] },
    { name: "Wednesday", tasks: [] },
    { name: "Thursday", tasks: [] },
    { name: "Friday", tasks: [] },
    { name: "Saturday", tasks: [] },
    { name: "Sunday", tasks: [] },
  ],
);

// const tab = ref(JSON.parse(localStorage.getItem("savedTasks")) || []);

function addtask(newtask) {
  let day = tabTasks.value.find((a) => {
    return a.name === jour.value;
  });

  if (!day) return;
  day.tasks.push(newtask);

  localStorage.setItem("tabTasks", JSON.stringify(tabTasks.value));

  console.log(tabTasks.value);
}
</script>

<template>
  <header>
    <HeaderComp @task="addtask"></HeaderComp>
  </header>
  <main>
    <MainComp></MainComp>
  </main>
</template>

<style scoped></style>
