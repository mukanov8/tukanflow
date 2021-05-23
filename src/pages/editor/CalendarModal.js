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
} from '@chakra-ui/react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import theme from '../../utils/theme';

const CalendarModal = ({ isOpen, onClose, recipients, ...props }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [isTextOpen, setIsTextOpen] = useState(false);
  const [name, setName] = React.useState('');
  const [meetingTimes, setMeetingTimes] = useState([]);
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
    recipients.map(recipient => setEmails([...emails, recipient?.user?.email]));
    // console.log(emails, 'set');
  }, []);

  useEffect(() => {
    if (isOpen) {
      const emailsList = [];
      recipients.map(recipient => emailsList.push(recipient?.user?.email));
      setEmails([...emails, emailsList]);

      const prodUrl =
        'https://tukanflow-nodejs-backend.azurewebsites.net/findmeeting';
      // const prodUrl = 'http://localhost:6001/findmeeting';
      axios({
        method: 'POST',
        url: prodUrl,
        data: emailsList,
      })
        .then(response => {
          setMeetingTimes(response.data);
        })
        .catch(error => {
          console.log({ error });
        });
    }
  }, [isOpen]);

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

// {
//   "subject": "My event",
//   "start": {
//       "dateTime": "2021-05-23T02:51:47.348Z",
//       "timeZone": "UTC"
//   },
//   "end": {
//       "dateTime": "2021-05-30T02:51:47.348Z",
//       "timeZone": "UTC"
//   },
//   "attendees": [
//       "anuar@tukangambit.onmicrosoft.com",
//       "kunduzb17@tukangambit.onmicrosoft.com"
//   ]
// }
