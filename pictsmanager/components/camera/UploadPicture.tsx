import { Image, ActivityIndicator, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { violetColor } from '../../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { env } from '../../config/env';
import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';



interface Props {
    asset: any;
}



export default function UploadPictureComponent(prop: Props) {
  const [description, setDescription] = useState<string>('');

    const build = async () => {
        uploadImageAsync(prop.asset.uri);
    }

    async function uploadImageAsync(uri: string) {
      // Lire les données de l'image à partir de l'URI
      const imageData = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
    
    
      const formData = new FormData();
      formData.append("image", imageData);
    
      // Ajoutez d'autres données de formulaire si nécessaire
      formData.append("description", description);
      const token = await AsyncStorage.getItem("@token");
    
      // Configurer les options de requête
      if (token) {
        const options = {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        };
    
        // Envoyer la requête
        const response = await fetch(
          env.API_URL + "/private/api/image-manager/upload",
          options
        );
        // Traiter la réponse
        if (!response.ok) {
          throw new Error("Erreur lors de l'envoi de l'image");
        }
        const jsonResponse = await response.json();
        console.log("Image uploadée avec succès:", jsonResponse);
      } else {
        throw new Error("Erreur lors de l'envoi de l'image");
      }
    }
    

  return (
    <><View>
      <Text style={{ color: violetColor, textAlign: 'center', padding: 20, fontWeight: '700' }}>Partager une image !</Text>
      <Image source={{ uri: prop.asset.uri }} style={{ width: 400, height: 400, marginBottom: 10 }} />
    </View><View style={styles.container}>
        <TextInput
          onChangeText={(val: string) => { setDescription(val); } }
          value={description}
          placeholder="Description ..." />
        <TouchableOpacity onPress={build}>
          <Text>Partager !</Text>
        </TouchableOpacity>
      </View></>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});