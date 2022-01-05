import HomeComponent from './screens/home';
import configureStore from './configureStore';
import { createDispatchHook, Provider, ReactReduxContext } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/screen1';
import configureStore2 from './configureStore2';
import React from 'react';
export default function App() {
  const store=configureStore();
  const store2=configureStore2();
  return (
  <Provider store = { store }  >
    <HomeComponent/>
    <Provider store={store2}>
    <Screen1 />
    </Provider>
  </Provider>
);
}

