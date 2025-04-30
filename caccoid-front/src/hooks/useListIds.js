import { useState, useEffect } from "react";
import { useAPI } from "./useAPI";

export const useListIds = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // eslint-disable-next-line no-undef
  const api = useAPI(process.env.REACT_APP_API_BASE_URL);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get(endpoint);
        setData(response.data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api, endpoint]);

  return { data, loading, error };
};