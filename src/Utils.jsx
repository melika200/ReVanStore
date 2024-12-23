import axios from "axios";

const Tabledata = axios.create({
  baseURL: "https://sit-bnpl.saminray.com/",
  headers: {
    accept: "text/plain",
    BusinessKey: "1da5ce01-7491-44a2-a823-2f4734ef0aef",
  },
});

Tabledata.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const accessToken = state.auth.user?.value?.tokens?.accesstoken;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default Tabledata;

