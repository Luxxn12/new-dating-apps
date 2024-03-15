/* eslint-disable react-native/no-inline-styles */
import {Box, HStack, Text} from '@gluestack-ui/themed';
import React from 'react';
import {Image} from 'react-native';
import {View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native';

const db = [
  {
    id: 1,
    name: 'Richard Hendricks',
    img: {uri: 'https://i.pravatar.cc/1000?img=1'},
    chat: 'Assalammualaikum aa',
  },
  {
    id: 2,
    name: 'Erlich Bachman',
    img: {uri: 'https://i.pravatar.cc/1000?img=2'},
    chat: 'Assalammualaikum ss',
  },
  {
    id: 3,
    name: 'Monica Hall',
    chat: 'Assalammualaikum ff',
    img: {uri: 'https://i.pravatar.cc/1000?img=3'},
  },
  {
    id: 4,
    name: 'Jared Dunn',
    chat: 'Assalammualaikum bb',
    img: {uri: 'https://i.pravatar.cc/1000?img=4'},
  },
  {
    id: 5,
    name: 'Dinesh Chugtai',
    chat: 'Assalammualaikum vvv',
    img: {uri: 'https://i.pravatar.cc/1000?img=5'},
  },
  {
    id: 6,
    name: 'Dinesh Chugtai',
    chat: 'Assalammualaikum dw',
    img: {uri: 'https://i.pravatar.cc/1000?img=6'},
  },
  {
    id: 7,
    name: 'Dinesh Chugtai',
    chat: 'Assalammualaikum mm',
    img: {uri: 'https://i.pravatar.cc/1000?img=7'},
  },
  {
    id: 8,
    name: 'Dinesh Chugtai',
    chat: 'Assalammualaikum ll',
    img: {uri: 'https://i.pravatar.cc/1000?img=8'},
  },
  {
    id: 9,
    name: 'Dinesh Chugtai',
    chat: 'Assalammualaikum ff',
    img: {uri: 'https://i.pravatar.cc/1000?img=9'},
  },
  {
    id: 10,
    name: 'Dinesh Chugtai',
    chat: 'Assalammualaikum 11',
    img: {uri: 'https://i.pravatar.cc/1000?img=10'},
  },
];
export default function Chat() {
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Box pl={'$4'} pr={'$4'}>
          <Box pt={'$1'} pb={'$2'}>
            <Text fontWeight="$bold" color="$black">
              Pasangan Baru
            </Text>
          </Box>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {db.map(data => {
              return (
                <TouchableOpacity key={data.id}>
                  <View
                    style={{
                      width: 75,
                      height: 75,
                      borderRadius: 100,
                      margin: 5,
                      backgroundColor: '#B347B5',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        width: 67,
                        height: 67,
                        borderRadius: 100,
                        backgroundColor: '#f5d0fe',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      source={data.img}
                    />
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text fontSize={10}>{data.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Box>
        <Box pl={'$4'} pr={'$4'} pb={40}>
          <Box pt={'$8'} pb={'$2'}>
            <Text fontWeight="$bold" color="$black">
              Pesan
            </Text>
          </Box>
          <ScrollView showsVerticalScrollIndicator={false}>
            {db.map(data => {
              return (
                <>
                  <HStack marginBottom={5} key={data.id}>
                    <TouchableOpacity>
                      <View
                        style={{
                          width: 57,
                          height: 57,
                          borderRadius: 100,
                          margin: 5,
                          backgroundColor: '#E1B3E2',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            width: 53,
                            height: 53,
                            borderRadius: 100,
                            backgroundColor: '#f5d0fe',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          source={data.img}
                        />
                      </View>
                    </TouchableOpacity>
                    <View
                      style={{
                        justifyContent: 'flex-start',
                        margin: 8,
                        alignItems: 'flex-start',
                      }}>
                      <Text fontSize={15} fontWeight="$bold">
                        {data.name}
                      </Text>
                      <Text pt={5} fontSize={13}>
                        {data.chat}
                      </Text>
                    </View>
                  </HStack>
                </>
              );
            })}
          </ScrollView>
        </Box>
      </Box>
    </>
  );
}
