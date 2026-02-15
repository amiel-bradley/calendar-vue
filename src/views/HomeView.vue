<script setup></script>

<template>
  <section class="home">
    <div class="hero">
      <h1>Gestionnaire de Todo List</h1>
      <p>
        Organisez vos tâches facilement et boostez votre productivité au
        quotidien.
      </p>

      <div class="actions">
        <router-link to="/login" class="btn primary"> Connexion </router-link>
        <router-link to="/register" class="btn secondary">
          Inscription
        </router-link>
      </div>
    </div>

    <section class="features">
      <div class="feature-card">
        <h3>📝 Créez vos tâches</h3>
        <p>
          Ajoutez des tâches, définissez des priorités et planifiez vos journées
          en toute simplicité.
        </p>
      </div>

      <div class="feature-card">
        <h3>✅ Suivez vos progrès</h3>
        <p>
          Marquez vos tâches comme terminées et visualisez votre productivité au
          fil du temps.
        </p>
      </div>

      <div class="feature-card">
        <h3>📊 Analysez vos habitudes</h3>
        <p>
          Obtenez des statistiques sur vos tâches complétées pour mieux gérer
          votre temps.
        </p>
      </div>
    </section>
  </section>
</template>

<style scoped>
.home {
  padding: 80px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 36px;
  font-weight: 600;
}

.hero p {
  margin-top: 12px;
  font-size: 17px;
  color: #555;
}

.actions {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 16px;
}

.btn {
  padding: 14px 32px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn.primary {
  background-color: #1e40af;
  color: #fff;
}

.btn.primary:hover {
  background-color: #1e3a8a;
}

.btn.secondary {
  background-color: #e5e7eb;
  color: #1e40af;
}

.btn.secondary:hover {
  background-color: #d1d5db;
}

.features {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
}

.feature-card {
  background: #f8fafc;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
}

.feature-card h3 {
  margin-bottom: 12px;
  font-size: 20px;
}

.feature-card p {
  color: #444;
}
</style>
