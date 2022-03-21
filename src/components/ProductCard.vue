, useMotionProperties, useMotionControls
<template>
  <div class="relative h-[250px] w-[250px] rounded-lg bg-white">
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
        class="absolute top-20 right-0 mr-2 rounded-full border-2 border-primary-darker outline-offset-4 duration-150 focus:outline-primary active:translate-y-0.5"
        @click="switchImage('next')"
        style="-webkit-tap-highlight-color: transparent"
        v-motion-fade
      >
        <NextIcon class="h-4 w-4 text-primary-darker" />
      </button>
      <button
        v-if="shouldRenderImgNavigationButton('prev')"
        class="absolute top-20 left-0 ml-2 rounded-full border-2 border-primary-darker outline-offset-4 duration-150 focus:outline-primary active:translate-y-0.5"
        @click="switchImage('prev')"
        style="-webkit-tap-highlight-color: transparent"
        v-motion-fade
      >
        <PrevIcon class="h-4 w-4 text-primary-darker" />
      </button>
    </div>
    <h3
      class="px-4 text-left font-bree-serif text-xs leading-4 text-slate-900 line-clamp-2"
    >
      {{ product.name }}
    </h3>
    <div class="mt-5 flex justify-between px-4">
      <div class="font-bree-serif text-lg text-primary">
        RM {{ product.price }}
      </div>
      <div
        class="flex items-center justify-center px-1 py-1 font-bree-serif text-sm text-primary"
      >
        {{ product.stock }} in stock
      </div>
    </div>

    <!-- Action bar -->
    <div class="absolute -bottom-10 flex w-full flex-row-reverse px-2">
      <button
        class="rounded-full border-2 border-primary p-0.5 text-primary outline-offset-4 duration-150 focus:outline-primary active:translate-y-0.5 mouse:hover:bg-primary mouse:hover:text-white touch:active:bg-primary touch:active:text-white"
        style="-webkit-tap-highlight-color: transparent"
      >
        <a :href="product.productUrl" rel="noopener noreferrer" target="_blank">
          <ExternalLinkIcon
            class="h-5 w-5 text-primary mouse:hover:text-white touch:active:text-white"
          />
        </a>
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
