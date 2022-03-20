<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";

export default defineComponent({
  name: "DashboardTemplate",
  components: { Header },
});
</script>

<template>
  <Header />
  <router-view v-motion-fade />
</template>

<style scoped lang="scss"></style>
