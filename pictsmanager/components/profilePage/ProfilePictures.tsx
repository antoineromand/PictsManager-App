import { View } from '../Themed';
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IPicture } from '../../models/picture';
import {AxiosRequestCustom} from '../../app/utils/AxiosRequestCustom';
import PictureTemplate from '../pictures/PictureTemplate';

export default function ProfilePictures() {
    let [pictures, setPictures] = useState<IPicture[]>([{url: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'}]);
    // let [galleries, setGalleries] = useState<IPicture[]>([]);
    // let [activeButton, setActiveButton] = useState(1);

    useEffect(() => {
      const request = new AxiosRequestCustom();
      const picturesRequest = {url: 'https://api.pexels.com/v1/search?query=sea&per_page=20&orientation=landscape&size=small', headers: {Authorization: `HYE05oqBNnQOA27M2TNBpVRfoFathL9EClnaxjoFyQySGbIRxbAFYlTt`}}; 

      request.getRequest(picturesRequest).then((response) => 
          {
            let pictures: IPicture[] = [];
            response.data.photos.forEach((picture: any) => {
              pictures.push({url: picture.src.landscape});
            });
            setPictures(pictures);
          }
        );
    }, []);

    return (
        <View style={styles.picGallery}>
            {pictures.map((picture, index) => {
                return <PictureTemplate key={index} url={picture.url!} />
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    picGallery: {
      flex: 1,
      //set flex direction to row as important
      flexDirection: 'row', 
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'flex-start',
      margin: 1,
      rowGap: 5,
      backgroundColor: 'white',
      marginHorizontal: 10
    },
  });