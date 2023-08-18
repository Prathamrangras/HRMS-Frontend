import { useState } from "react";
import { useLeaveContext } from "../context/LeaveContext";
import customFetch from "../utils/customFetch";

export const useFetchLeave = () => {
  const [error, setError] = useState(null);
  const { setLeave, setLoading } = useLeaveContext();

  //create leave

  const createLeave = async (obj) => {
    setLoading(true);
    try {
      const resp = await customFetch.post(`/leave/create`, obj);
      console.log(resp.data);
      if (!resp.data.error) {
        setLeave((prev) => {
          console.log(prev);
          return [...prev, resp.data];
        });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  //get all leaves

  const getLeave = async () => {
    setLoading(true);

    const resp = await customFetch.get(`/leave`);
    if (!resp.data.error) {
      setLeave(resp.data.data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return { error, getLeave, createLeave };
};
