import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MainScreen from './screens/MainScreen';
import WriteScreen from './screens/WriteScreen';
import DetailScreen from './screens/DetailScreen';

const BaseNavi = createBottomTabNavigator({
  MainScreen: {
    screen: MainScreen
  },
  DetailScreen: {
    screen: DetailScreen
  },
  WriteScreen: {
    screen: WriteScreen
  },
})

const MyNavi = createAppContainer(BaseNavi)

export default function App() {
  return (
    <View style={styles.container}>
      <MyNavi />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});