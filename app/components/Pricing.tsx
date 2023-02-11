'use client'
import React from 'react';
import  { Box, Flex, Text, Heading,Button,Stack,HStack,StackProps,Icon } from '@chakra-ui/react'
import    { CheckIcon }    from '../icons/Icon'


export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
      <HStack as='li' spacing='20px' {...rest} alignItems = 'start'>
        <Icon as={CheckIcon} w='22px' h='22px' />
        <Text textAlign = {['left','left','center']}>{children}</Text>
      </HStack>
    );
  };

export default function Pricing(){
  return (
    <Box mx = '18'>
      <Box
        maxW="994px"
        margin="auto"
        mt="-256px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        textAlign="center">
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#F0EAFB" p="45px">
            <Text fontWeight="800px" fontSize="24px">
              Premium PRO
            </Text>
            <Heading fontWeight="800px" fontSize={['5xl','5xl','6xl']} mt="16px">
              $329
            </Heading>
            <Text fontWeight="500px" fontSize="18px" mt="8px">
              billed just once
            </Text>
            <Button colorScheme="purple" size="lg" width="282px" mt="24px">
              Get started
            </Button>
          </Box>
          <Box p="60px" fontSize="18px" bg="white">
            <Text textAlign="left">
              Access these features when you get the pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="20px" pt="24px">
              <ListItem>International Calling and messaging API</ListItem>
              <ListItem>Additional Phone Numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 Support and Consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}


