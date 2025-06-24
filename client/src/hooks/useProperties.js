import { useState, useEffect } from 'react';
import { propertyService } from '../services/property.service';

const useProperties = (filters = {}) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
  });

  useEffect(() => {
    fetchProperties();
  }, [filters]);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await propertyService.getProperties(filters);
      setProperties(response.properties);
      setPagination({
        currentPage: response.currentPage,
        totalPages: response.totalPages,
        totalCount: response.count,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const refreshProperties = () => {
    fetchProperties();
  };

  return {
    properties,
    loading,
    error,
    pagination,
    refreshProperties,
  };
};

export default useProperties;