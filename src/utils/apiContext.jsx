import axios from "axios";

// Crear instancia de Axios con configuración global
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // URL base del backend
  withCredentials: true, // Incluye cookies o tokens en las solicitudes
});

// Manejar respuestas de error globalmente (opcional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error.response?.data || error.message);
  }
);

export default api;
