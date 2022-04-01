<template>
  <div class="flex h-screen flex-col items-center justify-center">
    <div class="rounded-md bg-white p-5 text-center font-serif">
      <div>
        Redirecting back to
        <span
          @click="goHome"
          class="font-bree-serif font-bold tracking-normal text-primary underline underline-offset-1 transition-colors hover:cursor-pointer"
        >
          {{ appStore.APP_NAME }}
        </span>
      </div>
      <div>
        Click
        <span class="font-bree-serif text-primary">here</span>
        if you're not being redirected
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAxios from "@/compositions/useAxios";
import AppStore from "@/store/AppStore";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
let qs = ref(route.query);

const appStore = AppStore();
const axios = useAxios();

async function auth() {
  const res = await axios.post("/oauth/google/callback", qs.value);
  console.log(res.data);
}

function goHome() {
  router.push("/signin");
}

auth();
</script>

<style scoped></style>
