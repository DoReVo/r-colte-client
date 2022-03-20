<template>
  <div class="h-[250px] w-[250px] bg-white px-4 shadow-lg">
    <a :href="product.productUrl" rel="noopener noreferrer" target="_blank">
      <img
        class="mx-auto h-40 w-40 rounded"
        :src="product.images[0]"
        alt="Product Image"
      />
    </a>
    <h3 class="text-left font-bebas-neue leading-5 line-clamp-2">
      {{ product.name }}
    </h3>
    <div class="mt-[10px] flex justify-between">
      <div class="font-bree-serif text-sm text-primary">
        RM {{ product.price }}
      </div>
      <div
        class="flex items-center justify-center rounded bg-primary px-1 font-bree-serif text-xs text-white"
      >
        {{ product.stock }} in stock
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/Product";

interface Props {
  product: Product;
}

defineProps<Props>();
</script>

<style scoped></style>
