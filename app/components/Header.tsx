'use client'
import React from 'react'
import {Box,Heading,Text,Stack,HStack} from '@chakra-ui/react';

export default function Header(){
    return (
      <>
        <Box pb = '112px' as="section">
          <Box
            
            bg="#6B46C1"
            color="#F7FAFC"
            pt="90px"
            pb="198px"
            px="32px">
            <Heading fontWeight="800" fontSize="48px" textAlign="center">
              Simple Pricing for your business.
            </Heading>
            <Text fontWeight="500" fontSize="24px" textAlign="center">
              Plans that are carefully crafted to suit your business.
            </Text>
          </Box>
        </Box>
      </>
    );
}