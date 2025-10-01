import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, GroupLobbyScreen, SwipeScreen, ConsensusScreen } from './Screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="GroupLobby" component={GroupLobbyScreen} options={{ title: 'Group Lobby' }} />
        <Stack.Screen name="Swipe" component={SwipeScreen} options={{ title: 'Swipe' }} />
        <Stack.Screen name="Consensus" component={ConsensusScreen} options={{ title: 'Your Quick Pick' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


