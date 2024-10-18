import axios, {
    AxiosInstance,
    AxiosResponse,
    InternalAxiosRequestConfig,
  } from "axios";
  
  const axiosInstance: AxiosInstance = axios.create();
  
  axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    return config;
  });
  
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error) => {
      console.log("Error Interceptor:", error);
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;
  