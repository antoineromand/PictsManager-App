import { StyleSheet, ScrollView } from 'react-native';
import { View } from '../Themed';
import ProfileTop from './ProfileTop';
import EditScreenInfo from '../EditScreenInfo';
import FilterBar from './FilterBar';
import {IUser} from '../../models/user';
import React, { useEffect, useState } from 'react';
import {AxiosRequestCustom} from '../../app/utils/AxiosRequestCustom';
import ProfilePictures from './ProfilePictures';

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
        <View style={ {backgroundColor: 'white'}}>
            <ScrollView stickyHeaderIndices={[1]} style={styles.scrollr}>
                <ProfileTop userId={user.id}/>
                <FilterBar />
                <ProfilePictures />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollr: {
      flex: 1,
      flexDirection: 'column',
      rowGap: 10,
    }
  });