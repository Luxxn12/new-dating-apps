import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import React from 'react';
import MenuAuth from './modules/_global/components/menu_auth';

function App() {
  return (
    <GluestackUIProvider config={config}>
      <MenuAuth />
    </GluestackUIProvider>
  );
}

export default App;
