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
  <main v-else class="w-full h-full flex flex-col items-center gap-10 p-10">
    <section
      class="w-4/5 flex items-center px-10 justify-between rounded-full shadow-md bg-white show-down"
    >
      <input
        type="text"
        class="border-0 outline-0 text-black rounded-bl-full text-3xl px-5 py-4 w-full"
        placeholder="Найти группу"
        v-model="text"
        @input="find(text)"
      />
      <svg
        width="36"
        height="36"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_9_3957)">
          <path
            d="M14.6667 14.6667L13.3334 13.3333M7.66671 14C8.49841 14 9.32197 13.8362 10.0904 13.5179C10.8588 13.1996 11.5569 12.7331 12.145 12.145C12.7332 11.5569 13.1997 10.8587 13.5179 10.0903C13.8362 9.32193 14 8.49837 14 7.66666C14 6.83496 13.8362 6.01139 13.5179 5.243C13.1997 4.4746 12.7332 3.77642 12.145 3.18832C11.5569 2.60021 10.8588 2.1337 10.0904 1.81542C9.32197 1.49714 8.49841 1.33333 7.66671 1.33333C5.987 1.33333 4.37609 2.00059 3.18836 3.18832C2.00063 4.37605 1.33337 5.98696 1.33337 7.66666C1.33337 9.34637 2.00063 10.9573 3.18836 12.145C4.37609 13.3327 5.987 14 7.66671 14Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_9_3957">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </section>
    <section class="flex-auto w-full flex flex-col overflow-y-scroll">
      <div
        v-for="(courses, index) in result"
        :key="index"
        class="flex flex-col gap-10 py-5"
      >
        <p class="text-5xl">{{ courses.course }} курс</p>
        <div class="grid grid-cols-3 gap-5">
          <CustomButton
            big
            v-for="(course, index) in courses.groups"
            :key="index"
            @click="$router.push(`/timetable/STable/${course.id}`)"
            class="show text-[35px] font-normal py-4 shadow-lg"
            :style="`animation-delay: ${10 * index}ms`"
            >{{ course.title }}</CustomButton
          >
        </div>
        <div
          v-if="index !== data.length - 1"
          class="w-full h-1 border-[1px] border-black border-opacity-30 rounded-full"
        ></div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";

import CustomButton from "../../../components/CustomButton.vue";
import CustomSvg from "../../../components/CustomSvg.vue";

const { data, isLoading, isFinished } = useAxios(
  "https://mob.kansk-tc.ru/ktc-api/courses/1"
);

watch(
  () => data.value,
  () => {
    result.value = data.value;
  }
);

const text = ref("");
const result = ref();

function find(input) {
  // check, if input is empty
  if (text.value !== "") {
    result.value = [];

    data.value.forEach((datael) => {
      result.value.push({
        course: datael.course,
        groups: datael.groups.filter(
          (el) => el.title.toLowerCase().indexOf(input.toLowerCase()) !== -1
        ),
      });
    });
  } else {
    result.value = data.value;
  }
}
</script>
