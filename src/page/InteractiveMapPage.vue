<template>
  <div class="flex h-full w-full flex-col">
    <main class="flex h-full flex-auto items-center justify-center">
      <img
        src="https://sun2.sibirix.userapi.com/impg/BJ9P3opbtTna-1HCdJFzAAQ-glm-560SqKBsmw/RWXLEivlpgs.jpg?size=441x2160&quality=96&sign=b7ee5a3fed721e0ebb27da368144efec&type=album"
        alt="aphoto"
      />
    </main>
    <header class="grid w-full grid-cols-4 grid-rows-1">
      <CustomButton big active @click="floor = 1" class="text-7xl text-black"
        >1 этаж
      </CustomButton>
      <CustomButton big active @click="floor = 2" class="text-7xl text-black"
        >2 этаж
      </CustomButton>
      <CustomButton big active @click="floor = 3" class="text-7xl text-black"
        >3 этаж
      </CustomButton>
      <CustomButton big active @click="floor = 4" class="text-7xl text-black"
        >4 этаж
      </CustomButton>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "../components/CustomButton.vue";
import OpenSeaDragon from "openseadragon";

OpenSeaDragon({
  tileSources: {
    type: "image",
    url: "https://sun2.sibirix.userapi.com/impg/BJ9P3opbtTna-1HCdJFzAAQ-glm-560SqKBsmw/RWXLEivlpgs.jpg?size=441x2160&quality=96&sign=b7ee5a3fed721e0ebb27da368144efec&type=album",
  },
});

const zoom = ref(4);
const floor = ref(1);
</script>
