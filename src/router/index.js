import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router';
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/main', component: () => import('../pages/Main.vue') },
];

export const createRouter = () => {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  });
};
