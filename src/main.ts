import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import VueKinesis from "vue-kinesis";

createApp(App).use(router).use(VueKinesis).mount("#app");
