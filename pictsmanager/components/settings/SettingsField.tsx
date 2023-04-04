import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

interface IProps {
    title: string;
    content: string;
}

export default function SettingsField(props: IProps) {
    return (

        <View style={styles.inputField}>
            <Text style={styles.smallTitle}>{props.title}</Text>
            <TouchableOpacity>
                <Image source={require('../../assets/images/settings/editPen.png')} style={styles.editPen} />
            </TouchableOpacity>
            <Text style={styles.inputContent}>{props.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    inputField: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(242,242,242)',
        width: '100%',
        maxHeight: 50,
        borderRadius: 10,
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
    editPen: {
        position: 'absolute',
        right: 10,
        top: 10,
        height: 20,
        width: 20,

    }
});