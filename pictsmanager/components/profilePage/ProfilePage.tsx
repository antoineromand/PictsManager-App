import { StyleSheet, ScrollView } from 'react-native';
import { View } from '../Themed';
import ProfileTop from './ProfileTop';
import ProfileBottom from './ProfileBottom';
import {IUser} from '../../models/user';
import {IPicture} from "../../models/picture";
import React, { useEffect, useState } from 'react';
import FilterBar from "./FilterBar";
import FullScreenImage from "../picture/FullScreenImage";

interface IProps {
    openSettings: () => void;
    user: IUser;
    showSettingsWheel: boolean;
}

export default function ProfilePage(props: IProps) {
    let [isShowingPictures, setIsShowingPictures] = useState(true);
    const [fullScreenImage, setFullScreenImage] = useState(false);
    const [fullScreenPicture, setFullScreenPicture] = useState<IPicture>();

    function togglePicture(picture: IPicture) {
        setFullScreenPicture(picture);
        setFullScreenImage(!fullScreenImage);
    }
    function ToggleFilter() {
        setIsShowingPictures(!isShowingPictures);
    }
    function toggleSettings() {
        props.openSettings();
    }

    return(
        <View style={ {backgroundColor: 'white'}}>
            <ScrollView stickyHeaderIndices={[1]} style={styles.scrollr}>
                <ProfileTop showSettingsWheel={props.showSettingsWheel} user={props.user} openSettings={toggleSettings}/>
                <FilterBar toggleFilter={ToggleFilter}/>
                <ProfileBottom isShowingPictures={isShowingPictures} userId={props.user.id} fullScreenPicture={togglePicture}/>
            </ScrollView>
            {fullScreenImage && <FullScreenImage picture={fullScreenPicture!} togglePicture={togglePicture}/>}
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