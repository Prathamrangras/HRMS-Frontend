import { useState } from "react";
import customFetch from "../utils/customFetch";
import { useClientContext } from "../context/ClientContext";

export const useFetchClient = () => {
  const [error, setError] = useState(null);
  const { setClient, setcurrentClient, setLoading } = useClientContext();

  const getAllClients = async () => {
    setLoading(true);

    try {
      const resp = await customFetch.get("/client");
      if (!resp.data.error) {
        setClient(resp.data.data);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const getSingleclient = async (id) => {
    setLoading(true);
    const resp = await customFetch.get(`/client/${id}`);
    console.log(resp.data);
    if (!resp.data.error) {
      setcurrentClient(resp.data.data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const addclient = async (obj, id) => {
    setLoading(true);
    console.log(obj);
    const resp = await customFetch.post(`/client/create`, {
      client: { ...obj, id },
      CreatorId: id,
    });

    console.log(resp.data);

    if (!resp.data.error) {
      setClient((prev) => {
        if (Array.isArray(prev)) {
          return [...prev, resp.data.data];
        } else {
          return [prev, resp.data.data];
        }
      });

      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return { error, getAllClients, getSingleclient, addclient };
};
