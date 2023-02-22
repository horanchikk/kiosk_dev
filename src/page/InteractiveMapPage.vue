<template>
  <div class="flex h-full w-full flex-col">
    <main
      class="my-20 flex h-full w-full flex-auto items-center justify-center overflow-y-scroll"
    >
      <div class="relative h-full" v-show="floor === 2">
        <section
          class="absolute flex flex h-[680px] w-full items-center justify-between p-5"
        >
          <div class="flex w-1/2 justify-center">
            <!--            <MapMark>3.10</MapMark>-->
          </div>
          <div class="flex w-1/2 justify-center">
            <!--            <MapMark>3.9</MapMark>-->
          </div>
        </section>

        <img src="../assets/floors/2floor.svg" class="h-full" alt="2 floor" />
      </div>

      <div class="relative h-full" v-show="floor === 3">
        <section
          class="absolute flex flex h-[670px] w-full items-center justify-between p-5"
        >
          <div class="flex w-1/2 justify-center">
            <MapMark>3.9</MapMark>
          </div>
          <div class="flex w-1/2 justify-center">
            <MapMark>3.10</MapMark>
          </div>
        </section>

        <img src="../assets/floors/3floor.svg" class="h-full" alt="3 floor" />
      </div>

      <div class="relative h-full" v-show="floor === 4">
        <div></div>
        <img src="../assets/floors/4floor.svg" class="h-full" alt="4 floor" />
      </div>
    </main>
    <footer class="grid h-96 w-full grid-cols-4 grid-rows-1 gap-28 p-20 px-36">
      <CustomButton
        big
        active
        @click="floor = 1"
        :class="`show-left ${floor === 1 ? 'bg-black bg-opacity-10' : ''}`"
        style="animation-delay: 100ms"
        >1 этаж
      </CustomButton>
      <CustomButton
        big
        active
        @click="floor = 2"
        :class="`show-left ${floor === 2 ? 'bg-black bg-opacity-10' : ''}`"
        style="animation-delay: 200ms"
        >2 этаж
      </CustomButton>
      <CustomButton
        big
        active
        @click="floor = 3"
        style="animation-delay: 300ms"
        :class="`show-left ${floor === 3 ? 'bg-black bg-opacity-10' : ''}`"
        >3 этаж
      </CustomButton>
      <CustomButton
        big
        active
        @click="floor = 4"
        :class="`show-left ${floor === 4 ? 'bg-black bg-opacity-10' : ''}`"
        style="animation-delay: 400ms"
        >4 этаж
      </CustomButton>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import MapMark from "../components/mapMark.vue";
import CustomButton from "../components/CustomButton.vue";

const floor = ref(3);
</script>
