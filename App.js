import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Register2Page from './Register2Page';
import MainPage from './MainPage';
import SettingPage from './SettingPage';
import Alarm from './Alarm';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MAIN">
        <Stack.Screen name="MAIN" component={MainPage}
          options={{
            headerShown: false
          }}/>
        <Stack.Screen name="SETTING" component={SettingPage}
          options={{
            headerShown: false
          }}/>
        <Stack.Screen name="ALARM" component={Alarm}
          options={{
            headerShown: false
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

    /*<NavigationContainer>
      <Stack.Navigator initialRouteName='"LOGIN'>
        <Stack.Screen name="LOGIN" component={LoginPage}
          options={{
            headerShown: false
          }}/>
          <Stack.Screen name="REGISTER" component={RegisterPage}
          options={{
            headerShown: false
          }}/>
          <Stack.Screen name="REGISTER2" component={Register2Page}
          options={{
            headerShown: false
          }}/>
      </Stack.Navigator>
    </NavigationContainer>*/