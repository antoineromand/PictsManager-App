import {View, Image, StyleSheet, Text, Dimensions, TouchableOpacity, TextInput} from "react-native";
import {IPicture} from "../../models/picture";
import React from "react";
import TopBar from "../ui/TopBar";

interface IProps {
    picture: IPicture;
    togglePicture: (showPict: IPicture) => void;
}

export default function FullScreenImage(props: IProps) {
    const [editMode, setEditMode] = React.useState(false);

    function toggleEditMode() {
        setEditMode(!editMode);
    }

    function togglePicture() {
        props.togglePicture(props.picture);
    }

    return (
        <View style={styles.container}>
            <TopBar backLink={togglePicture} editLink={toggleEditMode}/>
            <Image source={{uri: props.picture.url}} style={styles.picture}/>
            <TextInput editable={editMode} style={editMode ? styles.pictureText2 : styles.pictureText}>{props.picture.caption}</TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'black',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picture: {
        width: Dimensions.get('window').width * .9,
        height: Dimensions.get('window').width * .9,
        margin: 6,
        borderRadius: 10,
    },
    pictureText: {
        padding: 15,
        width: '90%',
        color: 'white',
        textAlign: 'left',
        flexWrap: 'wrap',
    },
    pictureText2: {
        padding: 15,
        width: '90%',
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        color: 'black',
        textAlign: 'left',
        flexWrap: 'wrap',
    }
});