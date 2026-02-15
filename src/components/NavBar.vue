<script>
import { useRoute } from "vue-router";
import authServices from "@/services/authServices";

export default {
  setup() {
    const route = useRoute();

    // filteredNav réactif selon la route
    const filteredNav = authServices.getFilteredNav(route.path);

    return {
      filteredNav,
      isLoggedIn: authServices.isLoggedIn,
      login1: authServices.login1,
      logout: authServices.logout,
    };
  },
};
</script>

<template>
  <nav class="navbar">
    <div class="nav-links">
      <router-link
        v-for="x in filteredNav"
        :key="x.to"
        :to="x.to"
        class="nav-link"
        active-class="active"
      >
        {{ x.name }}
      </router-link>
    </div>

    <div class="auth-buttons">
      <router-link to="/login" v-if="!isLoggedIn" class="btn-auth btn-login">
        Se connecter
      </router-link>
      <router-link to="/" v-if="isLoggedIn" class="btn-auth btn-login">
        Se déconnecter
      </router-link>
      <!-- <button v-if="!isLoggedIn" @click="login1" class="btn-auth btn-login">
        Se connecter
      </button> -->

      <!-- <button v-if="isLoggedIn" @click="logout" class="btn-auth btn-logout">
        Se déconnecter
      </button> -->
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between; /* liens à gauche, boutons à droite */
  align-items: center;
  padding: 16px 32px;
  background-color: #ffffff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-link {
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  color: #444;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #2563eb;
}

.nav-link.active {
  color: #2563eb;
}

.nav-link.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background-color: #2563eb;
  border-radius: 2px;
}

.auth-buttons {
  display: flex;
  gap: 12px;
}

.btn-auth {
  padding: 8px 18px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-login {
  background-color: #2563eb;
  color: #fff;
}

.btn-login:hover {
  background-color: #1d4ed8;
}

.btn-logout {
  background-color: #dc2626;
  color: #fff;
}

.btn-logout:hover {
  background-color: #b91c1c;
}

/* Responsive mobile */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .nav-links {
    flex-wrap: wrap;
    gap: 16px;
  }
}
</style>
