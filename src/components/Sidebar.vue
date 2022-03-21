UseElementSizeimport { ref } from "vue"; useMotion,
<template>
  <Dialog
    :open="props.isOpen"
    @close="closeModal"
    class="fixed inset-0 h-screen"
  >
    <DialogOverlay
      class="fixed inset-0 bg-black bg-opacity-20 transition duration-150"
    />
    <div
      v-motion="'sidebarMotion'"
      :initial="{
        translateX: -300,
      }"
      :enter="{
        translateX: 0,
        transition: {
          ease: [0.36, 0.66, 0.04, 1],
        },
      }"
      :leave="{
        translateX: -300,
        transition: {
          duration: 350,
        },
      }"
      ref="sidebarRef"
      class="fixed z-10 flex h-full w-4/5 min-w-[250px] flex-col gap-y-2 bg-white px-10 pt-36 pb-20 drop-shadow-xl xs:w-[300px]"
    >
      <h3
        class="text-center font-bebas-neue text-3xl font-bold tracking-widest text-primary"
      >
        Recolte
      </h3>
      <div class="grow">
        <RouterLink
          class="block h-10 w-full rounded-lg px-5 py-2 text-left font-bree-serif text-primary outline-none"
          active-class="bg-primary bg-opacity-65 !text-white"
          v-for="(route, index) in routes"
          :key="index"
          :to="route.url"
          >{{ route.name }}</RouterLink
        >
      </div>
      <button
        class="bg-opacity-65 flex h-10 w-full items-center text-primary outline-none"
      >
        <LogoutIcon class="inline h-10 w-10" />
        <span class="inline font-bree-serif tracking-wider">Logout</span>
      </button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogOverlay } from "@headlessui/vue";
import { useMotions } from "@vueuse/motion";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LogoutIcon from "../icons/LogoutIcon.vue";

const motions = useMotions();
const sidebarRef = ref();

interface Props {
  isOpen: boolean;
}

const routes = [
  { name: "Home", url: "/" },
  { name: "Dashboard", url: "/dashboard" },
  { name: "Sign in", url: "/signin" },
  { name: "Credits", url: "/credit" },
];

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
});

const emit = defineEmits<{ (event: "updateIsOpen", value: boolean): void }>();

const closeModal = async () => {
  motions.sidebarMotion.leave(() => {
    console.log("Closed");
    emit("updateIsOpen", false);
  });
};
</script>

<style scoped></style>
