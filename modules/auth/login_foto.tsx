import {Button, ButtonText, HStack} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import {VStack} from '@gluestack-ui/themed';
import {Center} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React from 'react';
import {Image} from 'react-native';

export default function LoginFoto({navigation}: any) {
  return (
    <>
      <Box justifyContent="space-between" flex={1} bgColor="$fuchsia200">
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
        </Center>
        <Center pt={'$10'}>
          <Box pb={'$4'}>
            <Image source={require('..//../assets/phone.png')} />
          </Box>
          <HStack space={'xs'}>
            <Text>Silahkan unggah</Text>
            <Text color="$fuchsia700">foto yang memperlihatkan</Text>
          </HStack>
          <HStack space={'xs'}>
            <Text color="$fuchsia700">wajahmu secara jelas.</Text>
            <Text>Lihat contoh berikut.</Text>
          </HStack>
        </Center>

        <VStack space="lg" pt="$4">
          <Box pl={'$4'} pr={'$4'} pb={'$1'}>
            <Button
              size="md"
              borderRadius={10}
              variant="solid"
              bgColor="$fuchsia700"
              onPress={() =>
                navigation.navigate('New Photo', {name: 'Submit'})
              }>
              <ButtonText>UPLOAD</ButtonText>
            </Button>
          </Box>
          <HStack reversed={true} space={'2xl'} pl={'$4.5'} pb={'$4.5'}>
            <Image source={require('..//../assets/2.png')} />
            <Image source={require('..//../assets/3.png')} />
            <Image source={require('..//../assets/1.png')} />
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
