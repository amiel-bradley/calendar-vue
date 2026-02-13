// src/services/authService.js
import { ref } from "vue";

const isLoggedIn = ref(false);

function login1() {
  isLoggedIn.value = true;
}

function logout() {
  isLoggedIn.value = false;
}

function getFilteredNav(currentPath) {
  const navItems = [
    { name: "Home", to: "/" },
    { name: "Login", to: "/login" },
  ];
  return navItems;
}

export default {
  isLoggedIn,
  login1,
  logout,
  getFilteredNav,
};
