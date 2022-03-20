<template>
  <div
    class="header bg-primary2 relative flex h-[75px] items-end justify-center"
  >
    <div class="text-3xl font-bold text-white">
      {{ APP_NAME }}
    </div>
  </div>
</template>

<script lang="ts">
import AppStore from "@/store/AppStore";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderBar",
  setup() {
    const appStore = AppStore();

    return { APP_NAME: appStore.APP_NAME, USER_NAME: appStore.user.name };
  },
});
</script>

<style scoped lang="scss">
.header {
  background: radial-gradient(
    circle,
    rgba(86, 11, 173, 1) 0%,
    rgba(114, 9, 183, 1) 100%
  );
}
</style>
