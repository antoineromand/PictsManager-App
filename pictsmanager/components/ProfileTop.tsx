import { StyleSheet, Image, ImageBackground } from 'react-native';
import { Text, View } from './Themed';

export default function ProfileTop() {    
    return (
        <View style={styles.container}>    
            <ImageBackground source={require('../assets/images/puppy.jpg')} style={styles.backgroundImage}>
                <View style={styles.alignCenter}>

                    <Image
                    //put two styles in one style property
                    style={[styles.circularImage]}
                    source={require('../assets/images/images.jpg')}
                    />
                    <Text style={[styles.title]}>Mon Profile</Text>
                    <Text style={styles.subtitle}>Je suis là</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 10,
        color: 'grey',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    circularImage: {
        marginVertical: 20,
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 6,
    },
    backgroundImage: {
        width: '100%',
        height: 250,
    },
    alignCenter: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0)',
        marginBottom: 20,
    },
    });