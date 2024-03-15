import {Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React from 'react';

export default function SettingProfile({}: any) {
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Text fontSize={'$2xl'} fontWeight="$bold" pt={'$1'}>
          SETING PROFILE
        </Text>
      </Box>
    </>
  );
}
