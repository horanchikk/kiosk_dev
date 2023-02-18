<template>
  <button
    v-if="!link"
    :class="`flex ${col === '' ? 'flex-col' : ''} ${
      big === ''
        ? 'items-center justify-center gap-4 p-5 text-[2.5rem] font-bold'
        : 'py-2 px-5'
    } cursor-pointer rounded-lg bg-white text-center text-7xl text-black shadow-xl ${
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
        ? 'items-center justify-center gap-4 p-5 text-[2.5rem] font-bold'
        : 'py-2 px-5'
    } cursor-pointer rounded-lg bg-white text-center text-black shadow-xl ${
      active === '' ? 'active:bg-black active:bg-opacity-10' : ''
    } transition-all`"
  >
    <img v-if="img" :src="img.src" :alt="img.alt" />
    <slot />
  </router-link>
</template>

<script setup lang="ts">

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
