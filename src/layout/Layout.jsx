import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="outlet-styles">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
