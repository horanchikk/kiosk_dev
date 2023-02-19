<template>
  <main
    v-if="images === undefined"
    class="flex h-full w-full flex-col items-center justify-center"
  >
    <CustomSvg loader />
  </main>
  <main v-else class="flex h-full w-full flex-col overflow-y-scroll">
    <h1 class="h-fit py-10 text-center text-7xl font-bold">
      {{ images.title }}
    </h1>
    <div
      class="grid h-full w-full grid-cols-2 gap-10 self-center justify-self-center px-5"
    >
      <img
        v-for="(image, index) in images.photos"
        :key="index"
        :src="image"
        :alt="image.split('/')[6]"
        class="show h-full w-full rounded-lg"
        :style="`animation-delay: ${10 * index}ms`"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";

import CustomSvg from "../../components/CustomSvg.vue";
import { useAxios } from "../../helpers/useAxios";
import router from "../../router";

interface Images {
  title: string;
  photos: string[];
}

const images: Ref<Images | undefined> = ref(undefined);

useAxios
  .GET(`gallery/album/${router.currentRoute.value.params.id}`)
  .then((r) => (images.value = r));
</script>
