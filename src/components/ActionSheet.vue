<template>
  <div
    class="actionbar fixed right-0 bottom-0 flex h-14 w-full items-center justify-around rounded-t-xl border-none bg-primary-darker drop-shadow"
  >
    <button
      class="h-max w-max rounded-full border-none text-white outline-none"
      @click="toggleModal(true)"
    >
      <PlusIcon class="h-8 w-8 rounded-full border-none" />
    </button>
  </div>
  <Modal :is-open="isOpenModal" @change="toggleModal">
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
      <slot>
        <EntryForm @close="toggleModal(false)" />
      </slot>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import PlusIcon from "../icons/PlusIcon.vue";
import Modal from "./Modal.vue";

import { ref } from "vue";
import { useMotions } from "@vueuse/motion";
import { useWindowSize } from "@vueuse/core";
import EntryForm from "./EntryForm.vue";

const { height } = useWindowSize();

const isOpenModal = ref(false);
// For transform to 95% of screen
const barHeight = ref<number>((95 / 100) * height.value);
const motions = useMotions();

const toggleModal = (value: boolean) => {
  if (isOpenModal.value === true && value === false)
    motions.formMotion.leave(() => {
      isOpenModal.value = value;
    });
  else isOpenModal.value = value;
};
</script>

<style scoped></style>
