import {Image, View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";

interface IProps {
    username: string;
    profilePicture: string;
    visibility: boolean;
}

export default function ResultProfile(props: IProps) {
    const defaultUri: string = 'https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800';

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={{uri: props.profilePicture == null ? defaultUri : props.profilePicture}} style={styles.profileImage}/>
                    <View style={styles.column}>
                        <Text style={styles.username}>{props.username}</Text>
                        <Text style={styles.visibility}>{props.visibility ? 'Public' : 'Private'}</Text>
                    </View>
                </View>
                <Image source={require('../../assets/images/settings/friend.png')} style={styles.friendImage}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    friendImage: {
        width: 35,
        height: 35,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: 10,
    },
    column: {
        flexDirection: 'column',
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    visibility: {
        fontSize: 12,
        color: 'lightgrey',
    }
});