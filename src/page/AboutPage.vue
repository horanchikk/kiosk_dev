<template>
  <main class="flex h-full w-full flex-col py-28 font-mono">
    <p
      class="flex h-fit items-center justify-center text-7xl font-bold tracking-wider text-black"
    >
      Инфокиоск
    </p>
    <main
      class="flex flex-auto flex-col items-center justify-center gap-5 font-mono text-5xl"
    >
      <p>
        Приемная, секретарь руководителя, Сухорукова Нина Викторовна +7 (39161)
        2–39–52
      </p>
      <p>Директор, Берлинец Тамара Владимировна +7 (39161) 2–38–41</p>
      <p>
        Заместитель директора по учебной работе, Гончарова Светлана Алексеевна
        +7 (39161) 2–39–52
      </p>
      <p>
        Заместитель директора по учебно-производственной работе, Михиенкова Нина
        Лаврентьева +7 (39161) 2–06–51
      </p>
      <p>
        Заместитель директора по воспитательной работе, Соколова Евгения
        Викторовна +7 (39161) 2–36–11
      </p>
    </main>
    <footer class="flex flex-col items-center justify-center gap-20">
      <div
        class="flex h-32 w-full items-center justify-center gap-20 text-2xl font-bold"
      >
        <div class="flex flex-col items-center justify-center gap-5 text-5xl">
          <CustomSvg github-logo />
          <p>horanchikk</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-5 text-5xl">
          <CustomSvg github-logo />
          <p>ethosa</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-5 text-5xl">
          <CustomSvg github-logo />
          <p>renardein</p>
        </div>
      </div>
      <section class="text-6xl font-bold">with ♥</section>
    </footer>
  </main>
</template>

<script setup>
import CustomSvg from "../components/CustomSvg.vue";
</script>
