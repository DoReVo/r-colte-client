<template>
  <Dialog :open="props.isOpen" @close="toggleDialog(false)" class="base-dialog">
    <DialogOverlay class="base-dialog-overlay" />
    <div
      v-motion="'formMotion'"
      :initial="{
        translateY: barHeight,
      }"
      :enter="{
        translateY: 0,
        transition: {
          ease: [0.36, 0.66, 0.04, 1],
          duration: 550,
        },
      }"
      :leave="{
        translateY: barHeight,
        transition: {
          ease: [0.36, 0.66, 0.04, 1],
          duration: 550,
        },
      }"
      class="fixed bottom-0 z-10 h-[95%] w-full rounded-t-xl bg-white drop-shadow-xl"
    >
      <slot :toggleDialog="toggleDialog"> </slot>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogOverlay } from "@headlessui/vue";

import { ref } from "vue";
import { useMotions } from "@vueuse/motion";
import { useWindowSize } from "@vueuse/core";

interface Props {
  isOpen: boolean;
}

interface Emits {
  (event: "change", value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), { isOpen: false });

const { height } = useWindowSize();

// For transform to 95% of screen
const barHeight = ref<number>((95 / 100) * height.value);

const motions = useMotions();

const emit = defineEmits<Emits>();

const closeSheet = () => {
  motions.formMotion.leave(() => {
    emit("change", false);
  });
};

const toggleDialog = (value: boolean) => {
  if (props.isOpen === true && value === false) closeSheet();
};
</script>

<style scoped></style>
