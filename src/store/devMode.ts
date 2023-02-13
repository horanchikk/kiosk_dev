import { defineStore } from "pinia";
import { ref } from "vue";

export const devMode = defineStore("devMode", () => {
  const devStates = ref<{
    dev: boolean;
    main: boolean;
  }>({
    dev: false,
    main: true,
  });

  return { devStates };
});
