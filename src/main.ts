import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import VueKinesis from "vue-kinesis";
import { createPinia } from "pinia";

createApp(App).use(router).use(VueKinesis).use(createPinia()).mount("#app");
