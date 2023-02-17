<template>
  <main class="flex flex-col h-full w-full py-28 font-mono">
    <p
      class="h-fit flex items-center justify-center text-7xl text-black font-bold tracking-wider"
    >
      Инфокиоск
    </p>
    <main
      class="flex-auto flex flex-col text-5xl font-bold gap-5 items-center justify-center"
    >
      Здесь будет дино ❤️
    </main>
    <footer class="flex flex-col gap-10 items-center justify-center">
      <div
        class="w-full h-32 flex font-bold text-2xl items-center justify-center gap-10"
      >
        <div class="flex flex-col gap-3">
          <CustomSvg githubLogo />
          <p>horanchikk</p>
        </div>
        <div class="flex flex-col gap-3">
          <CustomSvg githubLogo />
          <p>ethosa</p>
        </div>
        <div class="flex flex-col gap-3">
          <CustomSvg githubLogo />
          <p>renardein</p>
        </div>
      </div>
      <section class="font-bold text-8xl">by HapticX team with ♥</section>
    </footer>
  </main>
</template>

<script>
import CustomSvg from "../components/CustomSvg.vue";
</script>
