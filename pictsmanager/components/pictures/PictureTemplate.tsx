import { View } from '../Themed';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface IProps {
    url: string;
}

export default function PictureTemplate(props: IProps) {
    return (
        <View style={styles.container}>
            <Image source={{uri: props.url}} style={styles.picture}/>
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