<template>
  <div
    class="h[275px] w-[250px] rounded-lg bg-white p-4 font-bree-serif shadow-sm"
  >
    <div class="font-bebas-neue leading-3 text-slate-500">Shop Name</div>
    <h3 class="text-md text-left text-primary-darker line-clamp-2">
      {{ props.shop.shopName }}
    </h3>
    <div class="mt-5 font-bebas-neue leading-3 text-slate-500">
      Search Query
    </div>
    <div class="text-base text-primary">{{ props.shop.searchQuery }}</div>

    <div class="mt-5 font-bebas-neue text-slate-500">Product Match</div>
    <div class="flex flex-wrap gap-x-1 gap-y-1">
      <template v-for="(match, index) in props.shop.productMatch" :key="match">
        <div
          class="cursor-pointer rounded-lg bg-primary p-1 text-sm text-white"
        >
          {{ match }}
        </div>
      </template>
    </div>

    <div class="flex items-center justify-end">
      <button
        class="text-primary focus-visible:outline-offset-2 focus-visible:outline-primary"
        @click="goToStoreEntryDashboard"
      >
        <ArrowRightIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ShopEntry } from "@/types/ShopEntry";
import { useRouter } from "vue-router";
import ArrowRightIcon from "../icons/ArrowRightIcon.vue";

interface Prop {
  shop: ShopEntry;
}

const props = defineProps<Prop>();

const router = useRouter();

const goToStoreEntryDashboard = () => {
  router.push(`/entry/${props.shop.id}`);
};
</script>

<style scoped></style>
