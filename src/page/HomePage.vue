<template>
  <main class="flex h-full w-full flex-col gap-5 overflow-hidden py-5">
    <div class="flex h-[1500px] w-screen items-center justify-center gap-5">
      <div class="h-full w-[5800px]">
        <CustomSwiper
          :images="useFeed.images"
          class="show h-full"
          style="animation-delay: 200ms"
          v-show="useFeed.images.length > 0"
        />
        <div
          v-show="useFeed.images.length <= 0"
          class="show flex h-full w-full items-center justify-center"
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
    <div class="grid flex-auto grid-cols-3 gap-10 p-5">
      <CustomButton
        big
        col
        :img="{
          src: './book.svg',
          alt: '??????????????',
        }"
        link="/feed"
        class="show text-[90px]"
        style="animation-delay: 300ms"
        >??????????????
      </CustomButton>
      <CustomButton
        big
        col
        :img="{
          src: './calendar.svg',
          alt: '????????????????????',
        }"
        link="/timetable/STChoose"
        class="show text-[90px]"
        style="animation-delay: 300ms"
        >????????????????????
      </CustomButton>
      <CustomButton
        big
        col
        :img="{
          src: './gallery.svg',
          alt: '??????????????',
        }"
        link="/gallery"
        class="show text-[90px]"
        style="animation-delay: 300ms"
        >??????????????
      </CustomButton>
      <CustomButton
        big
        col
        :img="{
          src: './map.svg',
          alt: '?????????????????????????? ??????????',
        }"
        link="/interactive"
        class="show col-span-2 gap-5 text-[90px]"
        style="animation-delay: 400ms"
        >?????????????????????????? ??????????
      </CustomButton>
      <CustomButton
        big
        col
        :img="{
          src: './document.svg',
          alt: '??????????????????',
        }"
        link="/documents"
        class="show text-[90px]"
        style="animation-delay: 300ms"
        >??????????????????
      </CustomButton>
      <CustomButton
        big
        col
        :hover="false"
        :img="{
          src: './QRVK.svg',
          alt: 'QR-?????? ??????????????????',
        }"
        class="show text-[90px]"
        style="animation-delay: 500ms"
        >??????????????????
      </CustomButton>
      <CustomButton
        big
        col
        :hover="false"
        :img="{
          src: './QRMainSite.svg',
          alt: 'QR-?????? ????????',
        }"
        class="show text-[90px]"
        style="animation-delay: 500ms"
        >?????? ????????
      </CustomButton>
      <CustomButton
        big
        col
        :hover="false"
        :img="{
          src: './QRGooglePlay.svg',
          alt: 'QR-?????? ???? ????????????????????',
        }"
        class="show text-[90px]"
        style="animation-delay: 500ms"
        >????????????????????
      </CustomButton>
    </div>
  </main>
</template>

<script setup lang="ts">
import CustomSwiper from "../components/CustomSwiper.vue";
import CustomButton from "../components/CustomButton.vue";
import { useFeed } from "../store/useFeed";
</script>
