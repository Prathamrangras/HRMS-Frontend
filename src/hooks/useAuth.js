import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import customFetch from "../utils/customFetch";
import {
  addTokenToLocalStorage,
  addUserToLocalStorage,
  getTokenFromLocalStorage,
} from "../utils/localstorage";

export const useAuth = () => {
  const { setUser } = useAuthContext();
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);

    const resp = await customFetch.post("/employee/login", {
      email: email,
      password: password,
    });
    if (!resp.data.error) {
      addUserToLocalStorage(resp.data.user);
      addTokenToLocalStorage(resp.data.token);

      setUser(resp.data.user);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return { loading, error, login };
};
