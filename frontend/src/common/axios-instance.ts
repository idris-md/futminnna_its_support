import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  InternalAxiosRequestConfig
} from "axios";
import { getSession } from "next-auth/react";

const onRequest = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const session = await getSession();
  if (session) {
    if (session && config && config.headers) {
      (config.headers as AxiosHeaders).set(
        "Authorization",
        `Bearer ${session?.user.accessToken}`
      );
    }
  }

  return Promise.resolve(config);
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const axiosApi = () => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_ROUTE,
    // withCredentials: true,
  });

  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  // axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;

  // api.interceptors.request.use(async (request) => {
  //   const session = await getSession();
  //   console.log(`Bearer ${request}`);
  //   if (session) {
  //     request.headers.common = {
  //       Authorization: `Bearer ${session?.accessToken}`,
  //     };
  //   }
  //   return request;
  // });
  return axiosInstance;
};

export default axiosApi();
