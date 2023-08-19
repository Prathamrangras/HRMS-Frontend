import { useState } from "react";
import customFetch from "../utils/customFetch";
import { useHolidayContext } from "../context/HolidaysContext";
import { usePopupContext } from "../context/PopupContext";
export const useFetchHoliday = () => {
  const [error, setError] = useState(null);
  const { setHoliday, setLoading } = useHolidayContext();
  const { isEdit } = usePopupContext();

  const getHolidays = async (id) => {
    setLoading(true);

    const resp = await customFetch.get(`/holiday`);
    console.log(resp);
    if (!resp.data.error) {
      setHoliday(resp.data.data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const addHolidays = async (obj) => {
    setLoading(true);

    let resp;

    if (isEdit) {
      resp = await customFetch.patch(`Holiday/${isEdit}`, obj);
    } else {
      resp = await customFetch.post(`/Holiday/create`, obj);
    }

    if (!resp.data.error) {
      console.log(resp.data);
      setHoliday((prev) => [...prev, resp.data]);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const deleteHolidays = async (id) => {
    setLoading(true);

    console.log("hello");

    const resp = await customFetch.delete(`/Holidays/${id}`);

    if (!resp.data.error) {
      console.log(resp.data);
      setHoliday((prev) => prev.filter((e) => e._id !== id));
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return { error, getHolidays, addHolidays, deleteHolidays };
};
