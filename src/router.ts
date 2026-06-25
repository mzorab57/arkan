import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/portfolio',
      redirect: '/',
    },
    {
      path: '/portfolio/:pathMatch(.*)*',
      redirect: (to) => {
        const redirectedPath = Array.isArray(to.params.pathMatch)
          ? to.params.pathMatch.join('/')
          : String(to.params.pathMatch ?? '');

        return redirectedPath ? `/${redirectedPath}` : '/';
      },
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/gashti-chin',
      name: 'gashti-chin',
      component: () => import('@/views/PackageView.vue'),
      props: { href: '/gashti-chin' },
    },
    {
      path: '/gashti-dubai',
      name: 'gashti-dubai',
      component: () => import('@/views/PackageView.vue'),
      props: { href: '/gashti-dubai' },
    },
    {
      path: '/gashti-medina',
      name: 'gashti-medina',
      component: () => import('@/views/PackageView.vue'),
      props: { href: '/gashti-medina' },
    },
    {
      path: '/gashti-15-shaw',
      name: 'gashti-15-shaw',
      component: () => import('@/views/PackageView.vue'),
      props: { href: '/gashti-15-shaw' },
    },
    {
      path: '/package-business-islam',
      name: 'package-business-islam',
      component: () => import('@/views/PackageView.vue'),
      props: { href: '/package-business-islam' },
    },
    {
      path: '/package-business-salam',
      name: 'package-business-salam',
      component: () => import('@/views/PackageView.vue'),
      props: { href: '/package-business-salam' },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 0,
        behavior: 'smooth',
      };
    }

    return { top: 0 };
  },
});

export default router;
