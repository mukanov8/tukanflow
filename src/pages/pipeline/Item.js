import { Box, Center, Text } from '@chakra-ui/layout';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { Icon } from '@iconify/react';
import checkmarkDoneSharp from '@iconify-icons/ion/checkmark-done-sharp';
import theme from '../../utils/theme';

const SMALL_ITEM_SIZE = 117;
const BIG_ITEM_SIZE = 150;

const Item = ({ index = 1, itemData, ...props }) => {
  const isActive = itemData.progress < 100 && itemData.progress > 0;
  const isPending = itemData.progress === 0;
  const isCompleted = itemData.progress === 100;

  const size = isActive ? `${BIG_ITEM_SIZE}px` : `${SMALL_ITEM_SIZE}px`;

  const statusMsg = useMemo(() => {
    if (itemData.progress === 0) {
      return (
        <Text fontSize="sm" w={size} color={theme.colors.orange[300]}>
          Not Started
        </Text>
      );
    }
    if (itemData.progress === 100) {
      return (
        <Text fontSize="sm" w={size} color={theme.colors.red[500]}>
          Completed
        </Text>
      );
    }
    return (
      <Text fontSize="sm" w={size} color={theme.colors.green[500]}>
        In progress...
      </Text>
    );
  }, [itemData.progress]);

  return (
    <Box
      display="flex"
      w="max-content"
      h="max-content"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      as="button"
      // _hover={{ transform: 'scale(1.05)' }}
      {...props}
    >
      <Text fontSize="sm" w="max-content" mb="14px">
        {index}.
      </Text>
      <Center
        w={size}
        h={size}
        transition="width height 2s;"
        bg={isPending ? theme.colors.gray[200] : theme.colors.gray[600]}
        borderRadius="50%"
        _hover={{ transform: 'scale(1.05)' }}
      >
        {isCompleted && (
          <Icon
            icon={checkmarkDoneSharp}
            width="48px"
            color={theme.colors.green[600]}
          />
        )}
        {isActive && (
          <CircularProgress
            value={itemData.progress}
            size="54px"
            color={theme.colors.green[600]}
          >
            <CircularProgressLabel color="white">
              {itemData.progress}%
            </CircularProgressLabel>
          </CircularProgress>
        )}
      </Center>
      <Text fontSize="lg" w={size} mt="14px">
        {itemData.title}
      </Text>
      {statusMsg}
    </Box>
  );
};

export default Item;
