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
      class="flex h-full w-full flex-auto items-center justify-center overflow-y-scroll"
    >    
      <!-- Floor 1 -->
      <!-- Section 1 -->
      <div class="relative h-full flex flex-col items-center justify-center" v-show="floor === 11">
        <p class="text-6xl font-bold">Необходим план в формате .svg</p>
      </div>

      <!-- Section 2 -->
      <div class="relative h-full flex flex-col items-center justify-center" v-show="floor === 12">
        <p class="text-6xl font-bold">Необходим план в формате .svg</p>
      </div>

      <!-- Floor 2 -->
      <!-- Section 1 -->
      
      <div class="relative h-full flex flex-col" v-show="floor === 21">
        <div
          class="absolute flex flex-col h-full w-full py-24"
        >
          <section class="h-[620px] w-full grid grid-rows-1 grid-cols-2">
            <div class="flex items-center justify-center">
              <MapMark unclickable>2.9</MapMark>
            </div>
            <div class="flex items-center justify-center">
              <MapMark unclickable>2.10</MapMark>
            </div>
          </section>
          
          <section class="h-[330px] w-full grid grid-cols-2 grid-rows-1">
            <div class="w-full h-full grid grid-cols-1 grid-rows-2">
              <MapMark class="self-center place-self-center" @click="showInfo('2.8', 'Юрист')">2.8</MapMark>
              <MapMark class="self-center place-self-center" @click="showInfo('2.7', 'Заместитель директора по УР')">2.7</MapMark>
            </div>
            <MapMark class="self-end place-self-end mx-20 my-4" unclickable>ПЛ</MapMark>
          </section>

          <section class="h-[320px] w-full grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" @click="showInfo('2.6', 'Преподавательская')">2.6</MapMark>
            <MapMark class="place-self-center self-end" unclickable>
              Зона отдыха
            </MapMark>
          </section>

          <section class="h-[340px] w-full grid grid-cols-2 grid-rows-1">
            <div class="h-full w-full grid grid-cols-1 grid-rows-2">
              <div class="w-full h-full flex items-center justify-center font-bold text-4xl text-center">
                <p>Заместитель директора <br />по УР</p>
              </div>
              <MapMark class="self-center place-self-center" @click="showInfo('2.5', 'Приёмная директора')">2.5</MapMark>
            </div>
            <div></div>
          </section>

          <section class="h-[330px] w-full grid grid-cols-2 grid-rows-1">
            <div class="w-full h-full flex items-center justify-center font-bold text-4xl text-center">
                <p>Директор</p>
            </div>
            <div class="w-full h-full flex items-center justify-center font-bold text-4xl text-center">
              <MapMark class="self-center place-self-center" @click="showInfo('2.5', 'Методический кабинет')">2.5</MapMark>
            </div>
          </section>

          <section class="h-[160px] w-full grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" @click="showInfo('2.4', 'Учебная часть')">2.4</MapMark>
            <MapMark class="self-center place-self-center" unclickable>ЛП</MapMark>
          </section>

          <section class="h-[220px] w-full grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" @click="showInfo('2.3', 'Заведующий отделением')">2.3</MapMark>

          </section>

          <section class="flex-auto grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" unclickable >2.2</MapMark>
            <MapMark class="self-center place-self-center" unclickable >2.1</MapMark>
          </section>

        </div>

        <img src="../assets/floors/2floor.svg" class="h-full" alt="2 floor" />
      </div>

      <!-- Section 2 -->
      <div class="relative h-full flex flex-col items-center justify-center" v-show="floor === 22">
        <div
          class="absolute flex flex-col h-full w-full py-48"
        >
          <section class="h-[740px] w-full flex items-center justify-center">
              <MapMark unclickable>Актовый зал</MapMark>
          </section>
          <section class="h-[300px] w-full grid grid-rows-1 grid-cols-2">
              <div class="w-full h-full flex items-center justify-end">
                <MapMark unclickable>Кабинет робототехники</MapMark>
              </div>
              <div></div>
          </section>
          <section class="h-[300px] w-full"></section>
          <section class="flex-auto flex items-center justify-center">
            <MapMark unclickable>Спортивный зал</MapMark>
          </section>
        </div>
        <img src="../assets/floors/2floorGYM.svg" class="h-full" alt="2 floor" />
      </div>
      
      <!-- Floor 3 -->

      <div class="relative h-full flex flex-col" v-show="floor === 3">
        <div
          class="absolute flex flex-col h-full w-full py-24"
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
            <MapMark class="self-end place-self-end mx-20 my-4" unclickable>ПЛ</MapMark>
          </section>

          <section class="h-[560px] w-full grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" @click="showInfo('3.5', 'Веб-дизайн и разработка')">3.5</MapMark>
            <MapMark unclickable class="place-self-center self-end">
              Зона отдыха
            </MapMark>
          </section>

          <section class="h-[450px] w-full grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" @click="showInfo('3.4', 'Методический кабинет')">3.4</MapMark>
            <div class="self-end place-self-center my-[50px] flex justify-end px-20 w-full">
              <MapMark unclickable>ЛЛ</MapMark>
            </div>
          </section>

          <section class="h-[200px] w-full grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" @click="showInfo('3.3', 'Заместитель директора по УПР')">3.3</MapMark>
          </section>

          <section class="h-[620px] w-full grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" @click="showInfo('3.2', 'Разработка мобильных приложений')">3.2</MapMark>
            <MapMark class="self-center place-self-center" @click="showInfo('3.1', 'Разработка игр и мультимедийных приложений')">3.1</MapMark>
          </section>

          <section class="flex-auto w-full grid grid-cols-2 grid-rows-1 mt-28">
            <div></div>
            <MapMark class="self-center place-self-center" @click="showInfo('3.2.1', 'Комната для вебинаров')">3.2.1</MapMark>
          </section>

        </div>

        <img src="../assets/floors/3floor.svg" class="h-full" alt="3 floor" />
      </div>

      <!-- Floor 4 -->

      <div class="relative h-full" v-show="floor === 4">
        <div
          class="absolute flex flex-col h-full w-full py-28"
        >
        <section class="h-[660px] w-full grid grid-rows-1 grid-cols-2">
            <div class="flex items-center justify-center">
              <MapMark unclickable>4.7</MapMark>
            </div>
            <div class="flex items-center justify-center">
              <MapMark unclickable>4.8</MapMark>
            </div>
          </section>
          
          <section class="h-[330px] w-full grid grid-cols-2 grid-rows-1">
            <div class="w-full h-full grid grid-cols-1 grid-rows-2">
              <div></div>
              <MapMark class="self-center place-self-center" unclickable>4.5</MapMark>
            </div>
            <MapMark class="self-end place-self-end mx-20 my-4" unclickable>ПЛ</MapMark>
          </section>

          <section class="h-[480px] w-full grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" unclickable>4.4</MapMark>
            <MapMark class="self-center mx-48 my-24" unclickable>4.9</MapMark>
          </section>

          <section class="h-[650px] w-full grid grid-cols-2 grid-rows-2">
            <MapMark class="self-center place-self-center row-span-2" unclickable>4.3</MapMark>
            <MapMark class="self-center place-self-end mx-16" @click="showInfo('4.10', 'Отдел АСУ')">4.10</MapMark>
            <MapMark class="self-end place-self-end my-28 mx-20" unclickable>ЛЛ</MapMark>
            <div></div>
          </section>

          <section class="flex-auto w-full grid grid-cols-2 grid-rows-1">
            <MapMark class="self-center place-self-center" unclickable>4.2</MapMark>
            <MapMark class="self-center place-self-center" unclickable>4.1</MapMark>
          </section>

        </div>
        <img src="../assets/floors/4floor.svg" class="h-full" alt="4 floor" />
      </div>
    </main>
    <footer class="grid h-96 w-full grid-cols-4 grid-rows-1 gap-28 p-20 px-36">
      <div class="w-full h-full relative">
        <CustomButton
        big
        :active="false"
        @click="showSections.floor = 1; showSections.state = true;"
        :class="`show-left w-full h-full ${showSections.floor === 1 && showSections.state === true ? 'pointer-events-none' : 'pointer-events-auto'} z-30 ${floor === 11 || floor === 12 ? 'bg-blue-600 bg-opacity-10' : ''}`"
        style="animation-delay: 200ms"
        >1 этаж
        
      </CustomButton>
        <div v-show="showSections.floor === 1 && showSections.state" class="absolute bg-white pointer-events-auto z-40 w-full h-full -top-48 -mt-6 show-up left-0 grid grid-cols-1 grid-rows-2">
          <CustomButton :class="`text-[2.5rem] w-full h-full flex items-center justify-center shadow-none ${floor === 11 ? 'bg-blue-600 bg-opacity-10' : ''}`" @click="showSections.state = false; floor = 11">1 корпус</CustomButton>
          <CustomButton :class="`text-[2.5rem] w-full h-full flex items-center justify-center shadow-none ${floor === 12 ? 'bg-blue-600 bg-opacity-10' : ''}`" @click="showSections.state = false; floor = 12">2 корпус</CustomButton>
        </div>
      </div>

      <div class="w-full h-full relative">
        <CustomButton
        big
        :active="false"
        @click="showSections.floor = 2; showSections.state = true;"
        :class="`show-left w-full h-full ${showSections.floor === 2 && showSections.state === true ? 'pointer-events-none' : 'pointer-events-auto'} z-30 ${floor === 21 || floor === 22 ? 'bg-blue-600 bg-opacity-10' : ''}`"
        style="animation-delay: 200ms"
        >2 этаж
        
      </CustomButton>
        <div v-show="showSections.floor === 2 && showSections.state" class="absolute bg-white pointer-events-auto z-40 w-full h-full -top-48 -mt-6 show-up left-0 grid grid-cols-1 grid-rows-2">
          <CustomButton :class="`text-[2.5rem] w-full h-full flex items-center justify-center shadow-none ${floor === 21 ? 'bg-blue-600 bg-opacity-10' : ''}`" @click="showSections.state = false; floor = 21;">1 корпус</CustomButton>
          <CustomButton :class="`text-[2.5rem] w-full h-full flex items-center justify-center shadow-none ${floor === 22 ? 'bg-blue-600 bg-opacity-10' : ''}`" @click="showSections.state = false; floor = 22;">2 корпус</CustomButton>
        </div>
      </div>
     
      <CustomButton
        big
        active
        @click="floor = 3; showSections.state = false"
        style="animation-delay: 300ms"
        :class="`show-left ${floor === 3 ? 'bg-blue-600 bg-opacity-10' : ''}`"
        >3 этаж
      </CustomButton>
      <CustomButton
        big
        active
        @click="floor = 4; showSections.state = false"
        :class="`show-left ${floor === 4 ? 'bg-blue-600 bg-opacity-10' : ''}`"
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

const showSections = reactive<{
  state: boolean,
  floor: number
}>({
  state: false,
  floor: 2
})

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
