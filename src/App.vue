<script setup lang="ts">
import { useStorage } from "@vueuse/core";
import { HTTPError } from "ky";
import { onMounted, ref } from "vue";
import useKy from "./compositions/useKy";
import AppStore from "./store/AppStore";
import type { BeforeInstallPromptEvent } from "./types/PWA";
import useSetupApp from "@/compositions/useSetupApp";

interface Data {
  pwaPromptEvent: null | BeforeInstallPromptEvent;
  pwaInstalled: boolean;
}

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
console.log("Setting up App");
useSetupApp();
console.log("App Setup");
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
