import { useState } from "react";
import customFetch from "../utils/customFetch"; 
import { usePopupContext } from "../context/PopupContext";
import { useHolidaysContext } from "../context/HolidaysContext";

export const useFetchHoliday = () => {
  const [error, setError] = useState(null);
  const { setHoliday, setLoading } = useHolidaysContext();
  const { isEdit } = usePopupContext();

  const getHoliday = async () => {
    setLoading(true);
    try {
      const resp = await customFetch.get(`/Holiday`);
      if (!resp.data.error) {
        setHoliday(resp.data.data);
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
  
      if (isEdit) {
        resp = await customFetch.patch(`Holiday/${isEdit}`, obj);
      } else {
        resp = await customFetch.post(`/Holiday/create`, obj);
      }
  
      if (!resp.data.error) {
        console.log(resp.data); 
        setHoliday((prev) => [...prev, resp.data]); 
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
        setHoliday((prev) => [...prev, resp.data]);
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
