import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './styles';
import {Box, Button, ButtonText, VStack} from '@gluestack-ui/themed';
import {Center} from '@gluestack-ui/themed';
import {Image} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';

const CELL_COUNT = 4;

export default function LoginVerif({navigation}: any) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

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
        </Center>
        <Box w={'$full'} p={'$5'}>
          <VStack space="xs" pb="$2" pt={'$5'}>
            <Text fontSize={16} fontWeight="$bold">
              Masukkan kode verifikasi
            </Text>
            <Text fontSize={12}>Masukkan kode verifikasi</Text>
          </VStack>
          <SafeAreaView style={styles.root}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View
                  // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cellRoot, isFocused && styles.focusCell]}>
                  <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </SafeAreaView>
          <VStack space="lg">
            <Button
              size="md"
              borderRadius={10}
              variant="solid"
              bgColor="$fuchsia700"
              onPress={() =>
                navigation.navigate('Create Password', {name: 'Submit'})
              }>
              <ButtonText>Submit</ButtonText>
            </Button>
          </VStack>
        </Box>
      </Box>
    </>
  );
}
