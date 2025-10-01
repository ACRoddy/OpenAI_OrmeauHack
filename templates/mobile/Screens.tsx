import React from 'react';
import { View, Text, Button } from 'react-native';

export function LoginScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button title="Continue" onPress={() => navigation.navigate('GroupLobby')} />
    </View>
  );
}

export function GroupLobbyScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Group Lobby</Text>
      <Button title="Start Swiping" onPress={() => navigation.navigate('Swipe')} />
    </View>
  );
}

export function SwipeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Swipe Deck Placeholder</Text>
      <Button title="Finish" onPress={() => navigation.navigate('Consensus')} />
    </View>
  );
}

export function ConsensusScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Your Quick Pick: Encanto 🎉</Text>
      <Button title="Play" onPress={() => {}} />
    </View>
  );
}


