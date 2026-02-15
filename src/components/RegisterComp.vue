<script setup>


</script>


<template>

    <form @submit.prevent="register">

        <input type="text" placeholder="Nom" v-model="surname">
        <input type="text" placeholder="Prénom" v-model="name">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Mot de passe" v-model="password">
        <input type="password" placeholder="Confirmer le Mot de passe" v-model="passwordconf">
        <p>Mot de passe incorrect</p>
        <button>S'incrire</button>
    </form>

</template>


<style scoped></style>