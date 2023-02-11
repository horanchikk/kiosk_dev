<template>
  <button
    :class="`flex ${col === '' ? 'flex-col' : ''} ${
      big === ''
        ? 'p-5 text-[2.5rem] justify-center items-center font-bold gap-4'
        : 'py-2 px-5'
    } text-black bg-white shadow-xl text-center rounded-md`"
  >
    <img v-if="img" :src="img.src" :alt="img.alt" />
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Image {
  src?: string;
  alt?: string;
}

const { big, col, img } = defineProps<{
  big?: string | boolean;
  col?: string | boolean;
  img?: Image;
}>();
</script>
