<template>
  <Header class="mb-3" />
  <router-view />
  <div
    class="actionbar fixed right-0 bottom-0 flex h-14 w-full items-center justify-around rounded-t-xl border-none bg-primary-darker drop-shadow"
  >
    <button
      class="h-max w-max rounded-full border-none text-white outline-none"
      @click="toggleSheet(true)"
      :disabled="isOpenActionSheet"
    >
      <PlusIcon class="h-8 w-8 rounded-full border-none" />
    </button>
  </div>
  <ActionSheet
    :is-open="isOpenActionSheet"
    @change="toggleSheet"
    v-slot="{ toggleDialog }"
  >
    <EntryForm :toggleDialog="toggleDialog" @submit="submitForm" />
  </ActionSheet>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import ActionSheet from "@/components/ActionSheet.vue";
import PlusIcon from "@/icons/PlusIcon.vue";
import EntryForm from "@/components/EntryForm.vue";
import { ref } from "vue";
import type { FormData } from "@/types/Form";

const isOpenActionSheet = ref(false);

const toggleSheet = (value: boolean) => {
  isOpenActionSheet.value = value;
};

const submitForm = (data: FormData) => {
  console.log(data.shopId, data.productMatch, data.searchQuery);
};
</script>

<style scoped lang="scss"></style>
