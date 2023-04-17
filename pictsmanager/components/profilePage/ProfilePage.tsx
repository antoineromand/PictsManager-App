import { StyleSheet, ScrollView } from 'react-native';
import { View } from '../Themed';
import ProfileTop from './ProfileTop';
import ProfileBottom from './ProfileBottom';
import {IUser} from '../../models/user';
import {IPicture} from "../../models/picture";
import React, { useState } from 'react';
import FilterBar from "./FilterBar";
import FullScreenImage from "../picture/FullScreenImage";

interface IProps {
    openSettings: () => void;
    user: IUser;
    showSettingsWheel: boolean;
    backLink?: () => void;
}

export default function ProfilePage(props: IProps) {
    let [isShowingPictures, setIsShowingPictures] = useState(true);
    const [fullScreenImage, setFullScreenImage] = useState(false);
    const [fullScreenPicture, setFullScreenPicture] = useState<IPicture>();
    const [isSettingsOpen] = useState(props.showSettingsWheel);

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
                <ProfileTop showSettingsWheel={isSettingsOpen} user={props.user} openSettings={toggleSettings} backLink={props.backLink}/>
                <FilterBar toggleFilter={ToggleFilter}/>
                <ProfileBottom isShowingPictures={isShowingPictures} userId={props.user.id} fullScreenPicture={togglePicture}/>
            </ScrollView>
            {fullScreenImage && <FullScreenImage picture={fullScreenPicture!} togglePicture={togglePicture} showSettingsWheel={isSettingsOpen}/>}
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