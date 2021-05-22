import React, { useCallback } from 'react';
import {
  Box,
  Text,
  Center,
  Spacer,
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
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CKEditor from './CKEditorWrapper';

const Editor = ({ data }) => {
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

  const FloatingBox = useCallback(({ children, title }) => (
    <Box
      as={GridItem}
      minW="260px"
      h="max-content"
      borderRadius="20px"
      bg="white"
      boxShadow="rgba(149, 157, 165, 0.2) 0px 4px 24px"
      mt="20px"
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
      <FloatingBox title="Agenda">
        <Stack spacing="-5px" p="14px 10px">
          {tasks.map(() => (
            <Box w="100%" key={tasks.id} minh="18px" py="8px">
              <Checkbox iconSize="sm" key={tasks.id} colorScheme="green">
                <Text fontSize="sm">Hello World</Text>
              </Checkbox>
            </Box>
          ))}
        </Stack>
      </FloatingBox>
    ),
    []
  );

  const Approvals = useCallback(
    () => (
      <FloatingBox title="Approvals">
        <Stack spacing="-5px" p="14px 10px">
          {tasks.map(() => (
            <Box w="100%" key={tasks.id} minh="18px" py="8px">
              <Checkbox iconSize="sm" key={tasks.id} colorScheme="green">
                <Text fontSize="sm">Hello World</Text>
              </Checkbox>
            </Box>
          ))}
        </Stack>
      </FloatingBox>
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
    <Box m="28px" h="max-content">
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
          Develop streak feature in video player
        </Text>
      </Button>
      <Heading as="h2" size="lg" textAlign="center" mb="24px">
        Business Requirements
      </Heading>

      <Center flexDirection="column">
        <Flex>
          <Agenda />
          <CKEditor {...{ data }} config={{ height: '100%' }} />
          <Box>
            <Button colorScheme="blue" onClick={onOpen} ml="auto">
              Add meeting
            </Button>
            <Button />
            <Approvals />
          </Box>
        </Flex>
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
