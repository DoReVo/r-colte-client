<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { BeforeInstallPromptEvent } from "./types/PWA";
import useSetupApp from "@/compositions/useSetupApp";

const pwaPromptEvent = ref<null | BeforeInstallPromptEvent>(null);
const pwaInstalled = ref(false);

onMounted(() => {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    pwaPromptEvent.value = e as BeforeInstallPromptEvent;
    pwaInstalled.value = false;
  });

  window.addEventListener("appinstalled", (e) => {
    e.preventDefault();
    pwaPromptEvent.value = null;
    pwaInstalled.value = true;
  });
});

useSetupApp();
</script>

<template>
  <router-view />
</template>

<style lang="scss">
#app {
  @apply bg-sky-100;
  @apply max-h-full min-h-screen w-screen;
}
</style>
