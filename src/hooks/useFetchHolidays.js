import { useState } from "react";
import customFetch from "../utils/customFetch";
import { usePopupContext } from "../context/PopupContext";
import { useHolidaysContext } from "../context/HolidaysContext";

export const useFetchHoliday = () => {
  const [error, setError] = useState(null);
  const { setHolidays, setLoading } = useHolidaysContext();
  const { isEdit } = usePopupContext();

  const getHolidays = async (id) => {
    setLoading(true);

    const resp = await customFetch.get(`/Holidays`);
    if (!resp.data.error) {
      setHolidays(resp.data.data);
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
      setHolidays((prev) => [...prev, resp.data]);
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
      setHolidays((prev) => prev.filter((e) => e._id !== id));
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return { error, getHolidays, addHolidays, deleteHolidays };
};
