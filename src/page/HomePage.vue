<template>
  <main class="w-full h-full flex flex-col gap-5 py-5 overflow-hidden">
    <div class="w-screen h-[1500px] flex gap-5 items-center justify-center">
      <div class="w-[5800px] h-full">
        <CustomSwiper
          :images="useFeed.images"
          class="show h-full"
          style="animation-delay: 200ms"
          v-show="useFeed.images.length > 0"
        />
        <div
          v-show="useFeed.images.length <= 0"
          class="show h-full w-full flex items-center justify-center"
        >
          <svg
            width="200"
            height="220"
            viewBox="0 0 120 30"
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
          >
            <circle cx="15" cy="15" r="15">
              <animate
                attributeName="r"
                from="15"
                to="15"
                begin="0s"
                dur="0.8s"
                values="15;9;15"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                from="1"
                to="1"
                begin="0s"
                dur="0.8s"
                values="1;.5;1"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="60" cy="15" r="9" fill-opacity="0.3">
              <animate
                attributeName="r"
                from="9"
                to="9"
                begin="0s"
                dur="0.8s"
                values="9;15;9"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                from="0.5"
                to="0.5"
                begin="0s"
                dur="0.8s"
                values=".5;1;.5"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="105" cy="15" r="15">
              <animate
                attributeName="r"
                from="15"
                to="15"
                begin="0s"
                dur="0.8s"
                values="15;9;15"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                from="1"
                to="1"
                begin="0s"
                dur="0.8s"
                values="1;.5;1"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </div>
    </div>
    <div class="flex-auto grid grid-cols-3 gap-10 p-5">
      <CustomButton
        big
        col
        :img="{
          src: './book.svg',
          alt: 'Новости',
        }"
        link="/feed"
        class="show text-[90px]"
        style="animation-delay: 300ms"
        >Новости</CustomButton
      >
      <CustomButton
        big
        col
        :img="{
          src: './calendar.svg',
          alt: 'Расписание',
        }"
        link="/timetable/STChoose"
        class="show text-[90px]"
        style="animation-delay: 300ms"
        >Расписание</CustomButton
      >
      <CustomButton
        big
        col
        :img="{
          src: './gallery.svg',
          alt: 'Галерея',
        }"
        class="show text-[90px]"
        style="animation-delay: 300ms"
        >Галерея</CustomButton
      >
      <CustomButton
        big
        col
        :img="{
          src: './map.svg',
          alt: 'Интерактивная карта',
        }"
        class="col-span-3 gap-5 show text-[90px]"
        style="animation-delay: 400ms"
        >Интерактивная карта</CustomButton
      >
      <CustomButton
        big
        col
        :img="{
          src: './QRVK.svg',
          alt: 'QR-код ВКонтакте',
        }"
        class="show text-[90px]"
        style="animation-delay: 500ms"
        >ВКонтакте</CustomButton
      >
      <CustomButton
        big
        col
        :img="{
          src: './QRMainSite.svg',
          alt: 'QR-код сайт',
        }"
        class="show text-[90px]"
        style="animation-delay: 500ms"
        >Наш сайт</CustomButton
      >
      <CustomButton
        big
        col
        :img="{
          src: './QRGooglePlay.svg',
          alt: 'QR-код на приложение',
        }"
        class="show text-[90px]"
        style="animation-delay: 500ms"
        >Приложение</CustomButton
      >
    </div>
  </main>
</template>

<script setup lang="ts">
import CustomSwiper from "../components/CustomSwiper.vue";
import CustomButton from "../components/CustomButton.vue";
import { useFeed } from "../store/useFeed";
</script>
