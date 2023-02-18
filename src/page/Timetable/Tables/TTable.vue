<template>
  <main
    class="w-full h-full flex flex-col items-center justify-center overflow-y-scroll gap-3 scrollbar-0"
    v-if="isLoading"
  >
    <CustomSvg loader width="100" height="100" />
    <div v-if="isFinished" class="text-2xl">
      Возникли проблемы с интернетом, попробуйте позже
    </div>
  </main>
  <main v-else class="w-full h-full">
    <div v-if="weekIsEmpty(data.week)" class="w-full h-full flex flex-col p-10 overflow-y-scroll">
      <section
      class="flex flex-col mb-10 gap-4"
      v-for="(day, indexDay) in data.week"
      :key="indexDay"
    >
      <p class="text-3xl font-bold">{{ dayOfWeek(day.title) }}</p>
      <div
        class="flex flex-col bg-white shadow-lg rounded-md gap-2 text-3xl p-5"
      >
        <div
          v-for="(lesson, indexLesson) in day.lessons"
          :key="indexLesson"
        >
          <div v-if="lesson.title !== ''" class="w-full h-full flex justify-between p-3 font-bold">
            <p class="w-1/4 flex gap-3 items-center">
              <p>{{ indexLesson + 1 }}</p>
            </p>
            <p class="w-2/4 flex text-center items-center justify-center">
              {{ lesson.title }}
            </p>
            <div class="w-1/4 flex flex-col gap-2 items-end justify-center">
              <p>{{ lesson.group }}</p>
              <p class="font-normal">{{ lesson.classroom }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="w-full h-full text-8xl font-bold flex items-center justify-center">
    <p>🎊 Занятий на неделе нет 🎊</p>
  </div>

  </main>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";

import { useAxios } from "@vueuse/integrations/useAxios";

import router from "../../../router";
import dayOfWeek from "../../../helpers/dayOfWeek";
import CustomSvg from "../../../components/CustomSvg.vue";
import { computed } from "@vue/reactivity";

const { isFinished, isLoading, data } = useAxios(
  `https://mob.kansk-tc.ru/ktc-api/teacher-timetable/1/${router.currentRoute.value.params.id}`
);

function weekIsEmpty(week: any) {
  const emptyLessons: any[] = []
  week.forEach(day => {
    day.lessons.forEach(lesson => {
      lesson.title !== '' ? emptyLessons.push(lesson) : undefined
    });
  });
  return emptyLessons.length > 0 ? true : false;
};

watch(
  () => data.value,
  () => {
    console.log(data.value);
  }
);
</script>
