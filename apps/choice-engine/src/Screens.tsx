import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { dummyMovies } from '../../backend/data/dummyMovies';

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
  const [index, setIndex] = React.useState(0);
  const movie = dummyMovies[index];
  if (!movie) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>No more cards</Text>
        <Button title="Finish" onPress={() => navigation.navigate('Consensus')} />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <Image source={{ uri: movie.posterUrl }} style={{ width: 280, height: 420, borderRadius: 12, marginBottom: 12 }} />
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>{movie.title}</Text>
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <Button title="Skip" onPress={() => setIndex((i) => i + 1)} />
        <Button title="Like" onPress={() => setIndex((i) => i + 1)} />
      </View>
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


