import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, Button, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import {AxiosRequestCustom} from "../../app/utils/AxiosRequestCustom";

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
                <View style={styles.inputField}>
                    <Text style={styles.smallTitle}>Settings</Text>
                    <Text style={styles.inputContent}>Value</Text>
                </View>
                <View style={styles.inputField}>
                    <Text style={styles.smallTitle}>Settings</Text>
                    <Text style={styles.inputContent}>Value</Text>
                </View>
                <View style={styles.inputField}>
                    <Text style={styles.smallTitle}>Settings</Text>
                    <Text style={styles.inputContent}>Value</Text>
                </View>
            </View>
            <View style={styles.flexRow}>
                <TouchableOpacity style={styles.graySquare} onPress={() => props.openSettings()}>
                    <Text style={styles.centerText}>Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.graySquare} onPress={() => props.openSettings()}>
                    <Text style={styles.centerText}>Friend Requests</Text>
                </TouchableOpacity>
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
    },
    backHome : {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 10,
        backgroundColor: 'transparent',
    },
    backHomeImage: {
        height: 35,
        width: 35,
    },
    circularImage: {
        marginVertical: 40,
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
    inputField: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(242,242,242)',
        width: '80%',
        maxHeight: 50,
        borderRadius: 10,
    },
    fieldsColumn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10,
        backgroundColor: 'transparent',
    },
    inputContent: {
        position: 'absolute',
        bottom: 5,
        fontSize: 20,
        marginLeft: 15,
    },
    smallTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'rgb(150,150,150)',
        position: 'absolute',
        top: 5,
        left: 10,

    },
    flexContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    graySquare: {
        backgroundColor: 'rgb(242,242,242)',
        width: 100,
        height: 100,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerText: {
        textAlign: 'center',
    },
    deleteAccountButton: {
        backgroundColor: 'red',
        width: '80%',
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