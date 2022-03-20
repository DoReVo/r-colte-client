<script lang="ts">
import AppStore from "@/store/AppStore";
import sleep from "@/utils/sleep";
import { mapState } from "pinia";
import { defineComponent } from "vue";
import GoogleIcon from "../icons/google.vue";
import Spinner from "../components/Spinner.vue";

export default defineComponent({
  name: "SignInPage",
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState(AppStore, ["user", "APP_NAME"]),
  },
  methods: {
    async signIn() {
      this.isLoading = true;
      await sleep(1000);
      this.$router.push("/dashboard");
      // Get challenge and state
      /* const res = await fetch(
              `${import.meta.env.VITE_API_URL}/oauth/credential`
            );
      
            const { state, challenge } = await res.json();
      
            const options = {
              response_type: "code",
              client_id: import.meta.env.VITE_TWITTER_CLIENT_ID,
              redirect_uri: `${import.meta.env.VITE_APP_HOST}/oauth/twitter/callback`,
              state,
              code_challenge: challenge,
              code_challenge_method: "plain",
              scope: "users.read tweet.read",
            };
      
            const url = new URL("https://twitter.com/i/oauth2/authorize");
            url.search = new URLSearchParams(options).toString();
            window.location.replace(url.toString()); */
    },
    goHome() {
      this.$router.push("/");
    },
  },
  components: { GoogleIcon, Spinner },
});
</script>

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
          class="tracking-normal text-primary underline underline-offset-1 transition-colors hover:cursor-pointer"
          @click.prevent.stop="goHome"
        >
          {{ APP_NAME }}
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
