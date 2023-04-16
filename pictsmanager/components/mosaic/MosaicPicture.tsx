import { View } from '../Themed';
import {StyleSheet, Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import {IPicture} from "../../models/picture";

interface IProps {
    picture: IPicture;
    togglePicture: (showPict: IPicture) => void;
}

export default function MosaicPicture(props: IProps) {
    function togglePicture() {
        props.togglePicture(props.picture);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={togglePicture} >
                <Image source={{uri: props.picture.url}} style={styles.picture}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    picture: { 
        width: 100,
        height: 100,
        margin: 6,
        borderRadius: 10,
    },
  });