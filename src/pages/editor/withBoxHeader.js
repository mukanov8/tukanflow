import React from 'react';
import styled from 'styled-components';
import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import theme from '../../utils/theme';

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: max-content;

  background: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 2px 4px 5px 2px rgba(0, 0, 0, 0.2);
`;

const withBoxHeader = (title, Page) => {
  console.log(title);
  return props => {
    return (
      <MainContainer>
        <Heading
          as="h2"
          size="l"
          textAlign="left"
          marginLeft="22px"
          marginBottom="0px"
          marginTop="10px"
        >
          {title}
        </Heading>
        <Divider />
        <Flex margin="9px">
          <Page {...props} />
        </Flex>
      </MainContainer>
    );
  };
};

export default withBoxHeader;
