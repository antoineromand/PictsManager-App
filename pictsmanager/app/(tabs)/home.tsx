import { StyleSheet} from 'react-native';
import { View } from '../../components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from '../../models/user';
import React, { useEffect, useState } from 'react';
import Profile from "../../components/profilePage/Profile";
import UserController from "../../controllers/user";

export default function TabOneScreen() {
  const userController = new UserController();
  const testUser: IUser = {
    username: '',
    email: '',
    profile: {
      id: 0,
      userId: 0,
      pseudo: '',
      description: '',
      birthDate: new Date(),
      picture: '',
      background: '',
    },
    isPublic: false,
    isBanned: false,
    id: 0,
    password: '',
  }
  const [user, setUser] = useState<IUser>({
    id: 0,
    username: '',
    email: '',
    profile: {
        id: 0,
      userId: 0,
      pseudo: '',
      description: '',
      birthDate: new Date(),
      picture: '',
      background: '',
    },
    password: '',
    isPublic: false,
    isBanned: false,
  });

  useEffect(() => {
    const myUser = userController.getUserSecurity();
    myUser.then((value) => {
        testUser.username = value.username!;
        testUser.email = value.email!;
        testUser.isPublic = value.public!;
        const myUser2 = userController.getUserProfile();
        myUser2.then((value) => {
              testUser.profile.description = value.description!;
              testUser.profile.picture = value.profilePicture!;
              testUser.profile.background = value.coverPicture!;
              setUser(testUser);
            }
        );
    }
    );

  }, [user]);

  return (
    <View style={styles.container}>
      <Profile showSettingsWheel={true} user={user}/>
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
