import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {
  CreateProfile,
  LoginCreatePass,
  LoginFoto,
  LoginNope,
  LoginPass,
  LoginPertama,
  LoginVerif,
  NewPhoto,
} from '../../auth';
import MenuUtama from './menu_utama';
import {ViewPengaturan} from '../../dating';
import {ViewLive} from '../../live';
import {SearchUser} from '../../chat';
import {SettingProfile} from '../../profile';

export default function MenuAuth() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPertama}
          options={{headerShown: false, statusBarColor: '#f5d0fe'}}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#f5d0fe'},
            statusBarColor: '#f5d0fe',
          }}
          name="LoginNope"
          component={LoginNope}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#f5d0fe'},
            statusBarColor: '#f5d0fe',
          }}
          name="LoginKode"
          component={LoginVerif}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#f5d0fe'},
            statusBarColor: '#f5d0fe',
          }}
          name="LoginPass"
          component={LoginPass}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#f5d0fe'},
            statusBarColor: '#f5d0fe',
          }}
          name="New Photo"
          component={NewPhoto}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#f5d0fe'},
            statusBarColor: '#f5d0fe',
          }}
          name="LoginFoto"
          component={LoginFoto}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#f5d0fe'},
            statusBarColor: '#f5d0fe',
          }}
          name="Create Password"
          component={LoginCreatePass}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#f5d0fe'},
            statusBarColor: '#f5d0fe',
          }}
          name="Create Profile"
          component={CreateProfile}
        />
        <Stack.Screen
          name="MenuUtama"
          component={MenuUtama}
          options={{headerShown: false, statusBarColor: '#f5d0fe'}}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#f5d0fe'},
            statusBarColor: '#f5d0fe',
          }}
          name="Pengaturan"
          component={ViewPengaturan}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#f5d0fe'},
            statusBarColor: '#f5d0fe',
          }}
          name="New Live"
          component={ViewLive}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#f5d0fe'},
            statusBarColor: '#f5d0fe',
            title: 'Search',
          }}
          name="SearchUser"
          component={SearchUser}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#f5d0fe'},
            statusBarColor: '#f5d0fe',
            title: 'Pengaturan',
          }}
          name="PengaturanProfile"
          component={SettingProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
