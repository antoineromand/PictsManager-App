import * as MediaLibrary from 'expo-media-library';
import { Text } from 'react-native';
import UploadPictureComponent from '../../components/camera/UploadPicture';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
export default function UploadPicture(props: MediaLibrary.Asset) {
    
    return (
        <>
            <UploadPictureComponent uri={props.uri} />
        </>
    );
}