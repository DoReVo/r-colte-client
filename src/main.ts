import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import App from "./App.vue";
import { setupLayouts } from "virtual:generated-layouts";
import VirtualPages from "~pages";
import PrimeVue from "primevue/config";

// Tailwind stuff inside here
import "./main.css";

const RoutesWithLayouts = setupLayouts(VirtualPages);

const router = createRouter({
  history: createWebHistory(),
  routes: RoutesWithLayouts,
});

const app = createApp(App);

app.use(router);
app.use(createPinia());

// Prime vue css and theme
// Change the first import to change theme
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

app.use(PrimeVue);

app.mount("#app");
