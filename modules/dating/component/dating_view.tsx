/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  ButtonIcon,
  CloseIcon,
  Icon,
  StarIcon,
} from '@gluestack-ui/themed';
import {HStack} from '@gluestack-ui/themed';
import {FavouriteIcon} from '@gluestack-ui/themed';
import {Box, Text} from '@gluestack-ui/themed';
import React, {useMemo, useState} from 'react';
import {ImageBackground} from 'react-native';
import {View} from 'react-native';
import TinderCard from 'react-tinder-card';

const db = [
  {
    name: 'Richard Hendricks',
    img: {uri: 'https://i.pravatar.cc/1000?img=1'},
  },
  {
    name: 'Erlich Bachman',
    img: {uri: 'https://i.pravatar.cc/1000?img=2'},
  },
  {
    name: 'Monica Hall',
    img: {uri: 'https://i.pravatar.cc/1000?img=3'},
  },
  {
    name: 'Jared Dunn',
    img: {uri: 'https://i.pravatar.cc/1000?img=4'},
  },
  {
    name: 'Dinesh Chugtai',
    img: {uri: 'https://i.pravatar.cc/1000?img=5'},
  },
];

const alreadyRemoved: any[] = [];
let charactersState = db;

export default function DatingView({}: any) {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map(() => React.createRef()),
    [],
  );

  function swiped(direction: any, nameToDelete: any) {
    console.log('removing: ' + nameToDelete + ' to the ' + direction);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  }

  function outOfFrame(name: any) {
    console.log(name + ' left the screen!');
    charactersState = charactersState.filter(
      character => character.name !== name,
    );
    setCharacters(charactersState);
  }

  function swipe(dir: any) {
    const cardsLeft = characters.filter(
      person => !alreadyRemoved.includes(person.name),
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name;
      const index = db.map(person => person.name).indexOf(toBeRemoved);
      alreadyRemoved.push(toBeRemoved);
      childRefs[index].current.swipe(dir);
    }
  }
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Box pt={'$3'}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}>
            <View style={{width: '90%', maxWidth: 360, height: 550}}>
              {characters.map((character, index) => (
                <TinderCard
                  ref={childRefs[index]}
                  key={character.name}
                  onSwipe={dir => swiped(dir, character.name)}
                  onCardLeftScreen={() => outOfFrame(character.name)}>
                  <View style={styles.card}>
                    <ImageBackground
                      style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        borderRadius: 20,
                      }}
                      source={character.img}>
                      <Text
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          margin: 30,
                          color: '#fff',
                          textShadowColor: '-1px 1px 10px rgba(0, 0, 0, 0.75)',
                        }}
                        fontSize={'$xl'}>
                        {character.name}
                      </Text>
                    </ImageBackground>
                  </View>
                </TinderCard>
              ))}
            </View>
            <HStack
              space="4xl"
              reversed
              justifyContent="center"
              alignContent="center"
              alignItems="center">
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50 / 2,
                  backgroundColor: '#F3F3F3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button variant="link" onPress={() => swipe('right')}>
                  {/* EditIcon is imported from 'lucide-react-native' */}
                  <Box borderRadius={'$full'}>
                    <Icon
                      as={StarIcon}
                      w="$6"
                      h="$7"
                      mt={1}
                      color="$green700"
                    />
                  </Box>
                </Button>
              </View>

              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60 / 2,
                  backgroundColor: '#F3F3F3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button variant="link" onPress={() => swipe('up')}>
                  {/* EditIcon is imported from 'lucide-react-native' */}
                  <Box borderRadius={'$full'}>
                    <Icon
                      as={FavouriteIcon}
                      w="$9"
                      h="$9"
                      mt={1}
                      color="$pink500"
                    />
                  </Box>
                </Button>
              </View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50 / 2,
                  backgroundColor: '#F3F3F3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button onPress={() => swipe('left')} variant="link">
                  {/* EditIcon is imported from 'lucide-react-native' */}
                  <Box borderRadius={'$full'}>
                    <Icon
                      as={CloseIcon}
                      w="$7"
                      h="$7"
                      mt={1}
                      color="$rose700"
                    />
                  </Box>
                </Button>
              </View>
            </HStack>
          </View>
        </Box>
      </Box>
    </>
  );
}
const styles = {
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 360,
    height: 540,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  },
};
