import { StyleSheet, TouchableOpacity, Image, Dimensions, useWindowDimensions } from 'react-native';
import {Camera, CameraPictureOptions, CameraType, FlashMode, PermissionResponse} from 'expo-camera'
import { Text, View } from '../../components/Themed';
import { useEffect, useState } from 'react';
import React from 'react';
import * as MediaLibrary from 'expo-media-library';
import UploadPicture from '../../app/camera/uploadPicture';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function CameraComponent() {

  const cameraRef: any = React.createRef();
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [asset, setAsset] = useState<MediaLibrary.Asset | null>(null);
  const [type, setType] = useState<CameraType>(CameraType.back);
  const [zoom, setZoom] = useState<number>(0);
  const [flashMode, setFlashMode] = useState<FlashMode>(FlashMode.off);

  const __takeAPicture = async () => {
    const cameraOptionsPicture: CameraPictureOptions = {
      quality: 0.7,
      base64: true,
      skipProcessing: true,
    };
    const { uri } = await cameraRef.current?.takePictureAsync(cameraOptionsPicture);
    const asset = await MediaLibrary.createAssetAsync(uri);
    setAsset(asset);
  }  

  const __getPermission = async () => 
    {
      setAsset(null);
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      requestPermission();
    }

  useEffect(() => {
    __getPermission();
  }, []);

  if (asset) {
    return <UploadPicture {...asset} />;
  }
  
  const switchCameraType = () => {
    if (type === CameraType.back) {
      setType(CameraType.front);
    } else {
      setType(CameraType.back);
    }
  }

  return (
    <View style={styles.container}>
      {hasPermission && (
        <>
        <Camera style={styles.camera} ref={cameraRef} ratio={'4:3'} type={type}></Camera>
        <View style={styles.cameraBtn}>
          <TouchableOpacity onPress={__takeAPicture} style={styles.captureButton}>
            <MaterialIcons name="photo-camera" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={switchCameraType} style={styles.captureButton}>
            <MaterialIcons name="flip-camera-android" size={30} color="black" />
          </TouchableOpacity>
        </View>
        </>
      )}
    </View>
  );
}

// const {width} = useWindowDimensions();
// const height = Math.round((width * 16) / 9) / 1.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  camera: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  captureButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraBtn: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    padding: 20,
    textAlign: 'center',
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
});
