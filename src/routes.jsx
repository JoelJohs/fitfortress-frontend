import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./views/Home/Home";
import Login from "./views/login/Login";
import Rutinas from "./views/rutinas/Rutinas";

import Routines from "./views/Rutinas/Routines";
import Plans from "./views/Planes/Plans";
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
              path: "login", // No es necesario el "/" al inicio
              element: <Login />,
          },
          {
              path: "rutinas",
              element: <Routines />,
          },
      ],
  },
]);

export default router;
