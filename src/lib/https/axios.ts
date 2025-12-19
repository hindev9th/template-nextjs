import axiosMain, { AxiosInstance } from 'axios';

// Tạo một instance của Axios
const axios : AxiosInstance = axiosMain.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  timeout: 10000, // Timeout 10s
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor cho request (Thêm token nếu có)
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token'); // Lấy token từ localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor cho response (Xử lý lỗi hoặc refresh token nếu 401)
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // if (error.response?.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   try {
    //     const { data } = await axios.post('/auth/refresh-token', {
    //       refreshToken: localStorage.getItem('refresh_token'),
    //     });
    //     localStorage.setItem('access_token', data.accessToken);
    //     originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
    //     return axios(originalRequest); // Thử lại request gốc
    //   } catch (refreshError) {
    //     console.error('Token refresh failed:', refreshError);
    //   }
    // }
    return Promise.reject(error);
  }
);

export default axios;
