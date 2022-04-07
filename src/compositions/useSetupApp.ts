/** Store api key if exist */

import AppStore from "@/store/AppStore";
import { useStorage } from "@vueuse/core";

/** Set API key from local storage if present */
const useSetupApp = async () => {
  const appStore = AppStore();

  const apikey = useStorage("apiKey", "");

  if (apikey.value) appStore.apiKey = apikey.value;
};

export default useSetupApp;
