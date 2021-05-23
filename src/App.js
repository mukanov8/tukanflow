import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  concat,
} from '@apollo/client';

import theme from './utils/theme';
import './index.css';
import PublicPage from './pages/PublicPage';
import DashboardContainer from './pages/dashboard/Dashboard.container';
import PipelineContainer from './pages/pipeline/Pipeline.container';
import EditorContainer from './pages/editor/Editor.container';

const httpLink = new HttpLink({
  uri: 'https://tukanflow-nodejs-backend.azurewebsites.net/graphql',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem('token');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  });

  return forward(operation);
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

function App() {
  // resetCSS={false}
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Route exact path="/" component={PublicPage} />
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route exact path="/pipeline/:id" component={PipelineContainer} />
          <Route
            exact
            path="/editor/:parentId/:id"
            component={EditorContainer}
          />
        </BrowserRouter>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
