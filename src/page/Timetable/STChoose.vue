<template>
  <main class="w-full h-full flex items-center justify-center">
    <div
      class="grid grid-rows-1 grid-cols-2 w-full justify-between gap-20 p-10"
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
        >Преподаватель</CustomButton
      >
      <CustomButton
        big
        col
        link="/timetable/SChoose"
        :img="{
          src: './book.svg',
          alt: 'Студент',
        }"
        class="py-10 show"
        >Студент</CustomButton
      >
    </div>
  </main>
</template>

<script setup lang="ts">
import CustomButton from "../../components/CustomButton.vue";
</script>
