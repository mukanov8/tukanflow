import React from 'react';
import { Checkbox, CheckboxGroup, VStack } from '@chakra-ui/react';
import withBoxHeader from '../withBoxHeader';

const Agenda = ({ tasks }) => {
  console.log({ tasks });
  return (
    <VStack display="flex" alignItems="flex-start">
      {tasks.map(task => (
        <Checkbox
          isChecked={task.isDone}
          key={task.id}
          onChange={e => console.log(e.target.value)}
        >
          {task.text} | {task.author}
        </Checkbox>
      ))}
    </VStack>
  );
};

export default withBoxHeader('Agenda', Agenda);
