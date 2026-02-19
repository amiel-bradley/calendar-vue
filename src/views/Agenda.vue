<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
import MainComp from "@/components/MainComp.vue";

const tabTasks = [{ id: 1, title: "Tâche", day: "Monday" }];
</script>

<template>
  <header>
    <HeaderComp></HeaderComp>
  </header>
  <main>
    <MainComp></MainComp>
  </main>
</template>

<style scoped></style>
