import { useState } from "react";
import customFetch from "../utils/customFetch"; 
import { usePopupContext } from "../context/PopupContext";
import { useHolidaysContext } from "../context/HolidaysContext";

export const useFetchHoliday = () => {
  const [error, setError] = useState(null);
  const { setHolidays, setLoading } = useHolidaysContext();
  const { Edit } = usePopupContext();

  const getHoliday = async () => {
    setLoading(true);
    try {
      const resp = await customFetch.get(`/Holiday`);
      console.log(resp.data.data)
      if (!resp.data.error) {
        setHolidays(resp.data.data);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const addHoliday = async (obj) => {
    setLoading(true);
  
    try {
      let resp;
      console.log(obj)
      if (Edit) {
        resp = await customFetch.patch(`Holiday/${Edit}`, obj);
      } else {
        resp = await customFetch.post(`/Holiday/create`, obj);
      }
  
      if (!resp.data.error) {
        console.log(resp); 
        setHolidays((prev) => [...prev, resp.data]); 
        return resp.data; 
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  

  const deleteHoliday = async (id) => {
    setLoading(true);

    try {
      console.log("hello");

      const resp = await customFetch.delete(`/Holiday/${id}`);

      if (!resp.data.error) {
        setHolidays((prev) => [...prev, resp.data]);
        return resp.data;
      } else {
        setError(true);
      }
      
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { error, getHoliday, addHoliday, deleteHoliday };
};
