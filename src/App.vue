<template>
  <div
    class="flex h-screen w-screen flex-col bg-[#F2F2F2]"
    v-if="dev().devStates.main === false"
  >
    <div class="show-down fixed top-0 left-0 z-50 w-screen">
      <DynamicHeader />
    </div>

    <main class="h-full py-24">
      <router-view />
    </main>

    <footer
      class="fixed left-0 bottom-0 z-50 flex h-24 w-screen justify-end bg-white px-32"
    >
      <div class="flex h-full items-center gap-20">
        <CustomSvg eye />
        <CustomSvg infocircle @click="router.push('/about')" />
      </div>
    </footer>
  </div>
  <div
    v-else-if="dev().devStates.main === undefined"
    class="flex h-screen w-screen items-center justify-center bg-[#F2F2F2] text-[90px] font-bold"
  >
    <svg
      width="200"
      height="200"
      viewBox="0 0 120 30"
      xmlns="http://www.w3.org/2000/svg"
      fill="black"
    >
      <circle cx="15" cy="15" r="15">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="60" cy="15" r="9" fill-opacity="0.3">
        <animate
          attributeName="r"
          from="9"
          to="9"
          begin="0s"
          dur="0.8s"
          values="9;15;9"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="0.5"
          to="0.5"
          begin="0s"
          dur="0.8s"
          values=".5;1;.5"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="105" cy="15" r="15">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
  <div
    v-else
    class="flex h-screen w-screen items-center justify-center bg-[#F2F2F2] text-[90px] font-bold"
  >
    <p>Ведётся активная разработка 😁</p>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import router from "./router";

import CustomSvg from "./components/CustomSvg.vue";
import DynamicHeader from "./components/DynamicHeader.vue";
import CustomPopup from "./components/CustomPopup.vue";

import { dev } from "./store/devMode";
import { useFeed } from "./store/useFeed";
import { useAxios } from "./helpers/useAxios";

interface feedDataType {
  link: string;
  alt: string;
}

const reqWS = new WebSocket("ws://mob.kansk-tc.ru/listen");
const show = ref(false);

axios
  .get("http://mob.kansk-tc.ru/modes")
  .then((res) => {
    dev().devStates = res.data.response;
  })
  .catch((err) => {
    alert(`${err.message} ${err.code}`);
  });

reqWS.onopen = function (e) {
  dev().log("ws", "[open] Соединение установлено");
};

reqWS.onmessage = function (event) {
  dev().devStates = JSON.parse(event.data);
};

reqWS.onclose = function (event) {
  if (event.wasClean) {
    dev().log(
      "ws",
      `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
    );
  } else {
    dev().log("ws", "[close] Соединение прервано");
  }
};

reqWS.onerror = function (error) {
  dev().log("ws", `[error] ${error.AT_TARGET}`);
};

useFeed.images = [];

axios
  .get("http://mob.kansk-tc.ru/ktc-api/gallery/albums/rand?count=10")
  .then((res) => {
    res.data.forEach((el) => {
      const feedData = {} as feedDataType;
      feedData.link = el.img.split("_mini").join("");
      feedData.alt = el.title;
      useFeed.images.push(feedData);
    });
  });

setInterval(() => {
  useFeed.images = [];

  axios
    .get("http://mob.kansk-tc.ru/ktc-api/gallery/albums/rand?count=10")
    .then((res) => {
      res.data.forEach((el) => {
        const feedData = {} as feedDataType;
        feedData.link = el.img.split("_mini").join("");
        feedData.alt = el.title;
        useFeed.images.push(feedData);
      });
    });
}, 3600000);
</script>
