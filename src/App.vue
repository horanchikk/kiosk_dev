<template>
  <div class="w-screen h-screen bg-[#F2F2F2] flex flex-col">
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
</template>

<script setup lang="ts">
import CustomSvg from "./components/CustomSvg.vue";
import DynamicHeader from "./components/DynamicHeader.vue";
import { useAuth } from "./store/auth";
import router from "./router";

setInterval(() => {
  useAuth().authorized ? undefined : router.push("/");
  if (useAuth().authorized) {
    setInterval(() => {
      useAuth().authorized = false;
    }, 60000);
    console.log("auth");
  } else {
    console.log("un auth");
  }
}, 5000);
</script>

<style></style>
