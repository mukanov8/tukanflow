import React from 'react';
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
} from '@chakra-ui/react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarModal = ({ isOpen, onClose, recipients, ...props }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New meeting</ModalHeader>
        <ModalCloseButton autoFocus={false} />
        <ModalBody display="flex" flexDirection="row" p="28px">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            height="500px"
            width="400px !important"
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
            {recipients?.map(recipient => (
              <>
                <Text size="lg" fontWeight="bold" key={recipient?.id}>
                  {recipient?.name}
                </Text>
                <Text
                  fontSize="xs"
                  key={recipient?.id + recipient?.email}
                  mb="3px"
                >
                  {recipient?.email}
                </Text>
              </>
            ))}
            <Button
              variant="link"
              size="sm"
              w="120px"
              mt="6px"
              fontWeight="450"
            >
              add new assignee
            </Button>
            <Button
              variant="solid"
              size="sm"
              borderRadius="8px"
              colorScheme="green"
              mt="auto"
              onClick={() => console.log('sent invitation emails')}
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
