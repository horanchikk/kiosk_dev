<template>
  <div
    :class="`h-fit w-fit flex items-center justify-center rounded-full ${!unclickable ? 'bg-blue-500' : 'bg-neutral-600'} p-2 text-3xl text-white`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">

const {unclickable} = defineProps<{
  unclickable?: boolean
}>()

</script>