<template>
  <Dialog
    :open="props.isOpen"
    @close="emit('change', false)"
    class="fixed inset-0 h-screen"
  >
    <DialogOverlay
      class="fixed inset-0 bg-black bg-opacity-20 transition duration-150"
    />

    <slot></slot>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogOverlay } from "@headlessui/vue";

interface Props {
  isOpen: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
});

const emit = defineEmits<{ (event: "change", value: boolean): void }>();
</script>

<style scoped></style>
