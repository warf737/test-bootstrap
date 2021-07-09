import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/acct',
    },
    {
      path: '/acct',
      meta: { tab: 0,  page: 'acct'},
    },
    {
      path: '/dates',
      meta: { tab: 1,  page: 'dates'},
    },
    {
      path: '/operations',
      meta: { tab: 2,  page: 'operations'},
    },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router;
