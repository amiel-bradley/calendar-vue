<script setup>
import { ref } from "vue";

const task = ref("");

const emits = defineEmits(["task"]);

function addTask() {
  let tache = { id: Date.now(), title: task.value };

  task.value = "";

  emits("task", tache);
}
</script>

<template>
  <div id="div_p">
    <div id="title">
      <h2>Add a new event</h2>

      <button>Supprimer</button>
    </div>

    <p>Monday</p>

    <form @submit.prevent="addTask">
      <input v-model="task" type="text" placeholder="New event" id="input" />

      <button>submit</button>
    </form>
  </div>
</template>

<style scoped>
/* Conteneur principal */
#div_p {
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  margin: 40px auto;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
}

/* Titre + bouton supprimer */
#title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

#title h2 {
  font-size: 1.4rem;
  color: #2d3748;
  font-weight: 600;
}

/* Bouton Supprimer */
#title button {
  background: #e53e3e;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 0.85rem;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.1s ease;
}

#title button:hover {
  background: #c53030;
}

#title button:active {
  transform: scale(0.95);
}

/* Paragraphe (message, info, erreur, etc.) */
#div_p p {
  margin-bottom: 16px;
  font-size: 0.9rem;
  color: #718096;
}

/* Formulaire */
#div_p form {
  display: flex;
  gap: 10px;
}

/* Champ texte */
#div_p input[type="text"] {
  flex: 1;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  font-size: 0.95rem;
  outline: none;
  transition:
    border 0.2s ease,
    box-shadow 0.2s ease;
}

#div_p input[type="text"]:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.25);
}

/* Bouton submit */
#div_p form button {
  padding: 12px 16px;
  background: #667eea;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.1s ease;
}

#div_p form button:hover {
  background: #5a67d8;
}

#div_p form button:active {
  transform: scale(0.96);
}
</style>
