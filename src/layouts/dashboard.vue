<template>
  <Header class="mb-3" />
  <router-view />
  <ActionBar />
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import ActionBar from "@/components/ActionSheet.vue";
</script>

<style scoped lang="scss"></style>
