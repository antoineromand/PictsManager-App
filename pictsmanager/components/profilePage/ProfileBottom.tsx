import FilterBar from './FilterBar'
import MosaicTemplate from '../mosaic/MosaicTemplate';
import {View} from 'react-native';
import {useState} from "react";

interface IProps {
    userId: number;
    isShowingPictures: boolean;
}

export default function ProfileBottom(props: IProps) {
    return (
        <View>
            <MosaicTemplate isShowingPictures={props.isShowingPictures} userId={props.userId}/>
        </View>
    )
}