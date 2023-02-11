<template>
  <main class="flex items-center justify-center w-full h-full" v-if="loading">
    <CustomSvg loader width="100" height="100" />
  </main>
  <main
    class="text-4xl overflow-y-scroll"
    style="
      height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;
      perspective: 10px;
    "
    v-else
  >
    <header
      class="relative pb-96 flex justify-start"
      style="z-index: -1; transform-style: preserve-3d"
    >
      <img
        :src="feed.image"
        :alt="feed.title"
        class="w-full h-screen absolute object-cover"
        style="transform: translateZ(-10px) scale(2); z-index: -1"
      />
    </header>
    <div class="flex flex-col w-full">
      <div class="flex flex-col gap-10 bg-[#F2F2F2] rounded-2xl w-full p-10">
        <div class="flex justify-between">
          <p class="font-bold">{{ feed.title }}</p>
          <p>{{ feed.date }}</p>
        </div>
        <section
          class="flex flex-col gap-4 items-center"
          v-html="feed.body"
        ></section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import router from "../router";

import CustomSvg from "../components/CustomSvg.vue";

const feed = ref();
const loading = ref(true);

onMounted(() => {
  axios
    .get(
      `https://mob.kansk-tc.ru/ktc-api/news/id${
        router.currentRoute.value.path.split("/")[3]
      }`
    )
    .then((res) => {
      feed.value = res.data;
      loading.value = false;
    });
});
</script>

<style>
header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  transform-style: preserve-3d;
  z-index: -1;
}

section > br {
  margin: 5px;
}

section > img {
  border-radius: 5px;
  margin: 5px;
}
</style>
