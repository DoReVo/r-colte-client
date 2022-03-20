<template>
  <div
    class="grid grid-cols-1 items-center justify-items-center gap-y-5 sm:grid-cols-2"
  >
    <ProductCard
      v-for="(product, index) in products"
      :product="product"
      :key="index"
    />
  </div>
</template>

<script lang="ts">
import AppStore from "@/store/AppStore";
import { mapState } from "pinia";
import { defineComponent } from "vue";
import ProductCard from "../../components/ProductCard.vue";

export default defineComponent({
  name: "DashboardIndexPage",
  setup() {
    return {};
  },
  computed: {
    ...mapState(AppStore, ["products"]),
  },
  components: { ProductCard },
});
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: dashboard
</route>
