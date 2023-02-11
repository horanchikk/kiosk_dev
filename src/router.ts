import { createWebHashHistory, createRouter } from "vue-router";

import HomePage from "./page/HomePage.vue";
import FeedPage from "./page/FeedPage.vue";
import FeedId from "./page/FeedId.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "Главная страница",
  },
  {
    path: "/feed",
    component: FeedPage,
    name: "Новости",
  },
  {
    path: "/news/id/:id",
    component: FeedId,
    name: "Новость",
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
