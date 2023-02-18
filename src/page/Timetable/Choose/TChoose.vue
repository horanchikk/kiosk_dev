<template>
  <main
    class="scrollbar-0 flex h-full w-full flex-col items-center justify-center gap-3 overflow-y-scroll"
    v-if="isLoading"
  >
    <CustomSvg loader width="100" height="100" />
    <div v-if="isFinished" class="text-2xl">
      Возникли проблемы с интернетом, попробуйте позже
    </div>
  </main>
  <main v-else class="flex h-full w-full flex-col items-center gap-10 p-10">
    <section
      class="show-down flex w-4/5 items-center justify-between rounded-full bg-white px-10 shadow-md"
    >
      <input
        type="text"
        class="w-full rounded-bl-full border-0 px-5 py-4 text-3xl text-black outline-0"
        placeholder="Найти преподавателя"
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
    <section class="grid w-full grid-cols-2 gap-5 overflow-y-scroll">
      <CustomButton
        big
        v-for="(teacher, index) in result"
        :key="index"
        @click="$router.push(`/timetable/TTable/${teacher.id}`)"
        class="show py-4 font-normal shadow-lg"
        :style="`animation-delay: ${10 * index}ms`"
        >{{ teacher.name }}</CustomButton
      >
    </section>
  </main>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";

import CustomButton from "../../../components/CustomButton.vue";
import CustomSvg from "../../../components/CustomSvg.vue";

const { data, isLoading, isFinished } = useAxios(
  "https://mob.kansk-tc.ru/ktc-api/teachers-list/0"
);

watch(
  () => data.value,
  () => {
    result.value = data.value.teachers;
  }
);

const text = ref("");
const result = ref();

function find(input) {
  // check, if input is empty
  if (text.value !== "") {
    result.value = data.value.teachers.filter(
      (el) => el.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
    );
  } else {
    result.value = data.value.teachers;
  }
}
</script>
