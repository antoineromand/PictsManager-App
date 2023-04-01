import { StyleSheet, ScrollView } from 'react-native';
import { View } from '../Themed';
import ProfileTop from './ProfileTop';
import EditScreenInfo from '../EditScreenInfo';
import FilterBar from './FilterBar';
import {IUser} from '../../models/user';
import React, { useEffect, useState } from 'react';
import {AxiosRequestCustom} from '../../app/utils/AxiosRequestCustom';

export default function ProfilePage(props: {user: IUser}) {
  const [circular, setCircular] = useState('../../assets/images/puppy.jpg');
  const [backGround, setBackGround] = useState('../../assets/images/puppy.jpg');
  //create a user let to store the user's information
  const [user, setUser] = useState(props.user);

  useEffect(() => {
      const request = new AxiosRequestCustom();
      //get all user's information
      // request.getRequest({}).then((response) => setCircular(response.data.photos[0].src.portrait));
    }, []);

    return(
        <View>
            <ScrollView stickyHeaderIndices={[1]}>
                <ProfileTop 
                  userId={user.id}/>
                <FilterBar />
                <EditScreenInfo path="app/(tabs)/index.tsx" />
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
    },
  });