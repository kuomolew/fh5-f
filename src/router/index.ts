import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import MyGarageView from '@/views/MyGarageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/my-garage',
      name: 'MyGarage',
      component: MyGarageView,
    },
  ],
});

export default router;
