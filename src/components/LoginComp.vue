<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const faux = ref(false);

// Récupération des utilisateurs
const data = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [
        {
            nom: "admin",
            prenom: "admin",
            email: "admin@admin",
            password: "admin",
        },
    ];

const isFormValid = computed(() =>
    email.value !== "" && password.value !== ""
);

const login = () => {
    const use = data.find((x) => x.email === email.value);

    if (!use) {
        faux.value = true;
        password.value = "";
        return;
    }

    // ✅ Comparaison simple
    if (password.value === use.password) {
        localStorage.setItem("data1", JSON.stringify(use));

        email.value = "";
        password.value = "";
        faux.value = false;

        router.push("/agenda");
    } else {
        faux.value = true;
        password.value = "";
    }
};
</script>

<template>
    <form @submit.prevent="login">
        <input type="text" placeholder="Adresse email" v-model="email" />
        <input type="password" placeholder="Mot de passe" v-model="password" />
        <p v-if="faux">Adresse email ou mot de passe incorrect</p>
        <button type="submit" :disabled="!isFormValid">Se connecter</button>
    </form>
    <p>
        Vous n'avez pas de compte?
        <router-link to="/register">inscrivez-vous</router-link>
    </p>
</template>

<style scoped>
/* Container du formulaire */
form {
    max-width: 400px;
    margin: 80px auto;
    /* centré verticalement et horizontalement */
    padding: 40px 30px;
    background-color: #f8fafc;
    /* même que les feature-cards */
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
}

/* Inputs */
input[type="text"],
input[type="password"] {
    padding: 14px 16px;
    border-radius: 6px;
    border: 1px solid #d1d5db;
    font-size: 16px;
    outline: none;
    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

input[type="text"]:focus,
input[type="password"]:focus {
    border-color: #1e40af;
    /* bleu primaire */
    box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.2);
}

/* Bouton */
button {
    padding: 14px 0;
    border-radius: 6px;
    border: none;
    background-color: #1e40af;
    /* btn.primary */
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

button:hover {
    background-color: #1e3a8a;
}

/* Message d'erreur */
form p {
    font-size: 14px;
    color: #dc2626;
    /* rouge pour erreur */
    margin: 0;
}

/* Lien d'inscription */
p:last-child {
    text-align: center;
    font-size: 14px;
    color: #555;
    margin-top: 10px;
}

p:last-child a {
    color: #1e40af;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
}

p:last-child a:hover {
    color: #1e3a8a;
}
</style>
