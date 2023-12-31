import { useState } from "react";
import customFetch from "../utils/customFetch";
import { useEmployeeContext } from "../context/EmployeeContext";

export const useFetchTeam = () => {
  const [error, setError] = useState(null);
  const { setTeam, setLoading } = useEmployeeContext();

  const getTeam = async (id) => {
    setLoading(true);

    const resp = await customFetch.get(`/team/one/${id}`);
    if (!resp.data.error) {
      setTeam(resp.data.data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const getAllTeams = async () => {
    setLoading(true);

    const resp = await customFetch.get(`/team`);
    if (!resp.data.error) {
      setTeam(resp.data.data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return { error, getTeam, getAllTeams };
};
