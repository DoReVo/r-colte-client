import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import App from "./App.vue";
// eslint-disable-next-line import/no-unresolved
import { setupLayouts } from "virtual:generated-layouts";
// eslint-disable-next-line import/no-unresolved
import VirtualPages from "~pages";
import { MotionPlugin } from "@vueuse/motion";

// Tailwind stuff inside here
import "./main.css";
import AppStore from "./store/AppStore";
const RoutesWithLayouts = setupLayouts(VirtualPages);

const router = createRouter({
  history: createWebHistory(),
  routes: RoutesWithLayouts,
});

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(MotionPlugin);

// Make sure route that required auth are
// accessible by user

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.beforeEach((to, from) => {
  // If route does not require auth
  if (!to.meta.requireAuth) return true;

  const appStore = AppStore();
  console.log("Navigation guard", appStore.isLoggedIn);

  // If route require auth and user is not logged in
  if (to.meta.requireAuth && !appStore.isLoggedIn) return { name: "signin" };

  return true;
});

app.mount("#app");
