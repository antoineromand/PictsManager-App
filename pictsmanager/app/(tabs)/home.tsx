import { StyleSheet} from 'react-native';
import { View } from '../../components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfilePage from '../../components/profilePage/ProfilePage';
import { IUser } from '../../models/user';
import React, { useEffect, useState } from 'react';
import SettingsWheel from "../../components/profilePage/SettingsWheel";
import SettingsPage from "../../components/settings/SettingsPage";

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
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  //user information will be gotten from the server with the logged-in user's id
  const [user, setUser] = useState<IUser>({
    id: 0,
    username: '',
    email: '',
    password: '',
    isPublic: false,
    isBanned: false,
  });

  getToken().then((value) => {
    setToken(value);
  });
  function toggleSettings() {
    setIsSettingsOpen(!isSettingsOpen);
  }
  useEffect(() => {
    // const request = new AxiosRequestCustom('http://localhost:3000', 'GET', {});
    // request.send().then((response) => console.log(response));
  }, []);
  return (
    <View style={styles.container}>
      {!isSettingsOpen ?
          <ProfilePage user={user} openSettings={toggleSettings}/>
          :
          <SettingsPage openSettings={toggleSettings}/>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
