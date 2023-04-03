import { View } from '../Themed';
import { StyleSheet} from 'react-native';
import FilterButton from './FilterButton';
import React, { useState } from 'react';

interface IProps {
    toggleFilter: () => void
}

export default function FilterBar(props: IProps) {
    let [button1, setButton1] = useState(true);
    let [button2, setButton2] = useState(false);

    function changeActiveButton(button: number) {
        if(button === 1)
        {
            setButton1(true);
            setButton2(false);
        }
        else{
            setButton1(false);
            setButton2(true);
        }
        props.toggleFilter();
    }

    return (
        <View style={styles.horizontalContainer}>
            <FilterButton url={require('../../assets/images/filterBar/pictures.png')} button={1} isActive={button1} setActiveButton={changeActiveButton}/>
            <FilterButton url={require('../../assets/images/filterBar/galleries.png')} button={2} isActive={button2} setActiveButton={changeActiveButton}/>
        </View>
    );
}

const styles = StyleSheet.create({
    horizontalContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        height: 'auto',
        backgroundColor: 'white',
    }
});