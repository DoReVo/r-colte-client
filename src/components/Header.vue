<template>
  <div
    class="header relative mb-5 flex h-[50px] items-center justify-center bg-primary-darker px-5 drop-shadow-lg"
  >
    <button
      class="no-tap-effect flex h-max w-max items-center justify-center p-1 text-white outline-none"
      @click="toggleSidebar(true)"
    >
      <MenuIcon class="h-6 w-6" />
    </button>
    <div
      class="grow font-bebas-neue text-2xl font-bold tracking-widest text-white"
    >
      {{ APP_NAME }}
    </div>
  </div>
  <Sidebar :is-open="isOpenSidebar" @change="toggleSidebar"></Sidebar>
</template>

<script setup lang="ts">
import AppStore from "@/store/AppStore";
import { ref } from "vue";
import Sidebar from "./Sidebar.vue";
import MenuIcon from "../icons/MenuIcon.vue";

const isOpenSidebar = ref(false);

const { APP_NAME } = AppStore();

function toggleSidebar(value: boolean) {
  isOpenSidebar.value = value;
}
</script>

<style scoped lang="scss"></style>
