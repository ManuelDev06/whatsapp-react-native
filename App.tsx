import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './src/screens/ChatScreen';

export type StackParams = {
  ChatScreen: undefined
}

const Stack = createStackNavigator<StackParams>();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            elevation: 0
          }
        }}
      >
        <Stack.Screen name='ChatScreen' component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App