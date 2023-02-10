'use client'
import React, { ElementType } from 'react'
import { HStack, Icon, Text, StackProps,Box} from '@chakra-ui/react'
import { MoneyBackGuarantee, NoSetupIcon,OnetimePayment } from '../icons/Icon'

interface FeatureProps extends StackProps{
    icon : ElementType;
}
function Feature(props : FeatureProps) {
const {icon,children,...rest} = props;
  return (
    <>
      <HStack {...rest}>
        <Icon  as={icon}/>
        <Text textAlign='left' fontSize='18px' fontWeight='700'>{children}</Text>
      </HStack>
    </>
  );
}

export function Features(){
    return (
      <Box maxW = '1024px' margin='auto' pt = '60px' pb = '32px'>
        <HStack px = '48px' spacing='20px'>
          <Feature icon={MoneyBackGuarantee}>
            30 days money back guarantee.
          </Feature>
          <Feature icon={NoSetupIcon}>No setup fees,100% hassle free.</Feature>
          <Feature icon={OnetimePayment}>
            No monthly subscription,Pay once and for all
          </Feature>
        </HStack>
      </Box>
    );
}