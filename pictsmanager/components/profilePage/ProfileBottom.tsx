import FilterBar from './FilterBar'
import MosaicTemplate from '../mosaic/MosaicTemplate';
import {View} from 'react-native';
import {useState} from "react";
import {IPicture} from "../../models/picture";

interface IProps {
    userId: number;
    isShowingPictures: boolean;
    fullScreenPicture: (picture: IPicture) => void;
}

export default function ProfileBottom(props: IProps) {
    function fullScreenPicture(picture: IPicture) {
        props.fullScreenPicture(picture);
    }

    return (
        <View>
            <MosaicTemplate isShowingPictures={props.isShowingPictures} fullScreenPicture={fullScreenPicture}/>
        </View>
    )
}