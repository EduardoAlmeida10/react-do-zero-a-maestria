import { useContext, createContext } from "react";

export function useAuthValue() {
  return useContext(AuthContext);
}

const AuthContext = createContext();

export function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}