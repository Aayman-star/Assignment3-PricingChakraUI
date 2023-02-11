'use client'
import React, { ElementType } from 'react'
import { HStack, Icon, Text, StackProps,Box,Flex,Stack} from '@chakra-ui/react'
import { MoneyBackGuarantee, NoSetupIcon,OnetimePayment } from '../icons/Icon'

interface FeatureProps extends StackProps{
    icon : ElementType;
}
function Feature(props : FeatureProps) {
const {icon,children,...rest} = props;
  return (
    <>
      <HStack {...rest} spacing = '6'>
        <Icon  as={icon} boxSize = '12'/>
        <Text textAlign='left' fontSize='lg' fontWeight='bold'>{children}</Text>
      </HStack>
    </>
  );
}

export function Features(){
    return (
      <Box maxW="1024px" margin="auto" pt="60px" pb="8">
          <Stack direction = {['column','column','row']} px="12" spacing="5">
            <Feature icon={MoneyBackGuarantee}>
              30 days money back guarantee.
            </Feature>
            <Feature icon={NoSetupIcon}>
              No setup fees,100% hassle free.
            </Feature>
            <Feature icon={OnetimePayment}>
              No monthly subscription,Pay once and for all
            </Feature>
          </Stack>
        
      </Box>
    );
}