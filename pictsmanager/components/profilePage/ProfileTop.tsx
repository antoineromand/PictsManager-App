import { StyleSheet, Image, ImageBackground } from 'react-native';
import { Text, View } from '../Themed';
import StatBar from './StatBar';
import React, { useEffect, useState } from 'react';
import { AxiosRequestCustom } from '../../app/utils/AxiosRequestCustom';

interface IProps {
    userId: number;
}

export default function ProfileTop(props: IProps) {   
    
    const [circular, setCircular] = useState('../../assets/images/puppy.jpg');
    const [backGround, setBackGround] = useState('../../assets/images/puppy.jpg');
    
    useEffect(() => {
        const request = new AxiosRequestCustom();
        const circularImageRequest = {url: 'https://api.pexels.com/v1/search?query=nature&per_page=1&orientation=square&size=small', headers: {Authorization: `HYE05oqBNnQOA27M2TNBpVRfoFathL9EClnaxjoFyQySGbIRxbAFYlTt`}}; 
        const backImageRequest = {url: 'https://api.pexels.com/v1/search?query=puppy&per_page=1&orientation=landscape&size=small', headers: {Authorization: `HYE05oqBNnQOA27M2TNBpVRfoFathL9EClnaxjoFyQySGbIRxbAFYlTt`}}; 
        request.getRequest(circularImageRequest).then((response) => setCircular(response.data.photos[0].src.portrait));
        request.getRequest(backImageRequest).then((response) => setBackGround(response.data.photos[0].src.landscape));
      }, []);

    return (
        <View style={styles.container}>    
            <ImageBackground source={{uri: backGround}} style={styles.backgroundImage}>
                <View style={styles.alignCenter}>
                    <Image
                        style={styles.circularImage}
                        source={{uri: circular}}
                    />
                    <Text style={[styles.title]}>Mon Profil</Text>
                    <Text style={styles.subtitle}>Je sulllis là</Text>
                </View>
                <StatBar />
            </ImageBackground>
        </View>
    );
}

//clé api pexels: HYE05oqBNnQOA27M2TNBpVRfoFathL9EClnaxjoFyQySGbIRxbAFYlTt
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
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
        height: 'auto',
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