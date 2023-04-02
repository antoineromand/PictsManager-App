import FilterBar from './FilterBar'
import MosaicTemplate from '../mosaic/MosaicTemplate';
import {View} from 'react-native';
import {useState} from "react";

interface IProps {
    userId: number
}

export default function ProfileBottom(props: IProps) {
    let [isShowingPictures, setIsShowingPictures] = useState(true);
    function ToggleFilter(isPictures: boolean) {
        setIsShowingPictures(isPictures)
    }

    return (
        <View>
            <FilterBar toggleFilter={ToggleFilter}/>
            <MosaicTemplate isShowingPictures={isShowingPictures} userId={props.userId}/>
        </View>
    )
}