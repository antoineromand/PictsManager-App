import { StyleSheet, Image, ScrollView } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { AxiosRequestCustom } from '../utils/AxiosRequestCustom';
import ProfileTop from '../../components/profilePage/ProfileTop';

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
      <ScrollView
        stickyHeaderIndices={[2]}>
        <ProfileTop />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/efeghztsx" />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </ScrollView>
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
  circularImage: {
    marginVertical: 30,
    height: 100,
    width: 100,
    borderRadius: 50,
  }
});
