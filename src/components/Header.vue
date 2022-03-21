<template>
  <div
    class="header relative mb-5 flex h-[50px] items-center justify-center bg-primary-darker px-5 drop-shadow-lg"
  >
    <button
      class="no-tap-effect flex h-10 w-10 items-center justify-center text-white outline-none"
      @click="toggleSidebar(true)"
    >
      <MenuIcon class="h-10 w-10" />
    </button>
    <div class="grow text-2xl font-bold text-white">
      {{ APP_NAME }}
    </div>
  </div>
  <Sidebar
    :is-open="isOpenSidebar"
    @updateIsOpen="toggleSidebar(false)"
  ></Sidebar>
</template>

<script setup lang="ts">
import AppStore from "@/store/AppStore";
import { ref } from "vue";
import Sidebar from "./Sidebar.vue";
import MenuIcon from "../icons/MenuIcon.vue";

const isOpenSidebar = ref(false);

const { APP_NAME } = AppStore();

function toggleSidebar(value = true) {
  isOpenSidebar.value = value;
}
</script>

<style scoped lang="scss"></style>
