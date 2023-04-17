import { Image, ActivityIndicator, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import * as FileSystem from 'expo-file-system';
import ImageFormComponent from './ImageForm';
import { violetColor } from '../../constants/Colors';


interface Props {
    uri: string;
}



export default function UploadPictureComponent(prop: Props) {
  const [byteArray, setByteArray] = useState<Uint8Array>(new Uint8Array(0));
  const [base64Image, setBase64Image] = useState<string>('');
  const [imageSource, setImageSource] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function imageToByteArray(imagePath: string) {
    try {
      const base64Image = await FileSystem.readAsStringAsync(imagePath, { encoding: FileSystem.EncodingType.Base64 });
      setByteArray(base64ImageToByteArray(base64Image));
    } catch (error) {
      console.error('Error reading image file:', error);
    }
  }
  
  function base64ImageToByteArray(base64Image: string) {
    const buffer = Buffer.from(base64Image, 'base64');
    const byteArray = new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    return byteArray;
  }

  async function loadImage() {
    setLoading(true);
    await imageToByteArray(prop.uri);
  
    setLoading(false);
  }

  useEffect(() => {
    loadImage();
  }, []);


  return (
    <View>
      {
        loading ? <ActivityIndicator size="large" color="#6c64ec" /> : 
      <>
        <Text style={{color: violetColor, textAlign:'center',padding: 20, fontWeight:'700'}}>Partager une image !</Text>
        <Image source={{ uri: prop.uri }} style={{ width: 400, height: 400, marginBottom: 10 }} />
        {byteArray.length > 0 && <ImageFormComponent image={byteArray} />}
      </>
      }
    </View>
  )
}