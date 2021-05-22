import React, { useCallback } from 'react';
import {
  Box,
  Text,
  Center,
  Grid,
  GridItem,
  Button,
  Divider,
  Checkbox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Flex,
  useDisclosure,
  Heading,
  Stack,
  Container,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CKEditor from './CKEditorWrapper';

const Editor = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  const renderAgenda = useCallback(
    () => (
      <Box
        w={260}
        borderRadius={20}
        border="1px"
        bg="white"
        borderColor="gray.200"
        pb={3}
      >
        <Text fontSize={14} ml={7}>
          Agenda
        </Text>
        <Divider />
        <Stack spacing={-5} pl={3}>
          {tasks.map(() => (
            <Box w="170px" key={tasks.id} minh="10px">
              <Checkbox size="sm" key={tasks.id}>
                <Text fontSize={12}>Hello Worldvfsdvfdkmdfkmvkldmvlmvfff</Text>
              </Checkbox>
            </Box>
          ))}
        </Stack>
      </Box>
    ),
    []
  );

  const recipients = [
    {
      name: 'Alice',
      id: '1',
    },
    {
      name: 'Bobby',
      id: '2',
    },
    {
      name: 'Claire',
      id: '3',
    },
    {
      name: 'Dominic',
      id: '4',
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
          <GridItem>{renderAgenda()}</GridItem>
          <CKEditor {...{ data }} config={{ height: '100%' }} />
          <GridItem>
            <Box>
              <Button colorScheme="blue" onClick={onOpen}>
                Add meeting
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New meeting</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="row">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              height="500px"
              initialView="timeGridWeek"
              views={['dayGridMonth', '', 'timeGridDay']}
              viewClassNames="dayGridMonth"
              slotLabelFormat={{ hour: 'numeric', minute: '2-digit' }}
              eventTimeFormat={{
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              }}
            />
            <Flex flexDirection="column" marginLeft="45px" width="200px">
              {recipients?.map(recipient => (
                <Heading size="xs" key={recipient?.id} mb="3px">
                  {recipient?.name}
                </Heading>
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="solid" colorScheme="teal">
              Send invitation emails
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Editor;
