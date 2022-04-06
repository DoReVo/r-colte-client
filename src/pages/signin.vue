<template>
  <div
    class="container mx-auto flex max-h-full min-h-screen w-full items-center justify-center pt-32"
  >
    <div
      class="flex w-64 flex-col items-center justify-center rounded-md bg-white py-7 px-4 shadow"
    >
      <h1 class="text-center font-serif font-bold tracking-wide">
        Sign in to
        <span
          class="font-bree-serif tracking-normal text-primary underline underline-offset-1 transition-colors hover:cursor-pointer"
          @click.prevent.stop="goHome"
        >
          {{ appStore.APP_NAME }}
        </span>
      </h1>

      <button
        class="text-md group mt-5 flex w-52 items-center rounded-lg border-0 bg-slate-50 px-4 py-2 tracking-tighter text-slate-600 shadow transition-all duration-200 focus-visible:outline-none active:translate-y-1 mouse:hover:text-primary touch:active:text-primary"
        :class="{ 'bg-gray-100': isLoading }"
        @click.prevent.stop="signIn"
      >
        <GoogleIcon
          class="inline w-5 fill-neutral-100 group-hover:fill-[#3ba9ee]"
        />
        <div class="inline-flex grow items-center justify-center">
          <span v-if="!isLoading">Sign In With Google</span>
          <span v-else>
            <Spinner class="inline" />
          </span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppStore from "@/store/AppStore";
import { ref } from "vue";
import GoogleIcon from "../icons/google.vue";
import Spinner from "../components/Spinner.vue";
import { useRouter } from "vue-router";
import useKy from "@/compositions/useKy";

const appStore = AppStore();
const router = useRouter();
const isLoading = ref(false);
const ky = useKy();

function goHome() {
  router.push("/");
}

interface ChallengeResponse {
  state: string;
  challenge: string;
}

async function signIn() {
  // isLoading.value = true;

  // Get challenge and state
  const res = await ky.get(`oauth/credential`).json<ChallengeResponse>();

  const { state, challenge } = res;

  const options = {
    prompt: "select_account",
    flowName: "GeneralOAuthFlow",
    client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
    redirect_uri: `${
      import.meta.env.VITE_APP_CLIENT_URL
    }/oauth/google/callback`,
    response_type: "code",
    state,
    code_challenge: challenge,
    code_challenge_method: "plain",
    scope: "openid email profile",
  };

  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  url.search = new URLSearchParams(options).toString();
  window.location.replace(url.toString());
}
</script>
