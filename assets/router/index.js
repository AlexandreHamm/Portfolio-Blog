import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Portfolio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PortfolioView.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BlogView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;