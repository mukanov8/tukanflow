import React, { useState, useEffect, useCallback } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Flex,
  Text,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
} from '@chakra-ui/react';
import axios from 'axios';
import theme from '../../utils/theme';

// const dates = [
//   {
//     start: {
//       dateTime: '2021-05-30T23:00:00.0000000',
//       timeZone: 'UTC',
//     },
//     end: {
//       dateTime: '2021-05-31T00:00:00.0000000',
//       timeZone: 'UTC',
//     },
//   },
//   {
//     start: {
//       dateTime: '2021-05-31T00:00:00.0000000',
//       timeZone: 'UTC',
//     },
//     end: {
//       dateTime: '2021-05-31T01:00:00.0000000',
//       timeZone: 'UTC',
//     },
//   },
//   {
//     start: {
//       dateTime: '2021-05-31T01:00:00.0000000',
//       timeZone: 'UTC',
//     },
//     end: {
//       dateTime: '2021-05-31T02:00:00.0000000',
//       timeZone: 'UTC',
//     },
//   },
//   {
//     start: {
//       dateTime: '2021-05-31T02:00:00.0000000',
//       timeZone: 'UTC',
//     },
//     end: {
//       dateTime: '2021-05-31T03:00:00.0000000',
//       timeZone: 'UTC',
//     },
//   },
//   {
//     start: {
//       dateTime: '2021-05-31T03:00:00.0000000',
//       timeZone: 'UTC',
//     },
//     end: {
//       dateTime: '2021-05-31T04:00:00.0000000',
//       timeZone: 'UTC',
//     },
//   },
// ];
const PROD_URL = 'https://tukanflow-nodejs-backend.azurewebsites.net';
// const PROD_URL = 'http://localhost:6001';

const CalendarModal = ({ isOpen, onClose, recipients, ...props }) => {
  const [isTextOpen, setIsTextOpen] = useState(false);
  const [name, setName] = React.useState('');

  const [meetingTimes, setMeetingTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState({});

  const handleInputNameChange = e => {
    const inputValue = e.target.value;
    setName(inputValue);
  };
  const [meetingName, setMeetingName] = useState('New meeting');

  const [email, setEmail] = React.useState('');
  const handleInputEmailChange = e => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const [emails, setEmails] = React.useState([]);

  const onClick = useCallback(() => {
    // recipients.map(recipient => setEmails([...emails, recipient?.user?.email]));
    console.log(selectedTime, 'hey');
    // console.log(emails, 'set');
  }, []);

  useEffect(() => {
    if (isOpen) {
      const emailsList = [];
      recipients.map(recipient => emailsList.push(recipient?.user?.email));
      setEmails([...emails, emailsList]);

      axios({
        method: 'POST',
        url: `${PROD_URL}/findmeeting`,
        data: emailsList,
      })
        .then(response => {
          console.log(response);
          setMeetingTimes(response.data);
          // console.log(meetingTimes, 'times');
        })
        .catch(error => {
          console.log({ error });
        });
    }
  }, [isOpen]);

  const sendInvitation = ({ subject, attendees, start, end }) => {
    axios({
      method: 'POST',
      url: `${PROD_URL}/schedulemeeting`,
      data: {
        subject,
        attendees,
        start,
        end,
      },
    }).then(response => {
      axios({
        method: 'POST',
        url: `${PROD_URL}/invite`,
        data: {
          subject,
          attendees,
          start,
          end,
        },
      }).then(response => {
        console.log('response', response);
      });
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
      {...props}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{meetingName}</ModalHeader>
        <ModalCloseButton autoFocus={false} />
        <ModalBody display="flex" flexDirection="row" p="28px">
          <Box h="500px" w="400px">
            <Table variant="simple" overflow="scroll" size="sm">
              <Thead>
                <Tr>
                  <Th>Start Date</Th>
                  <Th>End Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {meetingTimes.map((date, i) => (
                  <Tr
                    key={i.toString()}
                    cursor="pointer"
                    onClick={() => {
                      console.log(date, 'date');
                      setSelectedTime(selectedTime => date);
                    }}
                    _hover={{ bg: 'gray.100' }}
                    borderRadius="20px"
                    size="sm"
                  >
                    <Td p="0px"> {date?.start?.dateTime} </Td>
                    <Td p="0px"> {date?.end?.dateTime} </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          <Flex flexDirection="column" marginLeft="45px" width="250px">
            {recipients.map(recipient => (
              <>
                <Text fontSize="md" fontWeight="bold" key={recipient?.user?.id}>
                  {recipient?.user?.username}
                </Text>
                <Text
                  fontSize="xs"
                  key={recipient?.user?.id + recipient?.user?.email}
                  mb="3px"
                >
                  {recipient?.user?.email}
                </Text>
              </>
            ))}
            {isTextOpen && (
              <>
                <Input
                  placeholder="Assignee name"
                  fontSize="md"
                  fontWeight="bold"
                  color={theme.colors.gray[600]}
                  minH="24px !important"
                  height="24px !important"
                  p="0px"
                  mt="3px"
                  value={name}
                  onChange={handleInputNameChange}
                  variant="unstyled"
                />
                <Input
                  placeholder="Assignee email"
                  fontSize="xs"
                  type="email"
                  color={theme.colors.gray[600]}
                  p="0px"
                  height="18px !important"
                  minH="18px !important"
                  value={email}
                  onChange={handleInputEmailChange}
                  mb="3px"
                  variant="flushed"
                />
              </>
            )}
            <Button
              variant="link"
              size="sm"
              w="120px"
              mt="6px"
              fontWeight="450"
              as="u"
              onClick={() => setIsTextOpen(isTextOpen => !isTextOpen)}
            >
              add new assignee
            </Button>
            <Button
              variant="solid"
              size="sm"
              borderRadius="8px"
              colorScheme="green"
              mt="auto"
              onClick={() => {
                onClick();
                console.log('sent invitation emails');
              }}
            >
              Send invitation emails
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CalendarModal;
