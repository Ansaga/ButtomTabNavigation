import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/myTabs'
import HomeSecond from "./src/homeSecond";




export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      // Tab Buttons
      ///
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>

      // Stack Change Page
      // <HomeSecond/>
    );
  }
}
