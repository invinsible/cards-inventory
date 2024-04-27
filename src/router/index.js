import { createWebHistory, createRouter } from 'vue-router';

import MainPage from '../views/MainPage.vue';
import AdminPage from '../views/AdminPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/admin', component: AdminPage }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
