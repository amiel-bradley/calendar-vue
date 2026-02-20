<script setup>
import { ref, computed } from "vue";
const task = ref("");
/**les prop definits : jour*/

const props = defineProps({
  jour: String,
  isShow: Boolean,
  currentTask: Object
})

/**a revoir  */
// const localCurrentTask=ref(props.currentTask)
// console.log(localCurrentTask.value);

if (props.currentTask) {
  task.value = props.currentTask.title
  console.log(task.value);

}
const localisShow = ref(props.isShow)
console.log(localisShow.value);


const emits = defineEmits(["task"]);

/**pour éviter d'insérrer des tâches vides */
const faux = ref(false)
const isFormValid = computed(() =>
  task.value !== ''

);
function addTask() {
  if (isFormValid.value) {
    let tache = { id: Date.now(), title: task.value };

    task.value = "";
    faux.value = false
    emits("task", tache);
  } else {
    faux.value = true
  }
}

/**Suppression de l'input d'ajout */

const supp = ref(true)
const supInput = () => {
  supp.value = localisShow.value
}
</script>

<template>
  <div>
    <div id="div_p" v-show="isShow">
      <div id="title">
        <h2>Add a new event</h2>
        <button @click="supInput">X</button>
      </div>
      <p>{{ jour }}</p>
      <form @submit.prevent="addTask">
        <input v-model="task" type="text" placeholder="New event" id="input" />
        <button>submit</button>
      </form>
      <p v-if="faux">Entrer une tâche</p>
    </div>
  </div>
</template>




<style scoped>
#div_p {
  width: 100%;
  max-width: 400px;
  background: #f8fafc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  margin: 20px auto;
}

#title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

#title h2 {
  font-size: 1.25rem;
  color: #1e3a8a;
}

#title button {
  background: #dc2626;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

#title button:hover {
  background: #b91c1c;
}

#div_p form {
  display: flex;
  gap: 10px;
}

#div_p input[type="text"] {
  flex: 1;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  font-size: 0.95rem;
}

#div_p input[type="text"]:focus {
  border-color: #1e40af;
  box-shadow: 0 0 0 2px rgba(30, 64, 175, 0.2);
}

#div_p form button {
  background-color: #1e40af;
  color: #fff;
  border-radius: 6px;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
}

#div_p form button:hover {
  background-color: #1e3a8a;
}

#div_p p {
  color: #dc2626;
  font-size: 0.9rem;
  margin-top: 8px;
}
</style>