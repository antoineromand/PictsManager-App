import {Dimensions, StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";

interface IProps {
    title: string;
}
export default function SettingsFriends(props: IProps) {
  return (
      <TouchableOpacity style={styles.graySquare} >
          <Text style={styles.centerText}>{props.title}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    graySquare: {
        backgroundColor: 'rgb(242,242,242)',
        width: 100,
        height: 100,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
});