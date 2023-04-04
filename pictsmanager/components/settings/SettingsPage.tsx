import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, Button, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import {AxiosRequestCustom} from "../../app/utils/AxiosRequestCustom";
import SettingsField from "./SettingsField";
import SettingsFriends from "./SettingsFriends";

interface IProps {
    openSettings: () => void;
}
export default function SettingsPage(props: IProps) {
    const [circular, setCircular] = useState('../../assets/images/puppy.jpg');

    useEffect(() => {
        const request = new AxiosRequestCustom('', 'get', {});
        const circularImageRequest = {url: 'https://api.pexels.com/v1/search?query=nature&per_page=1&orientation=square&size=small', headers: {Authorization: `HYE05oqBNnQOA27M2TNBpVRfoFathL9EClnaxjoFyQySGbIRxbAFYlTt`}};
        request.getRequest(circularImageRequest).then((response) => setCircular(response.data.photos[0].src.portrait));
    }, []);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backHome} onPress={() => props.openSettings()}>
                <Image source={require('../../assets/images/settings/backArrow.png')} style={styles.backHomeImage}/>
            </TouchableOpacity>
            <View style={styles.alignCenter}>
                <Image
                    style={styles.circularImage}
                    source={{uri: circular}}
                />
            </View>
            <View style={styles.fieldsColumn}>
                <SettingsField title={'Nom de Compte'} content={'User#462'} />
                <SettingsField title={'Description'} content={'Profil de voyage'} />
                <SettingsField title={'Sécurité'} content={'Public'} />
            </View>
            <View style={styles.flexRow}>
                <SettingsFriends title={'Amis'} />
                <SettingsFriends title={'Demandes d\'Amis'} />
            </View>
            <Pressable style={styles.deleteAccountButton} >
                <Text style={styles.deleteAccountText}>Delete Account</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        paddingVertical: 50,
    },
    backHome : {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 15,
        backgroundColor: 'transparent',
    },
    backHomeImage: {
        height: 35,
        width: 35,
    },
    circularImage: {
        marginVertical: 20,
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 6,
    },
    alignCenter: {
        flex: 1,
        alignItems: 'center',
    },
    fieldsColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        rowGap: 20,
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 40,
    },
    deleteAccountButton: {
        backgroundColor: 'rgb(212,65,65)',
        width: '70%',
        height: 50,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteAccountText: {
        color: 'white',
        // fontSize: 20,
        fontWeight: 'bold',
    }
});