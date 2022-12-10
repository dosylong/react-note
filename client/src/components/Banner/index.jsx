import React from 'react';
import {
  Image,
  Stack,
  Text,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import BannerImage from '../../assets/banner.png';

export default function Banner() {
  return (
    <Stack direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text color={'green.400'} as={'span'}>
              Note Project
            </Text>{' '}
          </Heading>
          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            color={useColorModeValue('gray.500', 'gray.300')}>
            The project board is an exclusive resource for contract work. It's
            perfect for everyone who wants to take notes on everything they
            want.
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={'Login Image'} objectFit={'cover'} src={BannerImage} />
      </Flex>
    </Stack>
  );
}
