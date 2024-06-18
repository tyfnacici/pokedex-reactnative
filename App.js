import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

const fetchPokemons = async () => {
  const response = await fetch(apiUrl)
  console.log(response)
}

export default function App() {

  useEffect(() => {
    fetchPokemons()
  }, [])
  

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your pokedex!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
