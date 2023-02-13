<template>
  <CustomPopup :show="showDebug" />

  <header
    class="flex justify-between text-sm items-center h-24 w-full px-24 shadow-xl bg-[#F2F2F2]"
    v-if="$route.name === 'Главная страница' || $route.name === 'Авторизация'"
  >
    <div class="text-[40px] font-bold flex gap-8 items-center">
      <CustomSvg college-icon />
      <p>{{ header.week }}, {{ header.date }}</p>
    </div>
    <p class="text-[40px] font-bold">{{ header.time }}</p>
    <p
      class="opacity-30 text-[40px]"
      v-if="devMode().devStates.dev"
      @click="showDebug = !showDebug"
    >
      dev build
    </p>
    <div v-if="header.temp === undefined">
      <CustomSvg loader />
    </div>
    <div v-else>
      <div class="flex gap-4 items-center text-[40px]" v-if="header.temp">
        <p>{{ header.temp }}°C</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 15 16"
          fill="none"
        >
          <path
            d="M7.5 5.8125V2.375M7.5 5.8125C6.91984 5.8125 6.36344 6.04297 5.9532 6.4532C5.54297 6.86344 5.3125 7.41984 5.3125 8C5.3125 8.58016 5.54297 9.13656 5.9532 9.5468C6.36344 9.95703 6.91984 10.1875 7.5 10.1875M7.5 5.8125C8.08016 5.8125 8.63656 6.04297 9.04679 6.4532C9.45703 6.86344 9.6875 7.41984 9.6875 8C9.6875 8.58016 9.45703 9.13656 9.04679 9.5468C8.63656 9.95703 8.08016 10.1875 7.5 10.1875M7.5 13.625V10.1875M6.25 2.375H8.75M6.25 13.625H8.75M5.60625 6.90625L2.63125 5.1875M12.3687 10.8125L9.39375 9.09375M2.00625 6.26875L3.25625 4.10625M11.7437 11.8937L12.9937 9.73125M12.3687 5.1875L9.39375 6.90625M5.60625 9.09375L2.63125 10.8125M12.9937 6.26875L11.7437 4.10625M3.25625 11.8937L2.00625 9.73125"
            stroke="#075195"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </header>
  <header
    v-else
    class="flex justify-between text-sm items-center h-24 w-full px-24 shadow-xl bg-[#F2F2F2]"
  >
    <div class="text-[40px] font-bold flex gap-8 items-center">
      <CustomSvg arrow-right @click="$router.back()" />
      <p>{{ $route.name }}</p>
    </div>
    <p class="opacity-30">dev build</p>
    <div class="flex gap-4 items-center text-[40px]">
      <p>{{ header.time }}</p>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { devMode } from "../store/devMode";
import axios from "axios";
import moment from "moment-timezone";
import "moment/dist/locale/ru";

import CustomPopup from "./CustomPopup.vue";

import CustomSvg from "../components/CustomSvg.vue";

interface Header {
  temp?: string;
  time?: string;
  date?: string;
  week?: string;
}

const header = ref<Header>({});
const showDebug = ref<boolean>(false);

const update = {
  datetime: () => {
    header.value.time = moment.tz("Asia/Krasnoyarsk").format("HH:mm");
    header.value.date = moment(new Date()).locale("ru").format("D MMMM");
    header.value.week =
      moment(new Date()).locale("ru").format("dddd").charAt(0).toUpperCase() +
      moment(new Date()).locale("ru").format("dddd").slice(1);
  },
  weather: async () => {
    header.value.temp = undefined;
    const res = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=56.20&longitude=95.72&current_weather=true"
    );
    header.value.temp = res.data.current_weather.temperature;
  },
};

onMounted(() => {
  // Load first info on mount
  update.weather();
  update.datetime();

  setInterval(() => {
    update.datetime();
  }, 1000);

  setInterval(() => {
    update.weather();
  }, 3600000);
});
</script>
