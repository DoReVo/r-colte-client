<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<template>
  <router-view />
</template>

<style lang="postcss">
#app {
  @apply bg-sky-50;
  @apply max-h-full min-h-screen w-screen;
}
</style>
