import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./views/Home/Home";
import Login from "./views/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
    path: "/login",
    element: <Login/>
  },
]);

export default router;
