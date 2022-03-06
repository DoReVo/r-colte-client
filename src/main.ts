import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import App from "./App.vue";
import { setupLayouts } from "virtual:generated-layouts";
import VirtualPages from "~pages";

const RoutesWithLayouts = setupLayouts(VirtualPages);

const router = createRouter({
  history: createWebHistory(),
  routes: RoutesWithLayouts,
});

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount("#app");
