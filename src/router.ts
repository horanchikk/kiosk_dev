import { createRouter, createWebHashHistory } from "vue-router";

// Home page
import HomePage from "./page/HomePage.vue";

// Feed pages
import FeedPage from "./page/FeedPage.vue";
import FeedId from "./page/FeedId.vue";

// Timetable pages
import STChoose from "./page/Timetable/STChoose.vue";
import TChoose from "./page/Timetable/Choose/TChoose.vue";
import SChoose from "./page/Timetable/Choose/SChoose.vue";
import STable from "./page/Timetable/Tables/STable.vue";
import TTable from "./page/Timetable/Tables/TTable.vue";

// About page
import AboutPage from "./page/AboutPage.vue";

// Gallery page
import GalleryPage from "./page/Gallery/GalleryPage.vue";
import GalleryId from "./page/Gallery/GalleryId.vue";

// Interactive map of college page
import InteractiveMapPage from "./page/InteractiveMapPage.vue";

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
    path: "/about",
    component: AboutPage,
    name: "Информация",
  },
  {
    path: "/interactive",
    component: InteractiveMapPage,
    name: "Интерактивная карта",
  },
  {
    path: "/gallery",
    component: GalleryPage,
    name: "Галерея",
  },
  {
    path: "/gallery/:id",
    component: GalleryId,
    name: "Альбом",
  },
  {
    path: "/news/id/:id",
    component: FeedId,
    name: "Новость",
  },
  {
    path: "/timetable/STChoose",
    component: STChoose,
    name: "Кто вы?",
  },
  {
    path: "/timetable/TChoose",
    component: TChoose,
    name: "Выберите преподавателя",
  },
  {
    path: "/timetable/SChoose",
    component: SChoose,
    name: "Выберите группу",
  },
  {
    path: "/timetable/STable/:id",
    component: STable,
    name: "Расписание группы",
  },
  {
    path: "/timetable/TTable/:id",
    component: TTable,
    name: "Расписание преподавателя",
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
