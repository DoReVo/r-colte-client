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
import useKy from "@/compositions/useKy";
import AppStore from "@/store/AppStore";
import type { User } from "@/types/User";
import { useStorage } from "@vueuse/core";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

interface CallbackResponse {
  token: string;
  user: User.User;
}

const route = useRoute();
const router = useRouter();
let qs = ref(route.query);

const appStore = AppStore();
const ky = useKy();

async function auth() {
  const res = await ky
    .post("oauth/google/callback", {
      json: qs.value,
    })
    .json<CallbackResponse>();

  // set token
  appStore.apiKey = res.token;
  appStore.user = res.user;

  // Set in local storage
  const apiKey = useStorage("apiKey", "");
  apiKey.value = res.token;

  router.replace("/dashboard");
}

function goHome() {
  router.push("/signin");
}

auth();
</script>

<style scoped></style>
