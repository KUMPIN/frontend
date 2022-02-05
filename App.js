// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './MainPage';
import SettingPage from './SettingPage';
import Account from './ChangeAccountInfo';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MAIN">
        <Stack.Screen name="MAIN" component={MainPage}
        options={{ headerShown: false}}
        />
        <Stack.Screen name="ACCOUNT" component={Account}
        options={{
          title: '계정 정보 설정'
        }}/>
        <Stack.Screen name="SETTING" component={SettingPage} 
          options={{
            title: '설정'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;