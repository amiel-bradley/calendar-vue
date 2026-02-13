<script setup>


</script>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  router.push({ name: 'login' })
}
</script>

<template>
  <nav class="nav-main">
    <div class="nav-logo">
      <RouterLink to="/">📅 App</RouterLink>
    </div>
    <div class="nav-links">
      <RouterLink to="/" class="nav-item">Home</RouterLink>
      <RouterLink :to="{ name: 'agenda' }" class="nav-item">Agenda</RouterLink>
      <RouterLink to="/login" class="nav-item">Login</RouterLink>
      <RouterLink :to="{ name: 'register' }" class="nav-item">Register</RouterLink>
      <button @click="logout" class="logout-btn">Logout</button>
    </div>
  </nav>
</template>

<style scoped>
.nav-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 70px;
  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;
  font-family: 'Segoe UI', sans-serif;
}

.nav-logo a {
  font-size: 1.5rem;
  font-weight: 800;
  color: #2c3e50;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 25px;
}

.nav-item {
  text-decoration: none;
  color: #64748b;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.nav-item:hover, 
.router-link-active {
  color: #2ecc71;
}

.logout-btn {
  background-color: #f8fafc;
  color: #ef4444; 
  border: 1px solid #f1f5f9;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.logout-btn:hover {
  background-color: #fef2f2;
  border-color: #fee2e2;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .nav-main {
    padding: 0 20px;
  }
  .nav-links {
    gap: 15px;
  }
}
</style>