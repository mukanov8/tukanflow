import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Center, Flex, Circle, Grid } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const Dashboard = ({ features }) => {
  // const dummy = [
  //   { id: '123' },
  //   { id: '345' },
  //   { id: '567' },
  //   { id: '789' },
  //   { id: '987' },
  // ];
  const wrapItems = () =>
    features.map(item => (
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
        <Link to={`/pipeline/${item.id}`}>
          <Box
            w="240px"
            h="160px"
            border="1px"
            borderColor="gray.200"
            borderRadius={20}
            boxShadow="inner"
            mb="3"
            bgImage={`url('${item?.thumbnailURL}')`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          />
          <Text fontSize={16}>{item?.name}</Text>
        </Link>
      </Flex>
    ));
  return (
    <Center>
      <Box my={50} justify="center">
        <Text
          fontSize={36}
          fontWeight="bold"
          mb={50}
          pl="8px"
          textAlign={['center', 'left']}
        >
          Dashboard
        </Text>
        <Grid
          templateColumns={{
            base: 'repeat(1, 0fr)',
            md: 'repeat(2, 0fr)',
            lg: 'repeat(3, 0fr)',
          }}
          gap="20px"
        >
          {wrapItems()}
        </Grid>
        <Circle
          position="fixed"
          right={{
            base: '0',
            md: '12px',
            lg: '60px',
          }}
          bottom={{
            base: '0',
            md: '12px',
            lg: '60px',
          }}
          as="button"
          bgGradient="linear(to-r, #6C7789, #4A5568)"
          w={{
            base: '52px',
            lg: '80px',
          }}
          h={{
            base: '52px',
            lg: '80px',
          }}
          m={30}
          boxShadow="lg"
          _hover={{ bg: 'gray.600' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
        >
          <AddIcon color="white" fontSize={20} />
        </Circle>
      </Box>
    </Center>
  );
};

export default Dashboard;
