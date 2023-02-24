<template>
  <main
    v-if="albums.length === 0"
    class="flex h-full w-full flex-col items-center justify-center"
  >
    <CustomSvg loader />
  </main>
  <main
    v-else
    class="grid h-full w-full grid-cols-2 gap-20 overflow-y-scroll p-10"
  >
    <CustomButton
      v-for="(album, index) in albums"
      :key="index"
      col
      active
      :big="false"
      :link="`/gallery/${album.id}`"
      class="gap-10 rounded-t-lg pb-10 pt-0 shadow-md"
    >
      <img
        :src="album.img"
        :alt="album.title"
        class="h-full w-full rounded-t-xl"
      />
      <p class="w-full px-5 text-center text-6xl font-bold">
        {{ album.title }}
      </p>
      <p class="w-full text-center text-4xl">{{ album.date }}</p>
    </CustomButton>
  </main>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
import { useAxios } from "../../helpers/useAxios";
import CustomSvg from "../../components/CustomSvg.vue";
import CustomButton from "../../components/CustomButton.vue";

interface Album {
  id: number;
  date: string;
  img: string;
  title: string;
}

const albums: Ref<Album[]> = ref([]);

useAxios.GET("gallery/albums").then((r) => {
  albums.value = r;
});
</script>
