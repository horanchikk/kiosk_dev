<template>
  <CustomPopup :show="showDebug">
    <div class="flex-auto overflow-y-scroll text-green-400">
      <p class="my-10 text-center text-5xl font-bold">Window</p>
      <div class="my-10 w-full border-[1px] border-green-300"></div>
      <div
        v-for="(item, index) in ok"
        :key="index"
        class="my-2 flex h-fit justify-center gap-5"
      >
        <p>{{ index }} -</p>
        <p>{{ item }}</p>
      </div>
      <p class="my-10 text-center text-5xl font-bold">Logging</p>
      <div class="my-10 w-full border-[1px] border-green-300"></div>
      <div
        v-for="item in dev().debug"
        class="my-2 flex h-fit justify-center gap-5"
      >
        <p>{{ item.from }} => {{ item.msg }}</p>
      </div>
      <p class="my-10 text-center text-5xl font-bold">Useragent</p>
      <div class="my-10 w-full border-[1px] border-green-300"></div>
      <div class="my-2 flex h-fit justify-center gap-5">
        {{ ua }}
      </div>
    </div>
  </CustomPopup>

  <header
    class="flex h-24 w-full items-center justify-between bg-[#F2F2F2] px-24 text-sm shadow-xl"
    v-if="$route.name === 'Главная страница' || $route.name === 'Авторизация'"
  >
    <div class="flex items-center gap-8 text-[40px] font-bold">
      <CustomSvg college-icon />
      <p>{{ header.week }}, {{ header.date }}</p>
    </div>
    <p class="text-[40px] font-bold">{{ header.time }}</p>
    <p
      class="text-[40px] opacity-30"
      v-if="dev().devStates.dev"
      @click="showDebug = !showDebug"
    >
      dev build
    </p>
    <div v-if="header.temp === undefined">
      <CustomSvg loader />
    </div>
    <div v-else>
      <div class="flex items-center gap-4 text-[40px]" v-if="header.temp">
        <p>{{ header.temp.temperature }}°C</p>
        <!-- солнце -->
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" v-if="header.temp.weathercode == 0 || 1">
          <path d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86M4.86 19.14L4.99 19.01M12 2.08V2M12 22V21.92M2.08 12H2M22 12H21.92M4.99 4.99L4.86 4.86" stroke="#FFA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 18.5C13.7239 18.5 15.3772 17.8152 16.5962 16.5962C17.8152 15.3772 18.5 13.7239 18.5 12C18.5 10.2761 17.8152 8.62279 16.5962 7.40381C15.3772 6.18482 13.7239 5.5 12 5.5C10.2761 5.5 8.62279 6.18482 7.40381 7.40381C6.18482 8.62279 5.5 10.2761 5.5 12C5.5 13.7239 6.18482 15.3772 7.40381 16.5962C8.62279 17.8152 10.2761 18.5 12 18.5Z" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <!-- снег -->
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" v-else-if="header.temp.weathercode == 51 || 53 || 55 || 73 || 71 || 75 || 77 || 85 || 86">
          <path d="M12 8.5V3M12 8.5C11.0717 8.5 10.1815 8.86875 9.52513 9.52513C8.86876 10.1815 8.50001 11.0717 8.50001 12C8.50001 12.9283 8.86876 13.8185 9.52513 14.4749C10.1815 15.1313 11.0717 15.5 12 15.5M12 8.5C12.9283 8.5 13.8185 8.86875 14.4749 9.52513C15.1313 10.1815 15.5 11.0717 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1313 12.9283 15.5 12 15.5M12 21V15.5M10 3H14M10 21H14M8.97001 10.25L4.21001 7.5M19.79 16.5L15.03 13.75M3.21001 9.23L5.21001 5.77M18.79 18.23L20.79 14.77M19.79 7.5L15.03 10.25M8.97001 13.75L4.21001 16.5M20.79 9.23L18.79 5.77M5.21001 18.23L3.21001 14.77" stroke="#288EBA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <!-- облачно -->
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" v-else-if="header.temp.weathercode == 2 || 3 || 45 || 48 || 95">
          <path d="M20.27 18.68C19.28 19.59 17.98 20.09 16.63 20.08H5.54C0.870003 19.74 0.860003 12.94 5.54 12.6H5.59C2.89 5.05999 12.12 1.33999 16 6.02999V6.03999C16.7 6.89999 17.23 8.03999 17.47 9.48999C18.8 9.65999 19.88 10.31 20.65 11.23C22.4 13.3 22.55 16.68 20.27 18.68Z" stroke="#BEBEBE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.26 13.01C6.74 12.75 6.17 12.61 5.59 12.6M15.85 9.92001C16.37 9.66001 16.94 9.52001 17.52 9.51001" stroke="#BEBEBE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.97 8.50001C21.97 9.60001 21.46 10.59 20.65 11.23C19.8516 10.2646 18.7135 9.64189 17.47 9.49001C17.23 8.04001 16.7 6.90001 16 6.04001V6.03001C16.3227 5.70292 16.7073 5.44338 17.1314 5.26654C17.5555 5.08969 18.0105 4.99909 18.47 5.00001C20.4 5.00001 21.97 6.57001 21.97 8.50001Z" stroke="#BEBEBE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <!-- дождь -->
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" v-else>
          <path d="M16.61 20C17.95 20.01 19.24 19.51 20.23 18.61C23.5 15.75 21.75 10.01 17.44 9.47001C15.9 0.13001 2.43001 3.67001 5.62001 12.56" stroke="#288EBA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.28 12.97C6.75 12.7 6.16 12.56 5.57 12.57C0.910002 12.9 0.920002 19.68 5.57 20.01M15.82 9.89001C16.34 9.63001 16.9 9.49001 17.48 9.48001M9.97 20L7.97 22M13.97 20L11.97 22M13.97 16L11.97 18M9.97 16L7.97 18" stroke="#288EBA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </header>
  <header
    v-else
    class="flex h-24 w-full items-center justify-between bg-[#F2F2F2] px-24 text-sm shadow-xl"
  >
    <div class="flex items-center gap-8 text-[40px] font-bold">
      <CustomSvg arrow-right @click="$router.back()" />
      <p>{{ $route.name }}</p>
    </div>
    <p class="opacity-30">dev build</p>
    <div class="flex items-center gap-4 text-[40px]">
      <p>{{ header.time }}</p>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import moment from "moment-timezone";
import "moment/dist/locale/ru";

import { dev } from "../store/devMode";
import CustomPopup from "./CustomPopup.vue";
import CustomSvg from "../components/CustomSvg.vue";

interface Weather {
  temperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
}

interface Header {
  temp?: Weather | undefined;
  time?: string;
  date?: string;
  week?: string;
}

const header = ref<Header>({});
const showDebug = ref<boolean>(false);
const ok = <any>ref({});
const ua = navigator.userAgent;

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
    header.value.temp = res.data.current_weather;
  },
};

for (const i in window) ok.value[i] = window[i];

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
