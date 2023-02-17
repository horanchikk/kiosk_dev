<template>
  <Transition name="showPopup">
    <div
      class="fixed z-[90] w-screen h-screen flex items-center justify-center bg-black bg-opacity-30"
      v-if="show"
    >
      <div
        class="w-5/6 h-5/6 bg-black bg-opacity-80 my-10 rounded-3xl flex flex-col text-3xl text-white"
      >
        <div class="w-full flex justify-end p-5">
          <svg
            @click="show = false"
            xmlns="http://www.w3.org/2000/svg"
            width="90px"
            height="90px"
            viewBox="0 0 24 24"
            class="active:opacity-50 transition-all cursor-pointer"
          >
            <path
              fill="white"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
            />
          </svg>
        </div>
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { show } = defineProps<{
  show: boolean;
}>();
</script>

<style>
.showPopup-enter-active,
.showPopup-leave-active {
  transition: opacity 0.1s ease-out;
}

.showPopup-enter-from,
.showPopup-leave-to {
  opacity: 0;
}
</style>
