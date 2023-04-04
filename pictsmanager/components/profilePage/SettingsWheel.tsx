import React, {useState} from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";

interface IProps {
    openSettings: () => void;
}

export default function SettingsWheel(props: IProps) {
    const [hasNotifies, setHasNotifies] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleNotifies = () => {
        setHasNotifies(!hasNotifies);
    }
    const openSettings = () => {
        props.openSettings();
        setIsSettingsOpen(!isSettingsOpen);
    }

    return (
        <TouchableOpacity style={styles.settings} onPress={() => openSettings()}>
            {hasNotifies && <View style={styles.notifies}/>}
            <Image source={require('../../assets/images/settings/settings.png')} style={styles.settingsImage}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    settings : {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 15,
    },
    settingsImage: {
        height: 35,
        width: 35,
    },
    notifies: {
        backgroundColor: 'red',
        height: 10,
        width: 10,
        borderRadius: 5,
        position: 'absolute',
        top: 0,
        right: -2,

    }
});