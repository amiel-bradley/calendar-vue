<script setup>
import { ref, watch } from 'vue';
import Task from './Task.vue';
const props = defineProps({
    tab: Array
})

const days = ref([...props.tab])

watch(() => props.tab, (newVal) => {
  days.value = [...newVal];
});

const emit = defineEmits(['modifier', 'envoie'])

function addTask(day) {
    day.tasks.push({
        id: Date.now(),
        title: 'Nouvelle tâche',
    })
}
function modif(id){
  emit('modifier', id)
}
function supp(id) {
  days.value.forEach(day => {
    day.tasks = day.tasks.filter(t => t.id !== id)
  })
}
function send(day){
  emit('envoie', day)
}

</script>

<template>
  <div class="week-container">
    <div v-for="day in days" :key="day.name" class="day-column">
      <h3 @click="send(day.name)">{{ day.name }}</h3>      
      <ul>
        <li v-for="task in day.tasks" :key="task.id">
          <Task :task="task" @edit="modif" @supp="supp"></Task>
        </li>
      </ul>
      <button class="add-btn" @click="addTask(day)">
        + Ajouter une tâche
      </button>
    </div>
  </div>
</template>

<style scoped>

.week-container {
  display: flex;
  gap: 20px;
  padding: 20px;
  overflow-x: auto;
  background-color: #f8f9fa;
  min-height: 20vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.day-column {
  flex: 1;
  min-width: 250px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
}

h3 {
  padding: 15px;
  margin: 0;
  background-color: #3b82f6; 
  color: white;
  border-radius: 8px 8px 0 0;
  font-size: 1.1rem;
  text-align: center;
}

ul {
  list-style: none;
  padding: 10px;
  margin: 0;
  flex-grow: 1;
}

li {
  margin-bottom: 8px;
}

.add-btn {
  margin: 10px;
  padding: 8px;
  border: 2px dashed #3b82f6;
  background: transparent;
  color: #3b82f6;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
}

.add-btn:hover {
  background: #3b82f6;
  color: white;
}
</style>