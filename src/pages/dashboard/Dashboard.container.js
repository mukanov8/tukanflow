import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from '@chakra-ui/react';
import Dashboard from './Dashboard';

const GET_FEATURES = gql`
  query features {
    features {
      id
      name
    }
  }
`;

const DashboardContainer = () => {
  const [features, setFeatures] = useState(null);
  const { data, error, loading } = useQuery(GET_FEATURES);

  useEffect(() => {
    if (data && data.features) {
      setFeatures(data.features);
    }
  }, [data, error, loading]);

  if (!features) {
    return <Spinner size="xl" />;
  }

  return <Dashboard features={features} />;
};

export default DashboardContainer;
