import {StyleSheet, Image, ImageBackground} from 'react-native';
import { Text, View } from '../Themed';
import StatBar from './StatBar';
import React, { useEffect, useState } from 'react';
import SettingsWheel from "./SettingsWheel";
import UserController from "../../controllers/user";

interface IProps {
    userId: number;
    openSettings: () => void;
}

export default function ProfileTop(props: IProps) {   
    
    const [circular, setCircular] = useState('../../assets/images/puppy.jpg');
    const [backGround, setBackGround] = useState('../../assets/images/puppy.jpg');

    useEffect(() => {
        const userController = new UserController();
        userController.getUserProfile().then((response) => setCircular(response.profilePicture));
        userController.getUserProfile().then((response) => setBackGround(response.coverPicture));
      }, []);

    function toggleSettings() {
        props.openSettings();
    }

    return (
        <View >
            <ImageBackground source={{uri: backGround}} style={styles.backgroundImage}>
                <SettingsWheel openSettings={toggleSettings}/>
                <View style={styles.alignCenter}>
                    <Image
                        style={styles.circularImage}
                        source={{uri: circular}}
                        />
                    <Text style={[styles.title]}>Mon Profil</Text>
                    <Text style={styles.subtitle}>Je suis là</Text>
                </View>
                <StatBar />
            </ImageBackground>
        </View>
    );
}

//clé api pexels: HYE05oqBNnQOA27M2TNBpVRfoFathL9EClnaxjoFyQySGbIRxbAFYlTt
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 10,
        color: 'grey',
    },
    circularImage: {
        marginVertical: 20,
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 6,
    },
    backgroundImage: {
        width: '100%',
        height: 'auto',
    },
    alignCenter: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginBottom: 20,
    },
    settings : {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 15,
    },
    settingsImage: {
        height: 35,
        width: 35,
    }
    });