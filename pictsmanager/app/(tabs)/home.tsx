import { StyleSheet} from 'react-native';
import { View } from '../../components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import ProfilePage from '../../components/profilePage/ProfilePage';

export async function getToken() {
  try {
    const value = await AsyncStorage.getItem('@token');
    return value;
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
    // const request = new AxiosRequestCustom('http://localhost:3000', 'GET', {});
    // request.send().then((response) => console.log(response));
  }, []);
  return (
    <View style={styles.container}>
      <ProfilePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
