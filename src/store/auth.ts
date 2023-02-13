import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuth = defineStore("useAuth", () => {
  const authorized = ref<boolean>(false);

  return { authorized };
});
