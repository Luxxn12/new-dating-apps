/* eslint-disable react-native/no-inline-styles */
import {Button, ButtonIcon, CloseIcon, StarIcon} from '@gluestack-ui/themed';
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
            {/* <View style={styles.buttons}>
            <Button onPress={() => swipe('left')} title="Swipe left!" />
            <Button onPress={() => swipe('right')} title="Swipe right!" />
            <Button onPress={() => swipe('up')} title="Swipe up!" />
          </View> */}
            <HStack space="4xl" pt={'$3'} reversed>
              <Button
                borderRadius="$3xl"
                size="xl"
                p="$3.5"
                bg="$green"
                borderColor="$green"
                onPress={() => swipe('right')}>
                {/* EditIcon is imported from 'lucide-react-native' */}
                <Box borderRadius={'$full'}>
                  <ButtonIcon as={StarIcon} size="xl" />
                </Box>
              </Button>
              <Button
                borderRadius="$3xl"
                size="xl"
                p="$4.5"
                bg="$pink600"
                borderColor="$pink600"
                onPress={() => swipe('up')}>
                {/* EditIcon is imported from 'lucide-react-native' */}
                <Box borderRadius={'$full'}>
                  <ButtonIcon as={FavouriteIcon} size="xl" />
                </Box>
              </Button>
              <Button
                borderRadius="$3xl"
                size="xl"
                p="$3.5"
                bg="$rose700"
                borderColor="$rose700"
                onPress={() => swipe('left')}>
                {/* EditIcon is imported from 'lucide-react-native' */}
                <Box borderRadius={'$full'}>
                  <ButtonIcon as={CloseIcon} size="xl" />
                </Box>
              </Button>
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
    height: 550,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  },
};
