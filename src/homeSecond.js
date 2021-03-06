import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './homeScreen';
import DetailsScreen from './detailScreen';

const Stack = createStackNavigator();
const HomeSecond= () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
};

export default HomeSecond;