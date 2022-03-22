<template>
  <Dialog :open="props.isOpen" @close="toggleModal(false)" class="base-dialog">
    <DialogOverlay
      class="fixed inset-0 bg-black bg-opacity-20 transition duration-150"
    />
    <!-- Content of modal -->
    <div
      v-motion="'sidebarMotion'"
      :initial="{
        translateX: -300,
      }"
      :enter="{
        translateX: 0,
        transition: {
          ease: [0.36, 0.66, 0.04, 1],
          duration: 550,
        },
      }"
      :leave="{
        translateX: -300,
        transition: {
          ease: [0.36, 0.66, 0.04, 1],
          duration: 550,
        },
      }"
      class="fixed z-10 flex h-full w-4/5 min-w-[250px] flex-col gap-y-2 bg-white px-10 pt-36 pb-20 drop-shadow-xl xs:w-[300px]"
    >
      <h3
        class="text-center font-bebas-neue text-3xl font-bold tracking-widest text-primary"
      >
        Recolte
      </h3>
      <div class="grow space-y-6">
        <RouterLink
          class="block h-10 w-full rounded-lg px-5 py-2 text-left font-bree-serif text-primary outline-none transition-colors mouse:hover:bg-primary/70 mouse:hover:text-white"
          active-class="bg-primary bg-opacity-65 mouse:hover:!bg-primary !text-white"
          v-for="(route, index) in routes"
          :key="index"
          :to="route.url"
          >{{ route.name }}</RouterLink
        >
      </div>
      <button
        class="flex h-10 w-full items-center gap-x-1 rounded-lg px-5 text-primary outline-none mouse:hover:bg-primary/70 mouse:hover:text-white"
      >
        <LogoutIcon class="inline h-7 w-7" />
        <span class="inline font-bree-serif tracking-wider">Logout</span>
      </button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogOverlay } from "@headlessui/vue";
import { useMotions } from "@vueuse/motion";
import { RouterLink } from "vue-router";
import LogoutIcon from "../icons/LogoutIcon.vue";

interface Props {
  isOpen: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
});

const emit = defineEmits<{ (event: "change", value: boolean): void }>();

const motions = useMotions();

const routes = [
  { name: "Home", url: "/" },
  { name: "Dashboard", url: "/dashboard" },
  { name: "Sign in", url: "/signin" },
  { name: "Credits", url: "/credit" },
];

const toggleModal = async (value: boolean) => {
  if (props.isOpen === true && value === false)
    motions.sidebarMotion.leave(() => {
      emit("change", value);
    });
};
</script>

<style scoped></style>
