<template>
  <div
    class="w-full h-full flex items-center justify-center overflow-y-scroll gap-3 scrollbar-0"
    v-if="loading"
  >
    <CustomSvg loader width="100" height="100" />
  </div>
  <div
    class="flex flex-col w-full h-full overflow-y-scroll px-5 gap-3 scrollbar-0"
    v-else
  >
    <FeedBlock
      v-for="(theme, index) in news"
      :key="index"
      :title="theme.title"
      :date="theme.date"
      :description="theme.body"
      :img="{
        alt: theme.title,
        src: theme.image,
      }"
      @click="$router.push(`/news/id/${theme.id}`)"
    />
  </div>
</template>

<script setup lang="ts">
import FeedBlock from "../components/FeedBlock.vue";
import CustomSvg from "../components/CustomSvg.vue";

import axios from "axios";
import { onMounted, ref } from "vue";

interface News {
  id: number;
  title: string;
  image: string;
  body: string;
  date: string;
}

const loading = ref<boolean>(true);
const news = ref<News[]>();

onMounted(() => {
  axios.get("https://mob.kansk-tc.ru/ktc-api/news/").then((res) => {
    news.value = res.data.news;
    loading.value = false;
  });
});
</script>
