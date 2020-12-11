import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { config } from 'process';

const baseURL = 'http://testadmin03.518dai.com';

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log(3);
  config.url = `${baseURL}${config.url}`;
  config.headers.origin = baseURL;
  config.headers.referer = baseURL;
  return config;
});

axios.interceptors.response.use((res: AxiosResponse | any) => {
  console.log(5);
  return res;
}, (error) => {
  // console.log(error);
  console.log('err');
  return error;
})

export default axios;
