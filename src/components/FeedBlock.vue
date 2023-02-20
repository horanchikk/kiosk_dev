<template>
  <div
    v-if="title"
    class="show flex flex-col gap-5 rounded-lg bg-white shadow-md transition-all active:bg-black active:bg-opacity-10"
  >
    <img
      :src="img.src"
      :alt="img.alt"
      class="max-h-96 rounded-t-lg object-cover"
    />
    <div class="flex justify-between px-5">
      <p class="w-5/6 items-center justify-center truncate text-5xl font-bold">
        {{ title }}
      </p>
      <p class="flex w-1/6 items-center justify-end text-2xl">{{ date }}</p>
    </div>
    <p class="flex-auto px-5 text-3xl" style="max-width: 1000ch">
      {{ descriptionFixed }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Image {
  src?: string;
  alt?: string;
}

const { title, date, description, img } = defineProps<{
  title: string;
  date: string;
  description: string;
  img: Image;
}>();

const descriptionFixed = ref<string>();

onMounted(() => {
  descriptionFixed.value =
    description.length > 1
      ? description.slice(0, 150) + "..."
      : "Текст отсутствует";
});
</script>
