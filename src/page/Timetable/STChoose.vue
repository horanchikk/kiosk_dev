<template>
  <main class="flex h-full w-full items-center justify-center">
    <div
      class="grid w-full grid-cols-1 grid-rows-2 justify-between gap-20 mx-36"
    >
      <CustomButton
        big
        col
        link="/timetable/TChoose"
        :img="{
          src: './teacher.svg',
          alt: 'Преподаватель',
        }"
        class="show py-12"
        ><p class="pb-3 text-6xl">Преподаватель</p></CustomButton
      >
      <CustomButton
        big
        col
        link="/timetable/SChoose"
        :img="{
          src: './book.svg',
          alt: 'Студент',
        }"
        class="show py-12"
        ><p class="pb-3 text-6xl">Студент</p></CustomButton
      >
    </div>
  </main>
</template>

<script setup lang="ts">
import CustomButton from "../../components/CustomButton.vue";
</script>
