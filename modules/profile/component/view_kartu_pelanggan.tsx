import {Box, CheckCircleIcon, HStack, Icon, Text} from '@gluestack-ui/themed';
import React from 'react';
import {ScrollView} from 'react-native';

export default function ViewKartuPelanggan() {
  return (
    <>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Box mr={10}>
          <Box bg="#D1B378" style={{borderRadius: 20 / 2}} p={10}>
            <HStack justifyContent="space-between" alignItems="center">
              <Box p={10}>
                <Text fontSize={20} fontWeight="$bold" color="#FDFDFD" pb={10}>
                  VIP
                </Text>
                <Box bg="white" w={100} p={3} style={{borderRadius: 10 / 2}}>
                  <Text
                    fontSize={11}
                    textAlign="center"
                    fontWeight="$bold"
                    color="#9F6D21">
                    Hanya 30.000
                  </Text>
                </Box>
              </Box>
              <Box p={15}>
                <Icon
                  as={CheckCircleIcon}
                  w="$10"
                  h="$10"
                  mt={1}
                  color="white"
                />
              </Box>
            </HStack>
          </Box>
        </Box>
        <Box mr={10}>
          <Box bg="#684105" style={{borderRadius: 20 / 2}} p={10}>
            <HStack justifyContent="space-between" alignItems="center">
              <Box p={10}>
                <Text fontSize={20} fontWeight="$bold" color="#FDFDFD" pb={10}>
                  GOLD
                </Text>
                <Box bg="white" w={100} p={3} style={{borderRadius: 10 / 2}}>
                  <Text
                    fontSize={11}
                    textAlign="center"
                    fontWeight="$bold"
                    color="#9F6D21">
                    Hanya 159.000
                  </Text>
                </Box>
              </Box>
              <Box p={15}>
                <Icon
                  as={CheckCircleIcon}
                  w="$10"
                  h="$10"
                  mt={1}
                  color="white"
                />
              </Box>
            </HStack>
          </Box>
        </Box>
        <Box>
          <Box bg="#959494" style={{borderRadius: 20 / 2}} p={10}>
            <HStack justifyContent="space-between" alignItems="center">
              <Box p={10}>
                <Text fontSize={20} fontWeight="$bold" color="#FDFDFD" pb={10}>
                  PREMIUM
                </Text>
                <Box bg="white" w={100} p={3} style={{borderRadius: 10 / 2}}>
                  <Text
                    fontSize={11}
                    textAlign="center"
                    fontWeight="$bold"
                    color="#959494">
                    Hanya 459.000
                  </Text>
                </Box>
              </Box>
              <Box p={15}>
                <Icon
                  as={CheckCircleIcon}
                  w="$10"
                  h="$10"
                  mt={1}
                  color="white"
                />
              </Box>
            </HStack>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
}
