import React from 'react';
import { Box } from '@chakra-ui/react';
import styled from 'styled-components';
import CKEditor from './CKEditorWrapper';

import Agenda from './agenda/Agenda';

const MainContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 30px 0px 30px;
`;

const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 90px;
`;

const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 240px;
  margin-right: 36px;
`;

const RightColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 240px;
`;

const Editor = ({ data }) => {
  console.log('arrow function uspokoisya');

  const tasks = [
    {
      isDone: true,
      id: 123,
      text: 'poiti v gym',
      author: 'john doe',
    },
    {
      isDone: true,
      id: 432,
      text: 'poiti v kachalku',
      author: 'john wick',
    },
    {
      isDone: false,
      id: 231,
      text: 'poiti v trenajerku',
      author: 'john month',
    },
  ];

  return (
    <MainContainer>
      <HeaderContainer>
        <h2> Editor </h2>
      </HeaderContainer>
      <ContentContainer>
        <LeftColumn>
          <Agenda tasks={tasks} />
        </LeftColumn>
        <CKEditor {...{ data }} />
        <RightColumn>sobaka</RightColumn>
      </ContentContainer>
    </MainContainer>
  );
};

export default Editor;
