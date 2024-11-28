import api from "./apiContext";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getBlogs = async () => {
  try {
    const response = await api.get(`${API_URL}/blogs`);
    return response.data.blogs; // Devuelve solo el array de blogs
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await api.get(`${API_URL}/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post(`${API_URL}/auth/login`, credentials, {
      withCredentials: true, // Para enviar y recibir cookies
    });
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error.response.data.message || error.message;
  }
};

export const registerUser = async (newUser) => {
  try {
    const response = await api.post(`${API_URL}/auth/register`, newUser);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error.response.data.message || error.message;
  }
};

export const logoutUser = async () => {
  try {
    await api.post(`${API_URL}/auth/logout`);
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

export const getUserByUsername = async (username) => {
  try {
    const response = await api.get(`${API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

//** Blogs **/
// Crear Blog
export const createBlog = async (blogData) => {
  try {
    const formData = new FormData();

    // Agregamos cada campo al FormData
    formData.append("titulo", blogData.titulo);
    formData.append("contenido", blogData.contenido);
    formData.append("categoria", blogData.categoria);
    formData.append("etiquetas", blogData.etiquetas.join(",")); // Etiquetas separadas por comas
    formData.append("imagen", blogData.imagen); // Archivo de imagen

    const response = await api.post(`${API_URL}/blogs`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Especificamos que es un form-data
      },
      withCredentials: true, // Para enviar cookies si usas autenticación
    });

    return response.data; // Devuelve la respuesta del servidor
  } catch (error) {
    console.error("Error al crear el blog:", error);
    throw error.response?.data?.mensaje || error.message;
  }
};

// Eliminar Blog
export const deleteBlog = async (id) => {
  try {
    await api.delete(`${API_URL}/blogs/${id}`);
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw error;
  }
};