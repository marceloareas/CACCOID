import { useState, useEffect } from 'react';
import { useAPI } from './useAPI';

export const useDetailOrder = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const api = useAPI();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get('/solicitation');
        setData(response?.data?.result);
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
