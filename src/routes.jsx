import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./views/Home/Home";
import Login from "./views/login/Login";

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
        path: "/rutinas",
        element: <Routines />,
      },
      {
        path: "/planes",
        element: <Plans />,
      },
      {
        path: "/nosotros",
        element: <Us />,
      },
    ],
    path: "/login",
    element: <Login/>
  },
]);

export default router;
