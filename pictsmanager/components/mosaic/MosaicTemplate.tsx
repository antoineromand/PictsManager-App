import { View } from '../Themed';
import {Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import React, { useEffect, useState } from 'react';
import { IPicture } from '../../models/picture';
import MosaicPicture from './MosaicPicture';
import MosaicGallery from './MosaicGallery';
import axios, {AxiosRequestConfig} from "axios/index";
import {AxiosRequestCustom} from "../../app/utils/AxiosRequestCustom";

interface IProps {
    isShowingPictures: boolean,
    userId: number
}

export default function MosaicTemplate(props: IProps) {
    let [pictures, setPictures] = useState<IPicture[]>([{url: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'}]);
    let [isShowingPictures, setIsShowingPictures] = useState(props.isShowingPictures);

    const apiCall = async (url: string, method: string, data: { [key: string] : string }) => {
        const config: AxiosRequestConfig = {
            url: url,
            method: method,
            data: data,
        };
        return axios.request(config);
    }

    useEffect(() => {
        const request = new AxiosRequestCustom('', 'get', {});
      if(props.isShowingPictures) {
          const requestImage = {url: 'https://api.pexels.com/v1/search?query=sea&per_page=20&orientation=landscape&size=small', headers: {Authorization: `HYE05oqBNnQOA27M2TNBpVRfoFathL9EClnaxjoFyQySGbIRxbAFYlTt`}};
            request.getRequest(requestImage).then((response) => {
                let pictures: IPicture[] = [];
                response.data.photos.forEach((picture: any) => {
                    pictures.push({url: picture.src.landscape});
                });
                setPictures(pictures);
            });
      } else {
          const requestImage = {url: 'https://api.pexels.com/v1/search?query=sea&per_page=20&orientation=landscape&size=small', headers: {Authorization: `HYE05oqBNnQOA27M2TNBpVRfoFathL9EClnaxjoFyQySGbIRxbAFYlTt`}};
          request.getRequest(requestImage).then((response) => {
              let pictures: IPicture[] = [];
              response.data.photos.forEach((picture: any) => {
                  pictures.push({url: picture.src.landscape, caption: picture.photographer});
              });
              setPictures(pictures);
          });
      }
    }, [props.isShowingPictures]);

    return (
        <View style={styles.container}>
            { props.isShowingPictures ?
                <View style={styles.picGallery}>
                    {pictures.map((picture, index) => {
                        return <MosaicPicture key={index} url={picture.url!} isPicture={isShowingPictures}/>
                    })}
                </View>
                :
                <View style={styles.picGallery}>
                    <TouchableOpacity style={{backgroundColor: 'white'}} onPress={() => console.log('../../assets/images/newGallery.png')} >
                        <Image source={require('../../assets/images/newGallery.png')} style={styles.picture}/>
                    </TouchableOpacity>
                    {pictures.map((picture, index) => {
                        return <MosaicGallery key={index} url={picture.url!} isPicture={isShowingPictures} galleryName={picture.caption!}/>
                    })}
                </View>
            }
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
    },
    container: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        marginHorizontal: 10
    },
    picture: {
        width: 100,
        height: 100,
        margin: 6,
        borderRadius: 10,
    },
  });