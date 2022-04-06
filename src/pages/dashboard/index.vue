<template>
  <div
    class="mt-5 grid grid-cols-1 items-center justify-items-center gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  >
    <StoreCard
      v-for="(shop, index) in appStore.shopEntry"
      :shop="shop"
      :key="index"
    />
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
  </div>
</template>

<script setup lang="ts">
import AppStore from "@/store/AppStore";
import ActionSheet from "@/components/ActionSheet.vue";
import PlusIcon from "@/icons/PlusIcon.vue";
import EntryForm from "@/components/EntryForm.vue";
import { ref } from "vue";
import type { ShopEntry } from "@/types/ShopEntry";
import StoreCard from "../../components/StoreCard.vue";
import useKy from "@/compositions/useKy";

const appStore = AppStore();

const isOpenActionSheet = ref(false);
const ky = useKy();

const toggleSheet = (value: boolean) => {
  isOpenActionSheet.value = value;
};

const submitForm = async (data: ShopEntry) => {
  const res = await ky
    .post("shopentry", {
      json: data,
    })
    .json<ShopEntry>();

  appStore.shopEntry.push(res);
};
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: dashboard
  requireAuth: true
</route>
