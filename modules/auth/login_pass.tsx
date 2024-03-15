import {Button, ButtonText, Image, Input} from '@gluestack-ui/themed';
import {VStack} from '@gluestack-ui/themed';
import {InputField} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import {Box, Center} from '@gluestack-ui/themed';
import React from 'react';

export default function LoginPass({navigation}: any) {
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Center pt={'$10'}>
          <Image
            source={require('..//../assets/bogopa.png')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{height: 130, width: 130}}
            alt="Bogopa"
          />
          <Text fontSize={'$2xl'} fontWeight="$bold" pt={'$1'}>
            BOGOPA
          </Text>
          <Box w={'$full'} p={'$5'}>
            <VStack space="xs" pb="$2" pt={'$5'}>
              <Text fontSize={16} fontWeight="$bold">
                Login Password
              </Text>
            </VStack>
            <VStack space="xl" py="$2">
              <Input borderRadius={10}>
                <InputField py="$2" placeholder="Masukkan Password" />
              </Input>
            </VStack>
            <VStack space="lg" pt="$4">
              <Button
                size="md"
                borderRadius={10}
                variant="solid"
                bgColor="$fuchsia700"
                onPress={() =>
                  navigation.navigate('Create Profile', {name: 'Submit'})
                }>
                <ButtonText>Submit</ButtonText>
              </Button>
            </VStack>
          </Box>
        </Center>
      </Box>
    </>
  );
}
