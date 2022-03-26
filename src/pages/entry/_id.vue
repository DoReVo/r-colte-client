<template>
  <div>{{ shopEntry }}</div>
</template>

<script setup lang="ts">
import AppStore from "@/store/AppStore";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const id = route.params.id;

const appStore = AppStore();

const shopEntry = appStore.shopEntry.find((e) => e.id === id);

// if (!shopEntry || !id)
// Check resource existance from server
//   router.replace("/dashboard");

// Fetch show data
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: dashboard
</route>
