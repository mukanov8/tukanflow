import React, { useCallback } from 'react';
import {
  Box,
  Text,
  Center,
  Button,
  Divider,
  Checkbox,
  Flex,
  useDisclosure,
  Heading,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import CKEditor from './CKEditorWrapper';
import CalendarModal from './CalendarModal';

const Editor = ({ stage, parentId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const FloatingBox = useCallback(({ children, title, styleProps }) => (
    <Box
      w="260px"
      h="max-content"
      borderRadius="20px"
      bg="white"
      boxShadow="rgba(149, 157, 165, 0.2) 0px 4px 24px"
      mt="20px"
      {...styleProps}
    >
      <Text fontSize="sm" fontWeight="bold" p="12px 22px">
        {title}
      </Text>
      <Divider />
      {children}
    </Box>
  ));
  const Agenda = useCallback(
    () => (
      <FloatingBox title="Agenda" styleProps={{ mr: '40px' }}>
        <Stack spacing="-5px" p="14px 10px">
          {stage?.goals.map(goal => (
            <Flex w="100%" key={tasks.id} minh="18px" py="8px">
              <Checkbox
                iconSize="sm"
                key={tasks.id}
                colorScheme="green"
                defaultChecked={goal?.status === 'done'}
              />
              <Flex flexDirection="column" ml="5px">
                <Text fontSize="14px" width="200px">
                  {goal?.text}
                </Text>
                <Text fontSize="11px" color="gray.400">
                  {goal?.author?.email}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Stack>
      </FloatingBox>
    ),
    []
  );

  const Summary = useCallback(
    () => (
      <FloatingBox title="Summary of the previous document">
        <Text p="14px 19px" fontSize="12px">
          {stage?.summary}
        </Text>
      </FloatingBox>
    ),
    []
  );

  const Approvals = useCallback(
    () => (
      <FloatingBox title="Approvals">
        <Stack spacing="-5px" p="14px 10px">
          {stage?.approvals.map(approval => (
            <Flex w="100%" key={tasks.id} minh="18px" py="8px">
              <Checkbox
                iconSize="sm"
                key={tasks.id}
                colorScheme="green"
                defaultChecked={approval?.status === 'accepted'}
              />
              <Text fontSize="sm" width="200px" ml="10px">
                {approval?.user?.email}
              </Text>
            </Flex>
          ))}
        </Stack>
      </FloatingBox>
    ),
    []
  );

  const recipients = [
    {
      name: 'Anuar Talipov',
      email: 'anuar@tukangambit.onmicrosoft.com',
      id: '1',
    },
    {
      name: 'Kunduz Baryktabasova',
      email: 'kunduzb17@tukangambit.onmicrosoft.com',
      id: '2',
    },
    {
      name: 'Ayan Mukanov',
      email: 'ayan@tukangambit.onmicrosoft.com',
      id: '3',
    },
    {
      name: 'Bauyrzhan Tokenov',
      email: 'bauka@tukangambit.onmicrosoft.com',
      id: '4',
    },
  ];

  return (
    <Box m="28px" h="max-content">
      <Link to={`/pipeline/${parentId}`}>
        <Button
          w="270px"
          color="gray.500"
          ml="16px"
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
          <ArrowBackIcon as="u" fontSize="sm" />
          <Text as="u" fontSize="sm" ml="5px">
            {stage?.name}
          </Text>
        </Button>
      </Link>
      <Heading as="h2" size="lg" textAlign="center" mb="24px">
        {stage?.title}
      </Heading>
      <Center flexDirection="column">
        <Flex>
          <Box>
            <Agenda />
            <Summary />
          </Box>
          <CKEditor {...{ text: stage?.text }} config={{ height: '100%' }} />
          <Box ml="40px">
            <Flex justifyContent="space-around" mt="20px">
              <Button colorScheme="yellow" onClick={onOpen}>
                Add meeting
              </Button>
              <Button colorScheme="green">Approve</Button>
            </Flex>
            <Approvals />
          </Box>
        </Flex>
      </Center>
      <CalendarModal
        isOpen={isOpen}
        onClose={onClose}
        recipients={stage?.approvals}
        size="3xl"
        isCentered
      />
    </Box>
  );
};

export default Editor;
