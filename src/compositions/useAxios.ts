import axios from "axios";

const useAxios = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
  });
};

export default useAxios;
