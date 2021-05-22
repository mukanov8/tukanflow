import React from 'react';
import { Box, Text, Center, Grid, GridItem, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import CKEditor from './CKEditorWrapper';

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
    <Box m={5}>
      <Button
        w={270}
        color="gray.500"
        ml={15}
        variant="outline"
        bg="transparent"
        borderColor="transparent"
        _hover={{ bg: 'transparent' }}
        _focus={{
          boxShadow: '0',
        }}
        _active={{
          color: '#dddfe2',
        }}
      >
        <ArrowBackIcon as="u" fontSize={14} />
        <Text as="u" fontSize={14} ml="5px">
          Develop streak feature in video player
        </Text>
      </Button>
      <Center flexDirection="column">
        <Text fontSize={30} fontWeight="bold">
          Business Requirements
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)">
          <GridItem>
            <Box w="240px" h="240" bg="turquoise" />
          </GridItem>
          <CKEditor {...{ data }} />
          <GridItem>
            <Box />
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
};

export default Editor;
