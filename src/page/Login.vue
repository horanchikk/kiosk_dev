<template>
  <form
    class="w-full h-full flex flex-col gap-10 items-center justify-center"
    @submit.prevent="login(passwd)"
  >
    <input
      type="text"
      class="border-0 outline-0 text-black text-3xl px-5 py-4 w-96"
      placeholder="Введите пароль"
      v-model="passwd"
    />
    <div v-if="passwdNotCorrect" class="text-red-400">Неверный пароль</div>
    <CustomButton type="submit" big>Войти</CustomButton>
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
  if (password === "her228") {
    useAuth().authorized = true;
    router.push("/home");
  } else {
    passwdNotCorrect.value = true;
  }
}
</script>
