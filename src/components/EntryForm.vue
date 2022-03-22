<template>
  <div class="flex justify-between px-5 py-3">
    <button
      class="no-tap-effect rounded font-merriweather font-bold tracking-wide text-red-500 focus-visible:outline-offset-4 focus-visible:outline-red-500"
      @click="emit('close')"
    >
      Cancel
    </button>
    <button
      class="no-tap-effect rounded font-merriweather font-bold tracking-wide text-primary focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      Save
    </button>
  </div>

  <form action="" class="form grid grid-cols-1 items-end gap-y-2 px-5 py-3">
    <label for="shopId">Shop Id</label>
    <input id="shopId" type="text" autocomplete="off" />
    <label for="search">Search Query</label>
    <input id="search" type="text" autocomplete="off" />
    <label for="match">Product Match</label>
    <input id="match" type="text" autocomplete="off" />
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (event: "close"): void }>();
</script>

<style scoped lang="scss">
label {
  @apply font-bree-serif text-sm font-bold tracking-wider text-primary;
}

input {
  @apply rounded-md border border-gray-300 font-bree-serif focus-visible:border-primary focus-visible:ring-primary;
}
</style>
