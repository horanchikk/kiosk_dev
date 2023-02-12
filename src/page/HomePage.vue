<template>
  <main class="w-full h-full flex flex-col overflow-hidden">
    <div class="w-screen h-[700px] flex items-center justify-center">
      <div class="w-[2900px] h-fit">
        <CustomSwiper
          :images="images"
          class="show"
          style="animation-delay: 200ms"
        />
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
        class="show"
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
        class="show"
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
        class="show"
        style="animation-delay: 300ms"
        >Галерея</CustomButton
      >
      <CustomButton
        big
        :img="{
          src: './map.svg',
          alt: 'Интерактивная карта',
        }"
        class="col-span-3 gap-5 show"
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
        class="show"
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
        class="show"
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
        class="show"
        style="animation-delay: 500ms"
        >Приложение</CustomButton
      >
    </div>
  </main>
</template>

<script setup lang="ts">
import CustomSwiper from "../components/CustomSwiper.vue";
import CustomButton from "../components/CustomButton.vue";

const images = [
  {
    link: "https://sun1.sibirix.userapi.com/impg/abE9Ym2iJ1UWwWaDWO_u623AdifXaY9dhf6w_w/YK9a9SNRRjc.jpg?size=2560x1707&quality=96&sign=286d97992caa574888933b17dd691e35&type=album",
    alt: "Gudkov1",
  },
  {
    link: "https://sun1.sibirix.userapi.com/impg/abE9Ym2iJ1UWwWaDWO_u623AdifXaY9dhf6w_w/YK9a9SNRRjc.jpg?size=2560x1707&quality=96&sign=286d97992caa574888933b17dd691e35&type=album",
    alt: "Gudkov2",
  },
  {
    link: "https://sun1.sibirix.userapi.com/impg/abE9Ym2iJ1UWwWaDWO_u623AdifXaY9dhf6w_w/YK9a9SNRRjc.jpg?size=2560x1707&quality=96&sign=286d97992caa574888933b17dd691e35&type=album",
    alt: "Gudkov3",
  },
  {
    link: "https://sun1.sibirix.userapi.com/impg/abE9Ym2iJ1UWwWaDWO_u623AdifXaY9dhf6w_w/YK9a9SNRRjc.jpg?size=2560x1707&quality=96&sign=286d97992caa574888933b17dd691e35&type=album",
    alt: "Gudkov4",
  },
  {
    link: "https://sun1.sibirix.userapi.com/impg/abE9Ym2iJ1UWwWaDWO_u623AdifXaY9dhf6w_w/YK9a9SNRRjc.jpg?size=2560x1707&quality=96&sign=286d97992caa574888933b17dd691e35&type=album",
    alt: "Gudkov5",
  },
];
</script>
