import {Image, Input, Select, SelectInput} from '@gluestack-ui/themed';
import {VStack} from '@gluestack-ui/themed';
import {SelectTrigger} from '@gluestack-ui/themed';
import {SelectContent} from '@gluestack-ui/themed';
import {SelectDragIndicator} from '@gluestack-ui/themed';
import {SelectItem} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';
import {SelectDragIndicatorWrapper} from '@gluestack-ui/themed';
import {SelectBackdrop} from '@gluestack-ui/themed';
import {SelectPortal} from '@gluestack-ui/themed';
import {InputField} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import {Box, Center} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

export default function CreateProfile({navigation}: any) {
  const [isName, setName] = useState('');
  const [isValid, setValid] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  function OnSubmit() {
    if (isName === '') {
      setValid(true);
      return false;
    } else {
      setValid(false);
      navigation.navigate('LoginFoto');
    }
  }
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
                Profile
              </Text>
            </VStack>
            <VStack space="xl" py="$2">
              <Input
                borderRadius={10}
                isDisabled={false}
                isInvalid={isValid}
                isReadOnly={false}>
                <InputField py="$2" placeholder="Name" onChangeText={setName} />
              </Input>
            </VStack>
            <VStack space="xl" py="$2">
              <Select>
                <SelectTrigger variant="outline" borderRadius={10} size="md">
                  <SelectInput placeholder="Pilih Jenis Kelamin" />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="Laki - Laki" value="Laki - Laki" />
                    <SelectItem label="Perempuan" value="Perempuan" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </VStack>
            <Input
              borderRadius={10}
              size="md"
              isDisabled={false}
              isInvalid={isValid}
              isReadOnly={false}>
              <InputField
                placeholder="Pilih Tanggal"
                value={date.toLocaleDateString()}
                onPressIn={() => setOpen(true)}
              />
            </Input>
            <DatePicker
              modal
              open={open}
              date={date}
              mode={'date'}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <VStack space="lg" pt="$4">
              <Button
                size="md"
                borderRadius={10}
                variant="solid"
                bgColor="$fuchsia700"
                onPress={() => OnSubmit()}>
                <ButtonText>Submit</ButtonText>
              </Button>
            </VStack>
          </Box>
        </Center>
      </Box>
    </>
  );
}
