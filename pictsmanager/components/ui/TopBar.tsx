import {Image, TouchableOpacity, View, StyleSheet, Dimensions} from "react-native";
import React from "react";

interface IProps {
    backLink: () => void;
    editLink: () => void;
}
export default function TopBar(props: IProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backHome} onPress={() => props.backLink()}>
                <Image source={require('../../assets/images/settings/backArrow.png')} style={styles.backHomeImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backHome} onPress={() => props.editLink()}>
                <Image source={require('../../assets/images/settings/editPen.png')} style={styles.backHomeImage}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    backHome : {
        zIndex: 1,
        top: 20,
        left: 0,
        margin: 15,
        backgroundColor: 'transparent',
    },
    backHomeImage: {
        height: 35,
        width: 35,
    }
});