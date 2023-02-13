import { defineStore } from "pinia";
import { ref } from "vue";

interface Message {
  from: string;
  msg: string;
}

export const dev = defineStore("dev", () => {
  const devStates = ref<{
    dev: boolean | undefined;
    main: boolean | undefined;
  }>({
    dev: undefined,
    main: undefined,
  });

  const debug = ref<Message[]>([]);

  function log(fromLog: string, msgLog: string) {
    debug.value.push({ from: fromLog, msg: msgLog });
  }

  return { devStates, debug, log };
});
