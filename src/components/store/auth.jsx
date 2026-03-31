import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const storeToken = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token || !!localStorage.getItem("token"); // !! converts to boolean i.e if token is present it will return true else false

  const removeToken = () => {
    setToken(null);
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ storeToken, isLoggedIn, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a authProvider");
  }
  return context;
};
