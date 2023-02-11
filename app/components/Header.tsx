'use client'
import React from 'react'
import {Box,Heading,Text,Stack,HStack} from '@chakra-ui/react';

export default function Header(){
    return (
      <>
        <Box pb = '112px' as="section">
          <Box
            
            bg="purple.600"
            color="gray.50"
            pt="90px"
            pb="198px"
            px="32px">
            <Heading fontWeight="extrabold" fontSize={['3xl','3xl','5xl']} textAlign={['left','left','center']}>
              Simple Pricing for your business.
            </Heading>
            <Text fontWeight="medium" fontSize={['lg','lg','2xl']} textAlign={['left','left','center']}>
              Plans that are carefully crafted to suit your business.
            </Text>
          </Box>
        </Box>
      </>
    );
}