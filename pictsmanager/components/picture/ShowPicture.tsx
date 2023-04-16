import {View, Image, StyleSheet, Text, Dimensions} from "react-native";
import {IPicture} from "../../models/picture";

interface IProps {
    picture: IPicture;
    togglePicture: (showPict: IPicture) => void;
}

export default function ShowPicture(props: IProps) {
    function togglePicture() {
        props.togglePicture(props.picture);
    }

    return (
        <View style={styles.container}>
            <Image source={{uri: props.picture.url}} style={styles.picture}/>
            <Text onPress={togglePicture}>{props.picture.caption}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        // zIndex: 3,
        backgroundColor: 'blue',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    picture: {
        width: 200,
        height: 200,
        margin: 6,
        borderRadius: 10,
    },
});