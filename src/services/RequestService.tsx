import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import debounce from 'lodash/debounce';
import { message } from 'antd';

export interface RequestConfig extends AxiosRequestConfig {}

export interface Response<T> extends AxiosResponse<T> {}

export const axiosInstance = axios.create();

axiosInstance.defaults.withCredentials = true; // enable axios post cookie

/* Debounce to avoid duplicate notifications */
const handleNotification = debounce(
  (msg: string) =>
    message.error({
      content: msg,
      duration: 5,
      key: msg,
      onClick: () => message.destroy(msg),
    }),
  100,
);

// Generic error handler
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (!error.response) handleNotification('Network error!');
    else if (error && error.response) {
      if (error.response.status === 500) {
        handleNotification('500 Error');
      } else if (error.response.status === 406) handleNotification('406 Error');
    }

    return Promise.reject(error);
  },
);

/**
 * Service to encapsulate axios in case we want to remove axios later on.
 */
class RequestService {
  /**
   * Performs a GET request.
   * @param url - Request url
   * @param config  - Request configs
   */
  public static get<T>(
    url: string,
    config: RequestConfig = {},
  ): Promise<Response<T>> {
    return axiosInstance.get<T, Response<T>>(url, config);
  }

  /**
   * Performs a POST request.
   * @param url - Request url
   * @param config  - Request configs
   */
  public static post<T>(
    url: string,
    data?: unknown,
    config?: RequestConfig,
  ): Promise<Response<T>> {
    return axiosInstance.post<T, Response<T>>(url, data, config);
  }

  /**
   * Performs a PUT request.
   * @param url - Request url
   * @param config  - Request configs
   */
  public static put<T>(
    url: string,
    data?: unknown,
    config?: RequestConfig,
  ): Promise<Response<T>> {
    return axiosInstance.put<T, Response<T>>(url, data, config);
  }

  /**
   * Performs a PATCH request.
   * @param url - Request url
   * @param config  - Request configs
   */
  public static patch<T>(
    url: string,
    data?: unknown,
    config?: RequestConfig,
  ): Promise<Response<T>> {
    return axiosInstance.patch<T, Response<T>>(url, data, config);
  }

  /**
   * Performs a DELETE request.
   * @param url - Request url
   * @param config  - Request configs
   */
  public static delete<T>(
    url: string,
    config?: RequestConfig,
  ): Promise<Response<T>> {
    return axiosInstance.delete<T, Response<T>>(url, config);
  }

  /**
   * Performs a DELETE request with body.
   * @param url - Request url
   * @param data - Request payload
   * @param config  - Request configs
   */
  public static deleteWithBody<T>(
    url: string,
    data: unknown,
    config?: RequestConfig,
  ): Promise<Response<T>> {
    const requestConfig: RequestConfig = {
      method: 'delete',
      url,
      data,
      withCredentials: true,
      ...config,
    };

    return axios.request(requestConfig);
  }
}

export default RequestService;
