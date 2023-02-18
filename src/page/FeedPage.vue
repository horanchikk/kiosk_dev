<template>
  <div
    class="scrollbar-0 flex h-full w-full flex-col items-center justify-center gap-3 overflow-y-scroll"
    v-if="isLoading"
  >
    <CustomSvg loader width="100" height="100" />
    <div v-if="isFinished" class="text-2xl">
      Проблемы с интернетом, пытаемся загрузиться из кэша...
    </div>
  </div>
  <div
    class="scrollbar-0 flex h-full w-full flex-col gap-3 overflow-y-scroll px-5"
    v-else
  >
    <FeedBlock
      v-for="(theme, index) in useFeed.feed.current"
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
import { onMounted, ref, watch } from "vue";
import axios from "axios";

import FeedBlock from "../components/FeedBlock.vue";
import CustomSvg from "../components/CustomSvg.vue";

import { useFeed } from "../store/useFeed";
import { useAxios } from "@vueuse/integrations/useAxios";

const { data, isLoading, isFinished, error } = useAxios(
  "https://mob.kansk-tc.ru/ktc-api/news/"
);

watch(
  () => data.value,
  () => {
    useFeed.updateFeed(data.value.news);
  }
);

watch(
  () => error.value,
  () => {
    setTimeout(() => {
      isLoading.value = true;
    });
  }
);

setTimeout(() => {
  if (useFeed.feed.current === undefined) {
    useFeed.updateFeed(undefined);
    isLoading.value = false;
  }
}, 5000);
</script>
