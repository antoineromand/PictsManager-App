import { StyleSheet, ScrollView } from 'react-native';
import { View } from '../Themed';
import ProfileTop from './ProfileTop';
import ProfileBottom from './ProfileBottom';
import {IUser} from '../../models/user';
import React, { useEffect, useState } from 'react';
import {AxiosRequestCustom} from '../../app/utils/AxiosRequestCustom';
import FilterBar from "./FilterBar";

export default function ProfilePage(props: {user: IUser}) {
    let [isShowingPictures, setIsShowingPictures] = useState(true);

    function ToggleFilter() {
        setIsShowingPictures(!isShowingPictures);
    }

    return(
        <View style={ {backgroundColor: 'white'}}>
            <ScrollView stickyHeaderIndices={[1]} style={styles.scrollr}>
                <ProfileTop userId={props.user.id}/>
                <FilterBar toggleFilter={ToggleFilter}/>
                <ProfileBottom isShowingPictures={isShowingPictures} userId={props.user.id}/>
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