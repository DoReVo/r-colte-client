<script lang="ts">
import { mapState } from "pinia";
import { defineComponent } from "vue";
import AppStore from "./store/AppStore";

export default defineComponent({
  name: "App",
  computed: {
    ...mapState(AppStore, ["user"]),
  },
  created() {},
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
