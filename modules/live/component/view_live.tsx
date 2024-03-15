import {Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React from 'react';

export default function ViewLive({}: any) {
  return (
    <>
      <Box bgColor="$fuchsia200" h={'$full'}>
        <Text fontSize={'$2xl'} fontWeight="$bold" pt={'$1'}>
          VIEW LIVE
        </Text>
      </Box>
    </>
  );
}
