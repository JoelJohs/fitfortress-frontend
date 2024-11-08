import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./views/login/Login";
//import Routines from "./views/Rutinas/Routines";
import Plan from "./views/Planes/Plan";
import BlogDetail from "./views/Home/pages/BlogDetail";
import Home from "./views/Home/Home";
import Us from "./views/Nosotros/Us";

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
      //   {
      //     path: "rutinas",
      //     element: <Routines />,
      //   },

      {
        path: "plan",
        element: <Plan />,
      },
      {
        path: "nosotros",
        element: <Us />,
      }
    ],
  },
]);

export default router;
