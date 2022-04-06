import AppStore from "@/store/AppStore";
import ky from "ky";

const useKy = () => {
  const appStore = AppStore();

  let kyInstance = ky.create({
    prefixUrl: import.meta.env.VITE_APP_API_URL,
  });

  if (appStore.apiKey)
    kyInstance = kyInstance.extend({
      headers: {
        Authorization: `Bearer ${appStore.apiKey}`,
      },
    });

  return kyInstance;
};

export default useKy;
