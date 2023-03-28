import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { AxiosRequestCustom } from '../utils/AxiosRequestCustom';

export async function getToken() {
  try {
    const value = await AsyncStorage.getItem('@token');
    return await value;
  } catch (error: any) {
    return null;
  }
}

export default function TabOneScreen() {
  const [token, setToken] = React.useState<string | null>(null);
  getToken().then((value) => {
    setToken(value);
  });
  useEffect(() => {
    const request = new AxiosRequestCustom('http://localhost:3000', 'GET', {});
    request.send().then((response) => console.log(response));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab De Test</Text>
      {token ? <Text style={styles.title}>Token : {token}</Text> : <Text style={styles.title}>Pas de token</Text>}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
