/** Store api key if exist */

import AppStore from "@/store/AppStore";
import { useStorage } from "@vueuse/core";
import { HTTPError } from "ky";
import useKy from "./useKy";

const useSetupApp = async () => {
  const appStore = AppStore();
  // Setup app
  const apikey = useStorage("apiKey", "");
  console.log("Inside setup app", apikey.value);

  if (!apikey.value) {
    apikey.value = null;
    return;
  }

  appStore.apiKey = apikey.value;
  console.log("Appstore api key setup", appStore.apiKey);

  // Get user
  try {
    const ky = useKy();
    await ky.get("me");
    appStore.isLoggedIn = true;
    console.log("logged in now");
  } catch (error) {
    if (error instanceof HTTPError) {
      if (error.response.status === 401) {
        console.log("User not logged in");
      }
    } else {
      console.log(error);
    }
  }
};

export default useSetupApp;
