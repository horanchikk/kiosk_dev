import { createWebHashHistory, createRouter } from "vue-router";

import HomePage from "./page/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "Home",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
