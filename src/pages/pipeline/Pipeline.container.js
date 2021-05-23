import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from '@chakra-ui/react';

import Pipeline from './Pipeline';

const GET_FEATURE = gql`
  query feature($id: ID!) {
    feature(id: $id) {
      id
      name
      stages {
        id
        name
        thumbnail
        title
        progress
        text
        approvals {
          user {
            id
            username
          }
        }
        goals {
          text
          status
          author {
            id
            username
          }
        }
        summary
      }
    }
  }
`;

const PipelineContainer = props => {
  const featureId = props?.match?.params?.id;
  const [feature, setFeature] = useState(null);
  const { data, error, loading } = useQuery(GET_FEATURE, {
    variables: {
      id: featureId,
    },
  });

  useEffect(() => {
    if (data && data.feature) {
      setFeature(data.feature);
    }
  }, [data, error, loading]);

  if (!feature) {
    return <Spinner size="xl" />;
  }

  return <Pipeline feature={feature} />;
};

export default PipelineContainer;
