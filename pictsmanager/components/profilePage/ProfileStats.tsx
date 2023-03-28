import {View, Text, StyleSheet} from 'react-native';

export default function ProfileStats(props: { title: string, value: number}) {
    return (
        <View style={styles.verticalContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.valueText}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    verticalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingVertical: 10,
        borderRadius: 20,
        margin: 10,
        marginHorizontal: 25
    },
    title: {
        fontSize: 10,
        color: 'lightgrey',
        fontWeight: 'bold',
        margin: 0
    },
    valueText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        margin: 0
    },
});