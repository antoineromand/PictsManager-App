import { View } from '../Themed';
import { StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

interface IProps {
    url: ImageSourcePropType;
    button: number;
    isActive: boolean;
    setActiveButton: (button: number) => void;
}

export default function FilterButton(props: IProps) {
    let [isActive, setActive] = useState(false);
    return (
        <View style={[!props.isActive && props.button === 1 ? styles.leftInactive : !props.isActive && props.button === 2 ? styles.rightActive : styles.container]}>
            <TouchableOpacity onPress={() => {
                if(props.isActive) return;
                props.setActiveButton(props.button);
                setActive(true);
                }} >
                <Image style={styles.icon} source={props.url} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    icon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        marginVertical: 10,
    },
    leftInactive: {
        flex: 1,
        alignItems: 'center',
        //background color grey
        backgroundColor: 'rgb(242,242,242)',
        borderWidth: 2,
        borderBottomColor: 'rgb(215,215,215)',
        borderLeftColor: 'rgb(242,242,242)',
        borderTopColor: 'rgb(242,242,242)',
        borderRightColor: 'rgb(215,215,215)',
        //border radius only bottom left
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    rightActive: {
        flex: 1,
        alignItems: 'center',
        //background color grey
        backgroundColor: 'rgb(242,242,242)',
        borderWidth: 2,
        borderBottomColor: 'rgb(215,215,215)',
        borderLeftColor: 'rgb(215,215,215)',
        borderTopColor: 'rgb(242,242,242)',
        borderRightColor: 'rgb(242,242,242)',
        //border radius only bottom right
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 4,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },

});