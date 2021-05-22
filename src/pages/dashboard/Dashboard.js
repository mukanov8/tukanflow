import React from 'react';
import { Box, Text, Center, Wrap, Flex, Circle } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const Dashboard = ({ data }) => {
  const dummy = [
    { id: '123' },
    { id: '345' },
    { id: '567' },
    { id: '789' },
    { id: '987' },
  ];
  const wrapItems = () =>
    dummy.map(item => (
      <Flex
        as="button"
        direction="column"
        align="center"
        _hover={{ bg: 'gray.100', borderRadius: 20 }}
        _active={{
          bg: '#dddfe2',
          transform: 'scale(0.98)',
          borderColor: '#bec3c9',
        }}
        key={item.id}
        p={2}
      >
        <Box
          w="240px"
          h="160px"
          border="1px"
          borderColor="gray.200"
          borderRadius={20}
          boxShadow="inner"
          mb="3"
        />
        <Text fontSize={16}>Hello</Text>
      </Flex>
    ));
  return (
    <Center>
      <Box w={1000} mt={50}>
        <Text fontSize={36} fontWeight="bold" mb={50} pl={10}>
          Dashboard
        </Text>
        <Wrap spacing="50px" shouldWrapChildren={true} justify="center">
          {wrapItems()}
        </Wrap>
        <Flex justify="flex-end">
          <Circle
            as="button"
            bgGradient="linear(to-r, #6C7789, #4A5568)"
            w="80px"
            h="80px"
            m={30}
            boxShadow="lg"
            _hover={{ bg: 'gray.600', borderRadius: 40 }}
            _active={{
              bg: '#dddfe2',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
            }}
          >
            <AddIcon color="white" fontSize={20} />
          </Circle>
        </Flex>
      </Box>
    </Center>
  );
};

export default Dashboard;
