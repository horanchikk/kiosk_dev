import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import { createPinia } from "pinia";
import VueKinesis from "vue-kinesis";

createApp(App).use(router).use(createPinia).use(VueKinesis).mount("#app");
