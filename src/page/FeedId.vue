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
    <div class="flex flex-col w-full h-full show-up">
      <div
        class="flex flex-col gap-10 bg-[#F2F2F2] rounded-2xl w-full h-full px-10 pm-20 pt-10"
      >
        <div class="flex justify-between gap-5">
          <p class="font-bold text-6xl">{{ feed.title }}</p>
          <p class="text-4xl">{{ feed.date }}</p>
        </div>
        <section
          class="flex flex-col gap-4 items-center pb-14 text-5xl"
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
      `https://mob.kansk-tc.ru/ktc-api/news/id${router.currentRoute.value.params.id}`
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
  border-radius: 10px;
  margin: 5px;
  transform: scale(1);
}

section > img:hover {
  transform: scale(1.2);
  transition: all .5s ease-out;
}
</style>
