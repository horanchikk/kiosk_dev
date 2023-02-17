<template>
  <button
    v-if="!link"
    :class="`flex ${col === '' ? 'flex-col' : ''} ${
      big === ''
        ? 'p-5 text-[2.5rem] justify-center items-center font-bold gap-4'
        : 'py-2 px-5'
    } text-black bg-white text-7xl shadow-xl text-center rounded-lg cursor-pointer ${
      active === '' ? 'active:bg-black active:bg-opacity-10' : ''
    } transition-all`"
  >
    <img v-if="img" :src="img.src" :alt="img.alt" />
    <slot />
  </button>
  <router-link
    v-else
    :to="link"
    :class="`flex ${col === '' ? 'flex-col' : ''} ${
      big === ''
        ? 'p-5 text-[2.5rem] justify-center items-center font-bold gap-4'
        : 'py-2 px-5'
    } text-black bg-white shadow-xl text-center rounded-lg cursor-pointer ${
      active === '' ? 'active:bg-black active:bg-opacity-10' : ''
    } transition-all`"
  >
    <img v-if="img" :src="img.src" :alt="img.alt" />
    <slot />
  </router-link>
</template>

<script setup lang="ts">
import router from "../router";

interface Image {
  src?: string;
  alt?: string;
}

const {
  big,
  col,
  img,
  active = true,
  link = "",
} = defineProps<{
  big?: string | boolean;
  col?: string | boolean;
  active?: string | boolean;
  link?: string;
  img?: Image;
}>();
</script>
