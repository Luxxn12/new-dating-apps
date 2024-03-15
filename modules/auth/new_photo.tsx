import {Box, Button} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import {Center, VStack, ButtonText} from '@gluestack-ui/themed';
import React from 'react';
import {Image} from 'react-native';

export default function NewPhoto({navigation}: any) {
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
        <Center pt={'$2'}>
          <Image source={require('..//../assets/user.png')} />
        </Center>

        <VStack space="lg" pt="$4">
          <Box p={'$4'}>
            <Button
              size="lg"
              borderRadius={10}
              variant="solid"
              bgColor="$fuchsia700"
              onPress={() =>
                navigation.navigate('MenuUtama', {name: 'Submit'})
              }>
              <ButtonText>MASUK</ButtonText>
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
