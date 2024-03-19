/* eslint-disable react-native/no-inline-styles */
import {Box, HStack, Icon, Text} from '@gluestack-ui/themed';
import {ArrowLeft} from 'lucide-react-native';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

export default function ViewProfileUser({navigation}: any) {
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Image
          style={{height: '70%'}}
          source={{uri: 'https://i.pravatar.cc/1000?img=1'}}
        />
        <TouchableOpacity
          style={{
            paddingRight: 10,
            position: 'absolute',
            paddingHorizontal: 23,
            paddingVertical: 4,
            top: '65%',
            right: 20,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Box bg="#B347B5" p={20} style={{borderRadius: 70 / 2}}>
            <Icon as={ArrowLeft} size="xl" color="white" />
          </Box>
        </TouchableOpacity>
        <Box pl={'$4'} pr={'$4'}>
          <Box pt={20}>
            <HStack space="xl">
              <Text fontSize={20} fontWeight="$bold">
                Dinda Kirana
              </Text>
              <Text fontSize={20} fontWeight="$bold">
                20
              </Text>
            </HStack>
            <HStack space="xl" pt={5}>
              <Text color="#5A5A5A" fontSize={13}>
                Denpasar Barat
              </Text>
              <Text fontSize={13}>Aktif 1 menit lalu</Text>
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
