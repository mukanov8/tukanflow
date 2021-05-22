import React from 'react';
import styled from 'styled-components';
import CKEditor from './CKEditorWrapper';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
`;

const Editor = ({ data }) => {
  console.log('arrow function uspokoisya');

  return (
    <MainContainer>
      <CKEditor {...{ data }} />;
    </MainContainer>
  );
};

export default Editor;
