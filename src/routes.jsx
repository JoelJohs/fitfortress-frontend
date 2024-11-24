import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./views/login/Login";
import Plan from "./views/Planes/Plan";
import BlogDetail from "./views/Home/pages/BlogDetail";
import Home from "./views/Home/Home";
import Us from "./views/Nosotros/Us";
import Rutinas from "./views/rutinas/Rutinas";
import ChatBot from "./views/chatbot/ChatBot";
import AllBlogs from "./views/blogs/AllBlogs";
import NotFound from "./404";
import UserProfile from "./views/user/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog/:id", // Ruta dinámica para los blogs
        element: <BlogDetail />,
      },
      {
        path: "login", // No es necesario el "/" al inicio
        element: <Login />,
      },
      {
        path: "rutinas",
        element: <Rutinas />,
      },

      {
        path: "plan",
        element: <Plan />,
      },
      {
        path: "nosotros",
        element: <Us />,
      },
      {
        path: "chatbot",
        element: <ChatBot />,
      },
      {
        path: "blogs",
        element: <AllBlogs />,
      },
      {
        path: "perfil/:username",
        element: <UserProfile />,
      },
    ],
  }, // 404
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
