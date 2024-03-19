/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Icon, Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {ArrowLeft} from 'lucide-react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';

export default function ViewPengunjung({navigation}: any) {
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
            Siapa Mengunjungi Saya
          </Text>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Box pl={'$4'} pr={'$4'} pt={'$3'}>
          <Text>Pengunjung</Text>
        </Box>
      </Box>
    </>
  );
}
