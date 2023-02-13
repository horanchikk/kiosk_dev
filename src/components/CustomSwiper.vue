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
    class="w-full"
  >
    <swiper-slide class="shadow-md"></swiper-slide>
    <swiper-slide
      v-for="(image, index) in images"
      :key="index"
      :virtualIndex="index"
      class="rounded-lg"
    >
      <img
        :src="image.link"
        :alt="image.alt"
        class="object-cover rounded-lg drop-shadow-xl h-full w-full"
      />
    </swiper-slide>
    <swiper-slide class="shadow-md"></swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/zoom";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Virtual, Autoplay } from "swiper";

interface Image {
  link: string;
  alt: string;
}

const { images = undefined } = defineProps<{
  images: Image[] | undefined;
}>();
</script>

<style>
.swiper-slide {
  padding-right: 20px;
}

.swiper-slide:not(.swiper-slide-next) {
  opacity: 0.5;
}

.swiper-slide-next .img {
  transform: scale(5);
}

.swiper-wrapper {
  gap: 10px;
}
</style>
