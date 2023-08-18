import { useState } from "react";
import customFetch from "../utils/customFetch";
import { useClientContext } from "../context/ClientContext";

export const useFetchClient = () => {
  const [error, setError] = useState(null);
  const { setClient, setcurrentClient, setLoading } = useClientContext();

  const getClient = async (id) => {
    setLoading(true);

    const resp = await customFetch.get(`/client`);
    if (!resp.data.error) {
      setClient(resp.data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const getSingleclient = async (id) => {
    console.log("x");
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

    const resp = await customFetch.post(`/client/create`, {
      client: { ...obj, CompanyName: [] },
      CreatorId: id,
    });

    console.log(resp.data);

    if (!resp.data.error) {
      setClient((prev) => {
        console.log(prev);

        return [...prev, resp.data];
      });

      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return { error, getClient, getSingleclient, addclient };
};
