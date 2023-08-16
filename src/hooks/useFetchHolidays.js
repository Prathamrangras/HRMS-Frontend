import { useState } from "react";
import customFetch from "../utils/customFetch";
import { useHolidayContext } from "../context/HolidaysContext";

export const useFetchHoliday = () => {
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const { setHoliday, setLoading } = useHolidayContext();

  // create holidays
  const createHoliday = async (obj) => {
    setLoading(true);
    try {
      const resp = await customFetch.post(`/holiday/create`, obj);
      console.log(resp.data);
      if (!resp.data.error) {
        setHoliday((prev) => {
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

  //get all holidays
  const getHolidays = async () => {
    setLoading(true);

    const resp = await customFetch.get(`/holiday`);
    if (!resp.data.error) {
      setHoliday(resp.data.data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  //delete a holiday

  const deleteHoliday = async (id) => {
    setIsDeleting(true);
    setError(null);
    try {
      await customFetch.delete(`/holiday/${id}`);
    } catch (error) {
      setError(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return { error, getHolidays, createHoliday, deleteHoliday };
};
