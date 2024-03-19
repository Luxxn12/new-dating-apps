/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {MenuItem, MenuItemLabel} from '@gluestack-ui/themed';
import {Menu} from '@gluestack-ui/themed';
import {Icon} from '@gluestack-ui/themed';
import {
  ArrowLeft,
  EllipsisVertical,
  MessageSquareX,
  SendHorizonal,
  X,
} from 'lucide-react-native';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Dimensions,
} from 'react-native';

export default function ViewRoomChat({navigation}: any) {
  const [chatUser] = useState({
    name: 'Dinda Kirana',
    profile_image: 'https://i.pravatar.cc/1000?img=1',
    last_seen: 'online',
  });

  const [currentUser] = useState({
    name: 'John Doe',
  });

  const [messages, setMessages] = useState([
    {sender: 'John Doe', message: 'Hey there!', time: '6:01 PM'},
    {
      sender: 'Dinda Kirana',
      message: 'Hello, how are you doing?',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: 'I am good, how about you?',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: '😊😇',
      time: '6:02 PM',
    },
    {
      sender: 'Dinda Kirana',
      message: "Can't wait to meet you.",
      time: '6:03 PM',
    },
    {
      sender: 'John Doe',
      message: "That's great, when are you coming?",
      time: '6:03 PM',
    },
    {
      sender: 'Dinda Kirana',
      message: 'This weekend.',
      time: '6:03 PM',
    },
    {
      sender: 'Dinda Kirana',
      message: 'Around 4 to 6 PM.',
      time: '6:04 PM',
    },
    {
      sender: 'John Doe',
      message: "Great, don't forget to bring me some mangoes.",
      time: '6:05 PM',
    },
    {
      sender: 'Dinda Kirana',
      message: 'Sure!',
      time: '6:05 PM',
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');

  function getTime(date: Date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function sendMessage() {
    if (inputMessage === '') {
      return setInputMessage('');
    }
    let t = getTime(new Date());
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
        time: t,
      },
    ]);
    setInputMessage('');
  }

  const [isOpen] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => (
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon as={ArrowLeft} size="xl" mt={1} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileUser')}>
            <Image
              style={styles.userProfileImage}
              source={{uri: chatUser.profile_image}}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingLeft: 10,
              justifyContent: 'center',
            }}>
            <Text style={{color: '#000000', fontWeight: '700', fontSize: 18}}>
              {chatUser.name}
            </Text>
            <Text style={{color: '#8A8A8A', fontWeight: '300'}}>
              {chatUser.last_seen}
            </Text>
          </View>
        </View>
      ),
      headerRight: () => (
        // <TouchableOpacity
        //   style={{paddingRight: 10}}
        //   onPress={() => {
        //     Alert.alert('Audio Call', 'Audio Call Button Pressed');
        //   }}>
        //   <Icon as={EllipsisVertical} size="xl" mt={1} color="#000000" />
        // </TouchableOpacity>

        <Menu
          placement="top"
          trigger={({...triggerProps}) => {
            return (
              //   <Button {...triggerProps}>
              //     <ButtonText>Menu</ButtonText>
              //   </Button>
              <TouchableOpacity style={{paddingRight: 10}} {...triggerProps}>
                <Icon as={EllipsisVertical} size="xl" mt={1} color="#000000" />
              </TouchableOpacity>
            );
          }}>
          <MenuItem key="Community" textValue="Community">
            <Icon as={MessageSquareX} size="md" mr="$2" />
            <MenuItemLabel size="sm">Hapus Riwayat Obrolan</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Plugins" textValue="Plugins">
            {/* PuzzleIcon is imported from 'lucide-react-native' */}
            <Icon as={X} size="md" mr="$2" />
            <MenuItemLabel size="sm">Putuskan</MenuItemLabel>
          </MenuItem>
        </Menu>
      ),
    });
  }, [
    chatUser.last_seen,
    chatUser.name,
    chatUser.profile_image,
    isOpen,
    navigation,
  ]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FlatList
          style={{backgroundColor: '#f2f2ff'}}
          inverted={true}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
          renderItem={({item}) => (
            <TouchableWithoutFeedback>
              <View style={{marginTop: 6}}>
                <View
                  style={{
                    maxWidth: Dimensions.get('screen').width * 0.8,
                    backgroundColor: '#B347B5',
                    alignSelf:
                      item.sender === currentUser.name
                        ? 'flex-end'
                        : 'flex-start',
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 8,
                    borderBottomLeftRadius:
                      item.sender === currentUser.name ? 8 : 0,
                    borderBottomRightRadius:
                      item.sender === currentUser.name ? 0 : 8,
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                    }}>
                    {item.message}
                  </Text>
                  <Text
                    style={{
                      color: '#dfe4ea',
                      fontSize: 14,
                      alignSelf: 'flex-end',
                    }}>
                    {item.time}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />

        <View style={{paddingVertical: 10}}>
          <View style={styles.messageInputView}>
            <TextInput
              defaultValue={inputMessage}
              style={styles.messageInput}
              placeholder="Message"
              onChangeText={text => setInputMessage(text)}
              onSubmitEditing={() => {
                sendMessage();
              }}
            />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={() => {
                sendMessage();
              }}>
              <Icon as={SendHorizonal} size="xl" mt={1} color="#B347B5" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 23,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: {height: '100%', aspectRatio: 1, borderRadius: 100},
  container: {
    flex: 1,
    backgroundColor: '#f2f2ff',
  },
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
