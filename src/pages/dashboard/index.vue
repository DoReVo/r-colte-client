<template>
  <div
    class="mt-5 grid grid-cols-1 items-center justify-items-center gap-y-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
  methods: {},
  components: { ProductCard },
});
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: dashboard
</route>
