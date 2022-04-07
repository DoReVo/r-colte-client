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
import logger from "@/utils/logger";

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
router.beforeEach((to, from) => {
  if (to.meta.requireAuth) {
    logger.info("Route require auth", { route: to.path });

    const appStore = AppStore();
    if (appStore.apiKey) {
      logger.info("API key is present, allowing access to route", {
        to: to.path,
        from: from.path,
      });

      return true;
    }

    logger.warn("API key not present, denying access to route", {
      to: to.path,
      from: from.path,
    });

    return { name: "signin" };
  }

  return true;
});

app.mount("#app");
