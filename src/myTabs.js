import * as React from 'react';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "./home";
import HomeSecond from "./homeSecond";
import Update from "./update";
import Profile from "./profile";
const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Update"
        component={Update}
        options={{
          tabBarLabel: 'Update',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="label" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="lock" color={color} size={size}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;