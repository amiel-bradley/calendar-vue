import Agenda from "@/views/Agenda.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import NotFound from "@/views/NotFound.vue";
import RegisterView from "@/views/RegisterView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  { path: '/agenda', name: 'agenda', component: Agenda },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
