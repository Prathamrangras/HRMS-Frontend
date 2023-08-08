import { useState } from "react";
import customFetch from "../utils/customFetch";
import { useEmployeeContext } from "../context/EmployeeContext";

export const useFetchDepartment = () => {
  const [error, setError] = useState(null);

  const { setDepartment, setLoading } = useEmployeeContext();

  const getDepartment = async (id) => {
    setLoading(true);

    const resp = await customFetch.get(`/department`);
    console.log(resp);
    if (!resp.data.error) {
      setDepartment(resp.data.data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };
  return { error, getDepartment };
};
