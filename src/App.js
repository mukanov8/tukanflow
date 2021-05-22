import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './utils/theme';
import './index.css';
import PublicPage from './pages/PublicPage';
import DashboardContainer from './pages/dashboard/Dashboard.container';
import PipelineContainer from './pages/pipeline/Pipeline.container';
import EditorContainer from './pages/editor/Editor.container';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <BrowserRouter>
        <Route exact path="/" component={PublicPage} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/pipeline/:id" component={PipelineContainer} />
        <Route exact path="/editor/:id" component={EditorContainer} />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
