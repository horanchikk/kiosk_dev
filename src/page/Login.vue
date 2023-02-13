<template>
  <form
    class="w-full h-full flex flex-col gap-10 items-center justify-center"
    @submit.prevent="login(passwd)"
  >
    <p class="text-2xl font-bold">Ты что здесь забыл? Выйди отсюда</p>
    <input
      type="password"
      class="border-0 outline-0 text-black text-4xl px-5 py-4 w-1/3 h-24 shadow-xl rounded-2xl"
      placeholder="Введите пароль"
      v-model="passwd"
    />
    <div v-show="passwdNotCorrect" class="flex flex-col gap-2 show">
      <p class="text-2xl text-center font-bold text-red-400">
        Неверный пароль)
      </p>
    </div>
    <CustomButton type="submit" class="w-1/3" big>Войти</CustomButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "../components/CustomButton.vue";
import router from "../router";
import { useAuth } from "../store/auth";

const passwd = ref("");
const passwdNotCorrect = ref(false);

function login(password) {
  if (password === "her1337") {
    useAuth().authorized = true;
    router.push("/home");
  } else {
    useAuth().authorized = false;
    passwdNotCorrect.value = true;
  }
}
</script>
