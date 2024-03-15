/* eslint-disable react-native/no-inline-styles */
import {Center} from '@gluestack-ui/themed';
import {Box, ButtonIcon, EditIcon} from '@gluestack-ui/themed';
import React from 'react';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';

export default function ProfileScreen({}: any) {
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Box pl={'$4'} pr={'$4'}>
          <Center>
            <View style={styles.container}>
              <View
                style={[
                  styles.square,
                  {
                    borderRadius: 30,
                  },
                ]}>
                <Image
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: 30 / 2,
                  }}
                  source={{uri: 'https://i.pravatar.cc/1000?img=3'}}
                />
              </View>
              <View
                style={[
                  styles.square,
                  {
                    position: 'absolute',
                    top: 80,
                    left: 80,
                  },
                ]}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50 / 2,
                    backgroundColor: '#B347B5',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ButtonIcon as={EditIcon} color="$white" />
                </View>
              </View>
            </View>
          </Center>
        </Box>
      </Box>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'linen',
  },
  square: {
    height: 150,
    width: 150,
  },
});
