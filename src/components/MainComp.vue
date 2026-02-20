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
    console.log(id);

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
    background-color: #ffffff;
    min-height: 100vh;
    padding: 40px;
}

.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.app-title {
    font-size: 28px;
    font-weight: 700;
    color: #1e3a8a;
}

.btn-new-event {
    background-color: #1e40af;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;
}

.btn-new-event:hover {
    background-color: #1e3a8a;
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 16px;
}

.day-column {
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background: #f8fafc;
    max-height: 600px;
    /* limite la hauteur globale */
    overflow: hidden;
}

.day-header {
    padding: 12px;
    text-align: center;
    font-weight: 600;
    background-color: #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
    color: #1e3a8a;
    cursor: pointer;
}

.task-container {
    flex-grow: 1;
    overflow-y: auto;
    /* scroll uniquement si tâches nombreuses */
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.add-task-inline {
    padding: 8px;
    text-align: center;
    cursor: pointer;
    background: #1e40af;
    color: #fff;
    border: none;
    border-radius: 6px;
    margin: 10px;
}

.add-task-inline:hover {
    background: #1e3a8a;
}
</style>
