import { createContext, useState, useEffect } from "react";
import { loginUser, logoutUser, getUserByUsername } from "../utils/dbConnection";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("access_token");
        if (token) {
          const user = await getUserByUsername("Usuario"); // Replace "Usuario" with actual username
          if (user && user.username) {
            setUser({
              username: user.username,
              role: user.role,
              authenticated: true,
            });
            console.log("User object after setting state:", {
              username: user.username,
              role: user.role,
              authenticated: true,
            });
          } else {
            throw new Error("Invalid user data");
          }
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        setUser(null);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const token = await loginUser(credentials);
      Cookies.set("access_token", token, { expires: 7 });
      const user = await getUserByUsername(credentials.username);
      if (user && user.username) {
        setUser({
          username: user.username,
          role: user.rol,
          tipoCuenta: user.tipoCuenta,
          authenticated: true,
        });
        console.log("User object after login:", {
          username: user.username,
          rol: user.rol,
          tipoCuenta: user.tipoCuenta,
          authenticated: true,
        });
      } else {
        throw new Error("Invalid user data");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logout = async () => {
    await logoutUser();
    Cookies.remove("access_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
