import { useState } from "react";
import customFetch from "../utils/customFetch";
import { useEmployeeContext } from "../context/EmployeeContext";

export const useFetchEmpployee = () => {
  const [error, setError] = useState(null);
  const { setEmployee, setCurrentEmployee, setLoading } = useEmployeeContext();

  const getEmployees = async (id) => {
    setLoading(true);

    const resp = await customFetch.get(`/employee/getJr`);
    if (!resp.data.error) {
      setEmployee(resp.data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const getSingleEmployees = async (id) => {
    setLoading(true);

    const resp = await customFetch.get(`/employee/${id}`);
    if (!resp.data.error) {
      setCurrentEmployee(resp.data.employee);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const addEmployee = async (obj, id) => {
    setLoading(true);

    const resp = await customFetch.post(`/employee/create`, {
      employee: { ...obj, managerId: [] },
      CreatorId: id,
    });
    if (!resp.data.error) {
      setEmployee((prev) => [...prev, resp.data.data]);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return { error, getEmployees, addEmployee, getSingleEmployees };
};
