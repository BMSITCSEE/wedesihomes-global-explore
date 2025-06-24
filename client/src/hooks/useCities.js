import { useState, useEffect } from 'react';
import api from '../services/api';

const useCities = (country = null) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCities();
  }, [country]);

  const fetchCities = async () => {
    try {
      setLoading(true);
      const endpoint = country 
        ? /cities/country/${country}
        : '/cities';
      const { data } = await api.get(endpoint);
      setCities(data.cities);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { cities, loading, error };
};

export default useCities;