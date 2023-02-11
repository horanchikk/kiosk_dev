<template>
  <main class="w-full h-full flex flex-col overflow-hidden">
    <div class="w-screen h-[700px] flex items-center justify-center">
      <div class="w-[2900px] h-fit">
        <CustomSwiper :images="images" />
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
        >Новости</CustomButton
      >
      <CustomButton
        big
        col
        :img="{
          src: './calendar.svg',
          alt: 'Расписание',
        }"
        >Расписание</CustomButton
      >
      <CustomButton
        big
        col
        :img="{
          src: './gallery.svg',
          alt: 'Галерея',
        }"
        >Галерея</CustomButton
      >
      <CustomButton
        big
        :img="{
          src: './map.svg',
          alt: 'Интерактивная карта',
        }"
        class="col-span-3 gap-5"
        >Интерактивная карта</CustomButton
      >
      <CustomButton
        big
        col
        :img="{
          src: './QRVK.svg',
          alt: 'QR-код ВКонтакте',
        }"
        >ВКонтакте</CustomButton
      >
      <CustomButton
        big
        col
        :img="{
          src: './QRTG.svg',
          alt: 'QR-код Telegram',
        }"
        >Телеграм</CustomButton
      >
      <CustomButton
        big
        col
        :img="{
          src: './QRGooglePlay.svg',
          alt: 'QR-код на приложение',
        }"
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
