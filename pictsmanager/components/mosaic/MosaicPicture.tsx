import { View } from '../Themed';
import {StyleSheet, Image, ImageSourcePropType, TouchableOpacity} from 'react-native';

interface IProps {
    url: string;
    isPicture: boolean;
}

export default function MosaicPicture(props: IProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log(props.url)} >
                <Image source={{uri: props.url}} style={styles.picture}/>
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