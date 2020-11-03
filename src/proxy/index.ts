import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://testadmin03.518dai.com';

axios.interceptors.response.use((res: AxiosResponse) => {
  return res;
}, (error) => {
  // console.log(error);
  return error.response;
})

export default axios;
