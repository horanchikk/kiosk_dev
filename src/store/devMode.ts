import { defineStore } from "pinia";
import { ref } from "vue";

export const devMode = defineStore("devMode", () => {
  const devStates = ref<{
    dev: boolean | undefined;
    main: boolean | undefined;
  }>({
    dev: undefined,
    main: undefined,
  });

  return { devStates };
});
