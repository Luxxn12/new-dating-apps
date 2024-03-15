import {Button, ButtonText} from '@gluestack-ui/themed';
import {Box, Center, Image, Text, VStack} from '@gluestack-ui/themed';
import React from 'react';

export default function LoginPertama({navigation}: any) {
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
        <VStack m={'$5'}>
          <Button
            size="md"
            variant="solid"
            bgColor="$fuchsia700"
            borderRadius={20}
            onPress={() =>
              navigation.navigate('LoginNope', {name: 'Login dengan phone'})
            }>
            <ButtonText>LOGIN DENGAN PHONE</ButtonText>
          </Button>
          <Box pt={'$5'}>
            <Button
              size="md"
              variant="solid"
              bgColor="$fuchsia700"
              borderRadius={20}
              onPress={() =>
                navigation.navigate('MenuUtama', {name: 'Login dengan phone'})
              }>
              <ButtonText>LOGIN DENGAN EMAIL</ButtonText>
            </Button>
          </Box>
        </VStack>
      </Box>
      {/* <Button
        onPress={() => navigation.navigate('LoginNope')}
        title="Login dengan phone"
      /> */}
    </>
  );
}
