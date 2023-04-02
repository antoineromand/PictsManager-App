import { StyleSheet, ScrollView } from 'react-native';
import { View } from '../Themed';
import ProfileTop from './ProfileTop';
import ProfileBottom from './ProfileBottom';
import {IUser} from '../../models/user';
import React, { useEffect, useState } from 'react';
import {AxiosRequestCustom} from '../../app/utils/AxiosRequestCustom';

export default function ProfilePage(props: {user: IUser}) {
    return(
        <View style={ {backgroundColor: 'white'}}>
            <ScrollView stickyHeaderIndices={[1]} style={styles.scrollr}>
                <ProfileTop userId={props.user.id}/>
                <ProfileBottom userId={props.user.id}/>
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