<template>
  <div
    class="header bg-primary2 relative mb-5 flex h-[50px] items-end justify-center"
  >
    <button @click="toggleSidebar(true)">Sidebar</button>
    <div class="text-2xl font-bold text-white">
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

const isOpenSidebar = ref(false);

const { APP_NAME } = AppStore();

function toggleSidebar(value = true) {
  isOpenSidebar.value = value;
}
</script>

<style scoped lang="scss">
.header {
  background-color: #4361ee;
}
</style>
