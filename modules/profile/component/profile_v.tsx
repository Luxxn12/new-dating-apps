/* eslint-disable react-native/no-inline-styles */
import {
  Box,
  ButtonIcon,
  EditIcon,
  HStack,
  Icon,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import ViewKartuPelanggan from './view_kartu_pelanggan';
import {BadgeCheck, Gem, Smile, UserSearch, Users} from 'lucide-react-native';

export default function ProfileScreen({navigation}: any) {
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Box pl={'$4'} pr={'$4'}>
          <HStack space="lg" pt={10}>
            <Box>
              <TouchableOpacity
                onPress={() => navigation.navigate('InfoProfile')}>
                <Image
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: 30 / 2,
                  }}
                  source={{uri: 'https://i.pravatar.cc/1000?img=3'}}
                />
              </TouchableOpacity>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50 / 2,
                  backgroundColor: '#B347B5',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  // right: 10,
                  top: 75,
                  left: 75,
                }}>
                <ButtonIcon as={EditIcon} color="$white" />
              </View>
            </Box>
            <Text fontSize={16} fontWeight="$bold" color="$black">
              INDRA PANGESTU
            </Text>
            <Icon as={BadgeCheck} size="lg" mt={1} color="blue" />
          </HStack>
          <Box pt={25}>
            <ViewKartuPelanggan />
          </Box>
          <Box pt={25}>
            <Box>
              <Text fontWeight="$bold" color="$black" pb={10}>
                Layanan lainnya
              </Text>
              <Box bg="#BBBBBB" style={{borderRadius: 20 / 2}} p={20}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Disukai')}>
                  <HStack alignItems="center" space="md" mb={20}>
                    <Box bg="$fuchsia700" p={15} borderRadius={10}>
                      <Icon as={Smile} size="xl" mt={1} color="white" />
                    </Box>
                    <Box>
                      <Text
                        fontSize={14}
                        textAlign="center"
                        fontWeight="$bold"
                        color="#030303">
                        Lihat Siapa Suka Saya
                      </Text>
                      <HStack space="xs" alignItems="center" pt={3}>
                        <Text fontSize={11} color="$fuchsia700">
                          159
                        </Text>
                        <Text fontSize={11}>orang menyukai Anda</Text>
                      </HStack>
                    </Box>
                  </HStack>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Pengunjung')}>
                  <HStack alignItems="center" space="md" mb={20}>
                    <Box bg="$fuchsia700" p={15} borderRadius={10}>
                      <Icon as={UserSearch} size="xl" mt={1} color="white" />
                    </Box>
                    <Box>
                      <Text fontSize={14} fontWeight="$bold" color="#030303">
                        Siapa Mengunjungi Saya
                      </Text>
                      <Text fontSize={11} pt={3}>
                        Lihat siapa yang mengunjungi profil Anda
                      </Text>
                    </Box>
                  </HStack>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SayaSuka')}>
                  <HStack alignItems="center" space="md" mb={20}>
                    <Box bg="$fuchsia700" p={15} borderRadius={10}>
                      <Icon as={Users} size="xl" mt={1} color="white" />
                    </Box>
                    <Box>
                      <Text fontSize={14} fontWeight="$bold" color="#030303">
                        Saya suka
                      </Text>
                      <Text pt={3} fontSize={11}>
                        Tingkatkan Suka agar orang lain dapat
                      </Text>
                      <Text fontSize={11}>melihat Anda lebih cepat</Text>
                    </Box>
                  </HStack>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Langganan')}>
                  <HStack alignItems="center" space="md">
                    <Box bg="$fuchsia700" p={15} borderRadius={10}>
                      <Icon as={Gem} size="xl" mt={1} color="white" />
                    </Box>
                    <Box>
                      <Text
                        fontSize={14}
                        textAlign="center"
                        fontWeight="$bold"
                        color="#030303">
                        Langganan
                      </Text>
                    </Box>
                  </HStack>
                </TouchableOpacity>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
