/* eslint-disable react-native/no-inline-styles */
import {Icon} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {SendHorizonal} from 'lucide-react-native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native';
import {View} from 'react-native';

export default function SearchUser({navigation}: any) {
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <View style={{paddingVertical: 10}}>
          <View style={styles.messageInputView}>
            <TextInput style={styles.messageInput} placeholder="Search" />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon as={SendHorizonal} size="xl" mt={1} color="#B347B5" />
            </TouchableOpacity>
          </View>
        </View>
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#B347B5',
    borderStyle: 'solid',
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
