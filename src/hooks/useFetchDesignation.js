import { useState } from "react";
import customFetch from "../utils/customFetch";
import { useEmployeeContext } from "../context/EmployeeContext";

export const useFetchDesignation = () => {
  const [error, setError] = useState(null);
  const { setDesignation, setLoading } = useEmployeeContext();

  const getDesignations = async (id) => {
    setLoading(true);

    const resp = await customFetch.get(`/designation`);
    if (!resp.data.error) {
      setDesignation(resp.data.data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };
  return { error, getDesignations };
};
