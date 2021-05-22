import { Box, Text, Heading, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import React from 'react';
import theme from '../../utils/theme';
import Item from './Item';
import ArrowRight from '../../icons/ArrowRight';

const dummy = [
  {
    title: 'Pitch Deck',
    status: 100,
  },
  {
    title: 'Business Requirements',
    status: 50,
  },
  {
    title: 'Software Requirements',
    status: 0,
  },
];

const Pipeline = ({ data }) => {
  console.log(data);
  return (
    <Box w="90%" h="100vh" display="flex" mx="auto" flexDirection="column">
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
          Go to Dashboard
        </Text>
      </Button>
      <Box h="40%" display="flex" flexDirection="column" pt="36px" pb="66px">
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          justifyContent="flex-start"
        >
          Documentation Pipeline
        </Heading>
        <Text
          w="100%"
          textAlign="center"
          fontSize="2xl"
          mt="auto"
          b
          justifyContent="center"
        >
          Develop streak feature for video
        </Text>
      </Box>
      <Box
        h="60%"
        display="flex"
        mb="auto"
        mx="auto"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <Box
          display="flex"
          flexDirection="row"
          w="828px"
          justifyContent="center"
          alignItems="center"
        >
          {dummy.map((item, i) => (
            <>
              <Item
                index={i + 1}
                key={i.toString()}
                itemData={item}
                mx="36px"
              />
              {item.status !== 0 && (
                <Box mb="32px">
                  <ArrowRight
                    color={
                      item.status === 100
                        ? theme.colors.black
                        : theme.colors.gray[400]
                    }
                  />
                </Box>
              )}
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Pipeline;
