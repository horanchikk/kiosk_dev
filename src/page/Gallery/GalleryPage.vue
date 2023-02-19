<template>
  <main
    v-if="albums.length === 0"
    class="flex h-full w-full flex-col items-center justify-center"
  >
    <CustomSvg loader />
  </main>
  <main
    v-else
    class="grid h-full w-full grid-cols-2 gap-20 overflow-y-scroll p-10 font-bold"
  >
    <CustomButton
      v-for="(album, index) in albums"
      :key="index"
      col
      active
      :link="`/gallery/${album.id}`"
      class="gap-4 rounded-lg px-0 pb-10 pt-0 shadow-md"
    >
      <img
        :src="album.img"
        :alt="album.title"
        class="h-full w-full rounded-t-xl"
      />
      <p class="w-full text-center text-7xl">
        {{ album.title }}
      </p>
      <p class="w-full text-center text-7xl">{{ album.date }}</p>
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
  console.log(r);
});
</script>
