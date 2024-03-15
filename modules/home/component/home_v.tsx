import {Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React from 'react';
import {Button} from 'react-native';

function HomeScreen({navigation}: any) {
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Box pl={'$4'} pr={'$4'}>
          <Text>HOME</Text>
        </Box>
      </Box>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    </>
  );
}

export default HomeScreen;
