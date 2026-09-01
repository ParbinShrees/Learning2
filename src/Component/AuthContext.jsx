import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const AuthContext =
  createContext(null);


export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {

    try {

      const storedUser =
        localStorage.getItem("user");

      return storedUser
        ? JSON.parse(storedUser)
        : null;

    } catch {

      return null;

    }

  });


  useEffect(() => {

    if (user) {

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

    } else {

      localStorage.removeItem("user");

    }

  }, [user]);


  async function login(username, password) {

    const response = await fetch(
      "https://dummyjson.com/auth/login",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          username,
          password
        })
      }
    );


    if (!response.ok) {

      const errorData =
        await response
          .json()
          .catch(() => ({}));


      throw new Error(
        errorData.message ||
        "Invalid username or password"
      );

    }


    const data =
      await response.json();


    setUser(data);

    return data;

  }


  function logout() {

    setUser(null);

  }


  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );

}


export function useAuth() {

  return useContext(
    AuthContext
  );

}