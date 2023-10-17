import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BAS_URL),
  routes: [
    {
      path: '/',
      redirect: '/bar'
    },
    {
      path: '/bar',
      component: () => import('@/views/bar/index.vue'),
      name: 'bar',
      meta: {
        title: 'bar',
      },
    },
    {
      path: '/pie',
      component: () => import('@/views/pie/index.vue'),
      name: 'pie',
      meta: {
        title: 'pie',
      },
    },
    {
      path: '/pie3d',
      component: () => import('@/views/pie3d/index.vue'),
      name: 'pie3d',
      meta: {
        title: 'pie3d',
      },
    },
    {
      path: '/pie3d-h',
      component: () => import('@/views/highchartPie/index.vue'),
      name: 'pie3d-h',
      meta: {
        title: 'pie3d-h',
      },
    },
    {
      path: '/map',
      component: () => import('@/views/map/index.vue'),
      name: 'map',
      meta: {
        title: 'map',
      },
    },
    {
      path: '/map2',
      component: () => import('@/views/map2/index.vue'),
      name: 'map2',
      meta: {
        title: 'map2',
      },
    },
  ],
});
export default router;