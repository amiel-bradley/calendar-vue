<script setup>
import { ref, watch } from 'vue'
import Modals from '@/components/Modals.vue'
import Task from './Task.vue'

const props = defineProps({
    tab: Array
})

const days = ref([...props.tab])

watch(() => props.tab, (newVal) => {
    days.value = [...newVal]
})

const emit = defineEmits(['modifier', 'envoie', 'show'])

const showModal = ref(false)
const taskToDelete = ref(null)

function addTask(day) {
    day.tasks.push({
        id: Date.now(),
        title: 'Nouvelle tâche'
    })
}

function modif(id) {
    emit('modifier', id)
}

function send(day) {
    emit('envoie', day)
}

function newEvent() {
    emit('show')
}

function supp(id) {
    taskToDelete.value = id
    showModal.value = true
}

function confirmModal() {
    days.value.forEach(day => {
        day.tasks = day.tasks.filter(
            t => t.id !== taskToDelete.value
        )
    })

    taskToDelete.value = null
    showModal.value = false
}

function closeModal() {
    taskToDelete.value = null
    showModal.value = false
}
</script>


<template>
    <Modals :show="showModal" title="Confirmation" @close="closeModal" @confirm="confirmModal">
        <p>Veux-tu vraiment supprimer cette tâche ?</p>
    </Modals>
    <div class="calendar-app">
        <header class="calendar-header">
            <h1 class="app-title">Calendar App</h1>
            <button @click="newEvent" class="btn-new-event">
                <span class="plus">+</span> New Event
            </button>
        </header>

        <div class="calendar-grid">
            <div v-for="day in days" :key="day.name" class="day-column">
                <div class="day-header" @click="send(day.name)">
                    {{ day.name }}
                </div>

                <div class="task-container">
                    <div v-for="task in day.tasks" :key="task.id" class="task-wrapper">
                        <Task :task="task" @edit="modif" @supp="supp" class="custom-task-card"></Task>
                    </div>
                </div>

                <button class="add-task-inline" @click="addTask(day)">+</button>
            </div>
        </div>
    </div>
</template>


<style scoped>
.calendar-app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #fff;
    min-height: 100vh;
}

.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    border-bottom: 1px solid #eee;
}

.app-title {
    font-size: 24px;
    font-weight: 800;
    color: #000;
    margin: 0;
}

.btn-new-event {
    background-color: #2ecc71;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s;
}

.btn-new-event:hover {
    background-color: #27ae60;
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    border-top: 1px solid #e0e0e0;
}

.day-column {
    border-right: 1px solid #e0e0e0;
    min-height: 200px;
    display: flex;
    flex-direction: column;
}

.day-column:last-child {
    border-right: none;
}

.day-header {
    padding: 15px;
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid #e0e0e0;
    background-color: #fff;
}

.task-container {
    padding: 10px;
    flex-grow: 1;
}

.custom-task-card {
    background-color: #e8f8f0 !important;
    border: 1px solid #2ecc71 !important;
    border-radius: 8px !important;
    padding: 10px !important;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: #2c3e50;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.add-task-inline {
    background: transparent;
    border: none;
    color: #ccc;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
}

.add-task-inline:hover {
    color: #2ecc71;
}
</style>