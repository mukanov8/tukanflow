import React from 'react';
import Editor from './Editor';

const EditorContainer = () => {
  const data = '123';
  console.log(data);
  return <Editor data={data} />;
};

export default EditorContainer;
