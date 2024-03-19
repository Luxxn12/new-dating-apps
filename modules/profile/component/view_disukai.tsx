/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {HStack, Icon} from '@gluestack-ui/themed';
import {Box, Text} from '@gluestack-ui/themed';
import {ArrowLeft} from 'lucide-react-native';
import React, {useEffect} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {View} from 'react-native';

export default function ViewDisukai({navigation}: any) {
  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => (
        <View
          style={{
            paddingVertical: 4,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon as={ArrowLeft} size="xl" mt={1} color="#000000" />
          </TouchableOpacity>
          <Text fontWeight="$bold" color="$black">
            Disukai(151)
          </Text>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Box pl={'$4'} pr={'$4'} pt={'$3'}>
          <HStack style={{flex: 1}}>
            {/* <View > */}
            <Image
              style={{
                width: 150,
                height: 150,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={{uri: 'https://i.pravatar.cc/1000?img=1'}}
            />
            <Image
              style={{
                width: 150,
                height: 150,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={{uri: 'https://i.pravatar.cc/1000?img=1'}}
            />
            {/* </View> */}
          </HStack>
        </Box>
      </Box>
    </>
  );
}
