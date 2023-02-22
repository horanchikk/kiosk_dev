<template>
  <Transition name="opacity" tag="div">
    <div v-show="info.state" class="fixed z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-40">
      <div class="bg-white rounded-lg shadow-lg px-10 py-5 flex flex-col text-5xl gap-10 text-center">
        <p class="font-extrabold">{{ info.name }}</p>
        <p>{{ info.about }}</p>
      </div>
    </div>
  </Transition>

  <div class="flex h-full w-full flex-col">
    <main
      class="my-20 flex h-full w-full flex-auto items-center justify-center overflow-y-scroll"
    >
      <div class="relative h-full" v-show="floor === 2">
        <section
          class="absolute flex h-[680px] w-full items-center justify-between p-5"
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

      <div class="relative h-full flex flex-col" v-show="floor === 3">
        <div
          class="absolute flex flex-col h-full w-full p-5"
        >

          <section class="h-[620px] w-full grid grid-rows-1 grid-cols-2">
            <div class="flex items-center justify-center">
              <MapMark @click="showInfo('3.9', 'ИТ решения на платформе 1С: предприятие 8.1')">3.9</MapMark>
            </div>
            <div class="flex items-center justify-center">
              <MapMark @click="showInfo('3.10', 'Программные решения для бизнеса')">3.10</MapMark>
            </div>
          </section>
          
          <section class="h-[330px] w-full grid grid-cols-2 grid-rows-1">
            <div class="w-full h-full grid grid-cols-1 grid-rows-2">
              <MapMark class="self-center place-self-center" @click="showInfo('3.8', 'Заместитель директора по АХР')">3.8</MapMark>
              <MapMark class="self-center place-self-center" @click="showInfo('3.6', 'Начальник отдела АСУ')">3.6</MapMark>
            </div>
            <MapMark class="self-end place-self-end mx-20 my-4">ПЛ</MapMark>
          </section>

          <section class="h-[560px] w-full grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" @click="showInfo('3.5', 'Веб-дизайн и разработка')">3.5</MapMark>
            <MapMark class="place-self-center self-end">
              Зона отдыха
            </MapMark>
          </section>

          <section class="h-[450px] w-full grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" @click="showInfo('3.4', 'Методический кабинет')">3.4</MapMark>
            <div class="self-end place-self-center my-[50px] flex justify-end px-20 w-full">
              <MapMark>ЛЛ</MapMark>
            </div>
          </section>

          <section class="h-[200px] w-full grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" @click="showInfo('3.3', 'Заместитель директора по УПР')">3.3</MapMark>
          </section>

          <section class="h-[620px] w-full grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" @click="showInfo('3.2', 'Разработка мобильных приложений')">3.2</MapMark>
            <MapMark class="self-center place-self-center" @click="showInfo('3.1', 'Разработка игр и мультимедийных приложений')">3.1</MapMark>
          </section>

          <section class="flex-auto w-full grid grid-cols-2 grid-rows-1">
            <div></div>
            <MapMark class="self-center place-self-center" @click="showInfo('3.2.1', 'Комната для вебинаров')">3.2.1</MapMark>
          </section>

        </div>

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
import { ref, reactive } from "vue";

import MapMark from "../components/mapMark.vue";
import CustomButton from "../components/CustomButton.vue";

const floor = ref<number>(3);
const info = reactive<{
  state: boolean,
  name: string,
  about: string
}>({
  state: false,
  name: "",
  about: ""
})

function showInfo(name: string, about:string): void {
  info.name = name;
  info.about = about;
  info.state = true;

  setTimeout(() => {
    info.state = false;
  }, 3500);
}
</script>
