/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import ViewRekomendasi from './view_rekomendasi';
import ViewDisekitar from './view_disekitar';

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: '#f5d0fe', padding: 15}}>
    <ViewRekomendasi />
  </View>
);
const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#f5d0fe', padding: 15}}>
    <ViewDisekitar />
  </View>
);

export default function Live() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Rekomendasi'},
    {key: 'second', title: 'Disekitar'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={'#a21caf'}
      inactiveColor={'black'}
      style={{backgroundColor: '#f5d0fe'}}
    />
  );
  return (
    <>
      {/* <Box bgColor="$fuchsia200" h={'$full'}> */}
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </>
  );
}
