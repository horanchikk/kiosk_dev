<template>
  <main class="flex h-full w-full items-center justify-center">
    <div
      class="grid w-full grid-cols-2 grid-rows-1 justify-between gap-20 p-10"
    >
      <CustomButton
        big
        col
        link="/timetable/TChoose"
        :img="{
          src: './teacher.svg',
          alt: 'Преподаватель',
        }"
        class="show"
        ><p class="text-6xl">Преподаватель</p></CustomButton
      >
      <CustomButton
        big
        col
        link="/timetable/SChoose"
        :img="{
          src: './book.svg',
          alt: 'Студент',
        }"
        class="show py-10"
        ><p class="text-6xl">Студент</p></CustomButton
      >
    </div>
  </main>
</template>

<script setup lang="ts">
import CustomButton from "../../components/CustomButton.vue";
</script>
