<template>
  <swiper
      :modules="[Virtual, Autoplay]"
      :slides-per-view="3"
      :space-between="1"
      :zoom="true"
      :css-mode="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      class="w-full h-full"
  >
      <swiper-slide></swiper-slide>
      <swiper-slide v-for="(image, index) in images" :key="index" :virtualIndex="index" class="rounded-[30px]">
        <img :src="image.link" :alt="image.alt" class="object-cover rounded-[30px]">
      </swiper-slide>
    <swiper-slide></swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import {Virtual, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/vue";

import 'swiper/css';
import "swiper/css/zoom";

interface Image {
  link: string,
  alt: string,
}

const {
  images = undefined
} = defineProps<{
  images: Image[] | undefined
}>()
</script>

<style>
.swiper-slide {
  padding-right: 20px;
}

.swiper-slide:not(.swiper-slide-next) {
  opacity:0.5;
}

.swiper-slide-next .img {
  transform: scale(5);
}

.swiper-wrapper {
  gap: 10px;
}
</style>
