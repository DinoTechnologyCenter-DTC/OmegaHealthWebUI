import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the JWT token in requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const authService = {
  register: async (userData: { name: string; email: string; password: string }) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  login: async (credentials: { email: string; password: string }) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getCurrentUser: async () => {
    const response = await api.get('/profile');
    return response.data;
  },

  updateProfile: async (userData: { name?: string; password?: string }) => {
    const response = await api.put('/profile', userData);
    return response.data;
  },

  uploadProfilePicture: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await api.post('/profile/picture', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

export const hospitalService = {
  getAllHospitals: async () => {
    const response = await api.get('/hospitals');
    return response.data;
  },

  getHospitalById: async (id: string) => {
    const response = await api.get(`/hospitals/${id}`);
    return response.data;
  },
};

export const contentService = {
  getHealthTips: async () => {
    const response = await api.get('/tips');
    return response.data;
  },

  getTestimonials: async () => {
    const response = await api.get('/testimonials');
    return response.data;
  },
};
