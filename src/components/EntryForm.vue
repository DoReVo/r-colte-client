<template>
  <div class="flex justify-between px-5 py-3">
    <button
      class="no-tap-effect rounded font-merriweather font-bold tracking-wide text-red-500 focus-visible:outline-offset-4 focus-visible:outline-red-500"
      @click="props.toggleDialog(false)"
    >
      Cancel
    </button>
    <button
      class="no-tap-effect rounded font-merriweather font-bold tracking-wide text-primary focus-visible:outline-offset-4 focus-visible:outline-primary"
      @click="submit"
    >
      Save
    </button>
  </div>

  <form action="" class="form grid grid-cols-1 items-end gap-y-2 px-5 py-3">
    <label for="shopId">Shop Id</label>
    <input
      id="shopId"
      type="text"
      autocomplete="off"
      class="input-base input-normal"
      v-model="formData.shopId"
    />
    <label for="shopName">Shop Name</label>
    <input
      id="shopName"
      type="text"
      autocomplete="off"
      class="input-base input-normal"
      v-model="formData.shopName"
    />
    <label for="search">Search Query</label>
    <input
      id="search"
      type="text"
      autocomplete="off"
      class="input-base input-normal"
      v-model="formData.searchQuery"
    />
    <label for="match">Product Match</label>
    <div class="input-base input-tag-wrapper flex-wrap">
      <template v-for="(match, index) in formData.productMatch" :key="match">
        <span
          v-motion-fade
          class="cursor-pointer rounded-lg bg-primary p-1 text-sm text-white"
          @click="removeMatch(index)"
          >{{ match }}</span
        >
      </template>

      <input
        id="match"
        type="text"
        autocomplete="off"
        class="input-tag flex-grow"
        @keydown.enter.stop.prevent="addMatch()"
        v-model="tagInput"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ShopEntry } from "@/types/ShopEntry";

const tagInput = ref("");

const formData = ref<ShopEntry>({
  shopId: "",
  searchQuery: "",
  productMatch: [],
  shopName: "",
});

interface Props {
  toggleDialog: (value: boolean) => void;
}

interface Emits {
  (event: "submit", formData: ShopEntry): void;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();

const removeMatch = (index: number) => {
  // if(formData.value?.productMatch)
  formData.value.productMatch.splice(index, 1);
};

const addMatch = () => {
  if (tagInput.value.trim() === "") return;

  formData.value.productMatch.push(tagInput.value);
  tagInput.value = "";
};

const submit = () => {
  emit("submit", formData.value);
  props.toggleDialog(false);
};
</script>

<style scoped lang="scss">
label {
  @apply font-bree-serif text-sm font-bold tracking-wider text-primary;
}

.input-base {
  @apply rounded-md border border-gray-300 font-bree-serif;
}

.input-normal {
  @apply focus-visible:border-primary focus-visible:ring-primary;
}

.input-tag {
  @apply border-none p-0 text-sm focus:ring-0;
}

.input-tag-wrapper {
  @apply flex gap-x-1 gap-y-1 border px-3 py-2 focus-within:border-primary focus-within:outline-1 focus-within:outline-primary focus-within:ring-1 focus-within:ring-primary;
}
</style>
