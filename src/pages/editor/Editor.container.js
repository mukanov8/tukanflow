import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Spinner } from '@chakra-ui/react';

import Editor from './Editor';

const GET_STAGE = gql`
  query stage($id: ID!) {
    stage(id: $id) {
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
          email
        }
        status
      }
      goals {
        text
        status
        author {
          id
          username
          email
        }
      }
      summary
    }
  }
`;

const EditorContainer = props => {
  const stageId = props?.match?.params?.id;
  const [stage, setStage] = useState(null);
  const { data, error, loading } = useQuery(GET_STAGE, {
    variables: {
      id: stageId,
    },
  });

  useEffect(() => {
    if (data && data.stage) {
      setStage(data.stage);
    }
  }, [data, error, loading]);

  if (!stage) {
    return <Spinner size="xl" />;
  }
  console.log({ stage });
  return <Editor stage={stage} />;
};

export default EditorContainer;
