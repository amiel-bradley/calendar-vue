<script setup>
const emit = defineEmits(['edit', 'supp'])
function supp() {
  emit('supp', props.task.id)
}
function modif(id) {
  console.log(props.task);

  emit('edit', props.task)
}
const props = defineProps({
  task: Object
})

</script>


<!-- <template>

  <div>
    <span>{{ task.title }}</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" @click="modif">
      <path
        d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
        stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
        stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 1024 1024" class="icon"
      version="1.1" @click="supp">
      <path
        d="M905.92 237.76a32 32 0 0 0-52.48 36.48A416 416 0 1 1 96 512a418.56 418.56 0 0 1 297.28-398.72 32 32 0 1 0-18.24-61.44A480 480 0 1 0 992 512a477.12 477.12 0 0 0-86.08-274.24z"
        fill="#231815" />
      <path
        d="M630.72 113.28A413.76 413.76 0 0 1 768 185.28a32 32 0 0 0 39.68-50.24 476.8 476.8 0 0 0-160-83.2 32 32 0 0 0-18.24 61.44zM489.28 86.72a36.8 36.8 0 0 0 10.56 6.72 30.08 30.08 0 0 0 24.32 0 37.12 37.12 0 0 0 10.56-6.72A32 32 0 0 0 544 64a33.6 33.6 0 0 0-9.28-22.72A32 32 0 0 0 505.6 32a20.8 20.8 0 0 0-5.76 1.92 23.68 23.68 0 0 0-5.76 2.88l-4.8 3.84a32 32 0 0 0-6.72 10.56A32 32 0 0 0 480 64a32 32 0 0 0 2.56 12.16 37.12 37.12 0 0 0 6.72 10.56zM726.72 297.28a32 32 0 0 0-45.12 0l-169.6 169.6-169.28-169.6A32 32 0 0 0 297.6 342.4l169.28 169.6-169.6 169.28a32 32 0 1 0 45.12 45.12l169.6-169.28 169.28 169.28a32 32 0 0 0 45.12-45.12L557.12 512l169.28-169.28a32 32 0 0 0 0.32-45.44z"
        fill="#231815" />
    </svg>
  </div>

</template>




<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.2s ease;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

/* Hover sur la tâche */
div:hover {
  background-color: #ffffff;
  border-color: #1e40af;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

/* Texte de la tâche */
span {
  flex-grow: 1;
  margin: 0 12px;
  color: #1e3a8a;
  font-weight: 500;
  word-break: break-word;
  /* empêche de dépasser */
}

/* Tous les SVG */
svg {
  width: 20px;
  height: 20px;
  cursor: pointer;
  flex-shrink: 0;
  /* reste sur la même ligne */
  transition: transform 0.1s ease, stroke 0.2s, fill 0.2s;
}

/* Click effect */
svg:active {
  transform: scale(0.9);
}

/* Modifier */
svg:first-of-type:hover {
  stroke: #1e40af;
}

/* Supprimer */
.icon-supp:hover {
  fill: #dc2626;
}
</style> -->
 

<template>
  <div class="task-card">
    <span class="task-title">{{ task.title }}</span>
    <div class="task-actions">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" @click="modif">
        <path
          d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path
          d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" @click="supp">
        <path d="M905.92 237.76a32 32 0 0 0-52.48 36.48A416 416 0 1 1 96 512a418.56 418.56 0 0 1 297.28-398.72 32 32 0 1 0-18.24-61.44A480 480 0 1 0 992 512a477.12 477.12 0 0 0-86.08-274.24z"/>
        <path d="M630.72 113.28A413.76 413.76 0 0 1 768 185.28a32 32 0 0 0 39.68-50.24 476.8 476.8 0 0 0-160-83.2 32 32 0 0 0-18.24 61.44zM489.28 86.72a36.8 36.8 0 0 0 10.56 6.72 30.08 30.08 0 0 0 24.32 0 37.12 37.12 0 0 0 10.56-6.72A32 32 0 0 0 544 64a33.6 33.6 0 0 0-9.28-22.72A32 32 0 0 0 505.6 32a20.8 20.8 0 0 0-5.76 1.92 23.68 23.68 0 0 0-5.76 2.88l-4.8 3.84a32 32 0 0 0-6.72 10.56A32 32 0 0 0 480 64a32 32 0 0 0 2.56 12.16 37.12 37.12 0 0 0 6.72 10.56zM726.72 297.28a32 32 0 0 0-45.12 0l-169.6 169.6-169.28-169.6A32 32 0 0 0 297.6 342.4l169.28 169.6-169.6 169.28a32 32 0 1 0 45.12 45.12l169.6-169.28 169.28 169.28a32 32 0 0 0 45.12-45.12L557.12 512l169.28-169.28a32 32 0 0 0 0.32-45.44z"/>
      </svg>
    </div>
  </div>
</template>

<!-- <style scoped>
.task-card {
  display: flex;
  flex-direction: column; /* texte en haut, icônes en bas */
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.task-card:hover {
  background-color: #ffffff;
  border-color: #1e40af;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

.task-title {
  color: #1e3a8a;
  font-weight: 500;
  margin-bottom: 8px;
  word-break: break-word;
}

.task-actions {
  display: flex;
  gap: 8px; /* icônes côte à côte */
  justify-content: flex-end; /* alignement à droite */
}
.task-actions svg {
  width: 20px;
  height: 20px;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.1s ease;
}
</style> -->

<style scoped>/* Task.vue */
.task-wrapper {
  background-color: #f8fafc;
  padding: 10px 12px;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  word-break: break-word;
}

.task-wrapper svg {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.task-wrapper span {
  flex: 1;
  margin: 0 8px;
  font-size: 14px;
  color: #1e40af;
}</style>