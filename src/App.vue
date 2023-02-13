<template>
  <div
    class="w-screen h-screen bg-[#F2F2F2] flex flex-col"
    v-if="!devMode().devStates.main"
  >
    <div class="fixed top-0 left-0 z-50 w-screen show-down">
      <DynamicHeader />
    </div>

    <main class="h-full py-24">
      <router-view />
    </main>

    <footer
      class="h-24 w-screen fixed z-50 left-0 bottom-0 flex justify-end px-32 bg-white"
    >
      <div class="flex gap-20 h-full items-center">
        <CustomSvg eye />
        <CustomSvg infocircle />
      </div>
    </footer>
  </div>
  <div
    v-else
    class="w-screen h-screen bg-[#F2F2F2] flex items-center justify-center font-bold text-[90px]"
  >
    <p>Ведутся технические работы ☠</p>
    <p class="text-sm font-bold">ethosa lox</p>
  </div>
</template>

<script setup lang="ts">
import CustomSvg from "./components/CustomSvg.vue";
import DynamicHeader from "./components/DynamicHeader.vue";
import axios from "axios";
import { devMode } from "./store/devMode";

setInterval(() => {
  const data = axios.get("http://mob.kansk-tc.ru/modes");
  data.then((res) => {
    devMode().devStates = res.data.response;
  });
}, 2500);
</script>

<style></style>
