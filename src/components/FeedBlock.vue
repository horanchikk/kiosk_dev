<template>
  <div
    v-if="title"
    class="flex flex-col gap-5 rounded-lg p-5 shadow-md active:bg-black active:bg-opacity-10 transition-all show"
  >
    <img :src="img.src" :alt="img.alt" class="max-h-48 object-cover" />
    <div class="flex justify-between">
      <p class="font-bold text-4xl truncate w-5/6 items-center justify-center">
        {{ title }}
      </p>
      <p class="w-1/6 text-xl flex items-center justify-center">{{ date }}</p>
    </div>
    <p class="flex-auto text-2xl" style="max-width: 1000ch">
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

let { title, date, description, img } = defineProps<{
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
