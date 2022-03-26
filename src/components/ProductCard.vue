<template>
  <div class="h-[275px] w-[250px] rounded-lg bg-white shadow-sm">
    <div class="relative w-full">
      <template v-for="(i, index) in props.product.images" :key="index">
        <img
          v-if="i === currentSelectedImg"
          v-motion-pop
          class="mx-auto h-40 w-40"
          :src="currentSelectedImg"
          alt="Product Image"
          loading="lazy"
        />
      </template>

      <button
        v-if="shouldRenderImgNavigationButton('next')"
        class="no-tap-effect absolute top-20 right-0 mr-2 border-none outline-offset-1 duration-75 focus:outline-primary active:translate-y-0.5"
        @click="switchImage('next')"
      >
        <NextIcon class="h-5 w-5 text-primary" />
      </button>
      <button
        v-if="shouldRenderImgNavigationButton('prev')"
        class="no-tap-effect absolute top-20 left-0 ml-2 border-none outline-offset-1 duration-75 focus:outline-primary active:translate-y-0.5"
        @click="switchImage('prev')"
      >
        <PrevIcon class="h-5 w-5 text-primary" />
      </button>
    </div>
    <h3
      class="px-4 text-left font-bree-serif text-sm leading-4 text-slate-700 line-clamp-2"
    >
      {{ product.name }}
    </h3>
    <div class="mt-5 flex justify-between px-4">
      <div class="font-bree-serif text-lg text-primary-darker">
        RM {{ product.price }}
      </div>
      <a
        :href="product.productUrl"
        rel="noopener noreferrer"
        target="_blank"
        class="no-tap-effect flex items-center justify-center rounded border-none p-0.5 text-primary outline-offset-1 duration-150 visited:text-slate-400 focus:outline-primary active:translate-y-1 mouse:hover:bg-primary mouse:hover:text-white touch:active:bg-primary touch:active:text-white"
      >
        <ExternalLinkIcon class="h-5 w-5" />
      </a>
    </div>

    <!-- Action bar -->
    <div
      class="mt-1 flex w-full items-center justify-between px-4 font-bree-serif text-sm text-primary"
    >
      {{ product.stock }} in stock
      <button
        class="no-tap-effect flex h-6 w-6 items-center justify-center rounded border-none p-0.5 text-primary outline-offset-1 duration-150 visited:text-slate-400 focus:outline-primary active:translate-y-1 mouse:hover:bg-primary mouse:hover:text-white touch:active:bg-primary touch:active:text-white"
      >
        <InfoIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/Product";
import { ref } from "vue";
import NextIcon from "../icons/next.vue";
import PrevIcon from "../icons/prev.vue";
import ExternalLinkIcon from "../icons/ExternalLink.vue";
import InfoIcon from "../icons/InfoIcon.vue";

const props = defineProps<{ product: Product }>();
const currentSelectedImg = ref(props.product.images[0]);

// Decide whether the next and previous image button should be rendered
const shouldRenderImgNavigationButton = (direction: "next" | "prev") => {
  const { images } = props.product;

  const currentlySelectedImgIndex = images.findIndex(
    (image) => image === currentSelectedImg.value
  );

  if (direction === "prev" && currentlySelectedImgIndex === 0) return false;
  else if (
    direction === "next" &&
    currentlySelectedImgIndex === images.length - 1
  )
    return false;

  return true;
};

// Switch to next or previous image
const switchImage = (direction: "next" | "prev" = "next") => {
  const { images } = props.product;

  const currentlySelectedImgIndex = images.findIndex(
    (image) => image === currentSelectedImg.value
  );

  // If last image is already selected && direction is next, dont change anything
  if (direction === "next" && currentlySelectedImgIndex === images.length - 1)
    return;
  else if (direction === "prev" && currentlySelectedImgIndex === 0) return;

  if (direction === "next")
    currentSelectedImg.value = images[currentlySelectedImgIndex + 1];
  else if (direction === "prev")
    currentSelectedImg.value = images[currentlySelectedImgIndex - 1];
};
</script>

<style scoped></style>
