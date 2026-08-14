import { createContext, useContext, useEffect, useState } from "react";

// Shares the logged-in user with the whole app (just like CartContext).
const AuthContext = createContext(); //step 1

export function AuthProvider({ children }) {
  // Restore the saved user (if any) on first render so a refresh keeps you
  // logged in.
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  // Calls the DummyJSON auth endpoint.
  // Test credentials: username "emilys", password "emilyspass".
  async function login(username, password) {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.message || "Invalid username or password");
    }
    const data = await res.json(); // { id, username, firstName, image, accessToken, ... }
    setUser(data);
    return data;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}