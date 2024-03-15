import {
  Button,
  ButtonText,
  Center,
  Input,
  InputField,
  VStack,
} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import {Image} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React from 'react';

export default function LoginNope({navigation}: any) {
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
                Lanjutkan dengan seluler
              </Text>
            </VStack>
            <VStack space="xl" py="$2">
              <Input borderRadius={10}>
                <InputField py="$2" placeholder="Masukkan Nomor Anda" />
              </Input>
            </VStack>
            <VStack space="lg" pt="$4">
              <Button
                size="md"
                borderRadius={10}
                variant="solid"
                bgColor="$fuchsia700"
                onPress={() =>
                  navigation.navigate('LoginKode', {name: 'Submit'})
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
