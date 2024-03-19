/* eslint-disable react-native/no-inline-styles */
import {Box, HStack, Icon, Text, VStack} from '@gluestack-ui/themed';
import {ArrowLeft, Gem, Smile} from 'lucide-react-native';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

export default function ViewInfoProfile({navigation}: any) {
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Image
          style={{height: '70%'}}
          source={{uri: 'https://i.pravatar.cc/1000?img=3'}}
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
            <VStack>
              <HStack space="xl">
                <Text fontSize={20} fontWeight="$bold" color="#000000">
                  Alam Samudra
                </Text>
                <Text fontSize={20} fontWeight="$bold" color="#000000">
                  20
                </Text>
              </HStack>
              <HStack space="xl" mt={5}>
                <Text fontSize={13}>Aktif 1 menit lalu</Text>
              </HStack>
              <HStack
                justifyContent="space-between"
                alignItems="center"
                mt={20}>
                <HStack alignItems="center" space="md">
                  <Icon as={Smile} size="xl" color="#B347B5" />
                  <Text fontSize={16} fontWeight="$bold" color="#000000">
                    159 Suka
                  </Text>
                </HStack>
                <Text fontSize={16} fontWeight="$bold" color="#000000">
                  SIAPA SUKA SAYA?
                </Text>
              </HStack>
              <HStack
                justifyContent="space-between"
                alignItems="center"
                mt={20}>
                <HStack alignItems="center" space="md">
                  <Icon as={Gem} size="xl" color="#B347B5" />
                  <Text fontSize={16} fontWeight="$bold" color="#000000">
                    Non-VIP
                  </Text>
                </HStack>
                <Text fontSize={16} fontWeight="$bold" color="#000000">
                  Lihat Keistimewaan
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
