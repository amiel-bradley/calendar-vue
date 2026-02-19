<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import bcrypt from "bcryptjs";

const saltRounds = 10;

const router = useRouter();
const surname = ref("");
const name = ref("");
const email = ref("");
const password = ref("");
const passwordconf = ref("");
const crypte = ref("");
const users = ref(JSON.parse(localStorage.getItem("users")) || []);

const faux = ref(false);

const isFormValid = computed(
  () => surname.value!=='' && name.value!=='' && email.value!=='',
  password.value!=='' && passwordconf.value!=='',
);

const register = () => {
  if (isFormValid && password.value === passwordconf.value && password.value!==''&& passwordconf.value!=='' ) {
    bcrypt.hash(password.value, saltRounds, (err, hash) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Mot de passe crypté :", hash);
      let user = {
        id: Date.now(),
        surname: surname.value,
        name: name.value,
        email: email.value,
        password: hash,
        status:true
      };
      users.value.push(user);

      console.log(users.value);

      surname.value = "";
      name.value = "";
      email.value = "";
      password.value = "";
      passwordconf.value = "";

      localStorage.setItem("users", JSON.stringify(users.value));
      router.push("/login");
    });
  } else {
    faux.value = true;
    password.value = "";
    passwordconf.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="register">
    <input type="text" placeholder="Nom" v-model="surname" />
    <input type="text" placeholder="Prénom" v-model="name" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Mot de passe" v-model="password" />
    <input
      type="password"
      placeholder="Confirmer le Mot de passe"
      v-model="passwordconf"
    />
    <p v-if="faux">Adresse email ou Mot de passe incorrect</p>
    <button type="submit" :disabled="!isFormValid">S'incrire</button>
    
  </form>
</template>

<style scoped>
/* Container principal */
form {
  max-width: 420px;
  margin: 100px auto;
  padding: 40px 32px;
  background: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* Inputs */
input {
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 15px;
  transition: all 0.2s ease;
  outline: none;
}

input:focus {
  border-color: #1e40af;
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.15);
}

/* Message d'erreur */
p {
  font-size: 14px;
  color: #dc2626;
  margin-top: -8px;
}

/* Bouton */
button {
  margin-top: 10px;
  padding: 14px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  background-color: #1e40af;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #1e3a8a;
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}
</style>
