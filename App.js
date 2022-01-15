import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Register2Page from './Register2Page';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

export default App;