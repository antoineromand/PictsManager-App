import { View } from '../Themed';
import {StyleSheet, ImageBackground, Text, TouchableOpacity} from 'react-native';

interface IProps {
    url: string;
    isPicture: boolean;
    galleryName: string;
}

export default function MosaicGallery(props: IProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={() => console.log(props.galleryName)} >
                <ImageBackground source={{uri: props.url}} style={styles.image}>
                    <View style={styles.overlay}>
                        <Text style={styles.text}>{props.galleryName}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    image: {
        flex: 1,
        height: 100,
        width: 100,
        margin: 6,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 10,
    },
  });