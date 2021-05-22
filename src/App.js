import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './utils/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box display="flex" overflowY="visible" flex="1">
        Code goes here
      </Box>
    </ChakraProvider>
  );
}

export default App;
