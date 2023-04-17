import {Image, View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import {useEffect, useState} from "react";
import {IUser} from "../../models/user";
import UserController from "../../controllers/user";

interface IProps {
    username: string;
    profilePicture: string;
    visibility: boolean;
    setOpenProfile: () => void;
    setUser: (user: IUser) => void;
}

export default function ResultProfile(props: IProps) {
    const defaultUri: string = 'https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800';
    const testUser: IUser = {
        username: '',
        email: '',
        profile: {
            id: 0,
            userId: 0,
            pseudo: '',
            description: '',
            birthDate: new Date(),
            picture: '',
            background: '',
        },
        isPublic: false,
        isBanned: false,
        id: 0,
        password: '',
    }
    const [user, setUser] = useState<IUser>({} as IUser);
    const userController = new UserController();

    useEffect(() => {
        const myUser = userController.getUserProfileByUsername(props.username);
        myUser.then((value) => {
                testUser.username = value.username!;
                testUser.email = value.email!;
                testUser.isPublic = value.public!;
                const myUser2 = userController.getUserProfileByUsername(props.username);
                myUser2.then((value) => {
                        testUser.profile.description = value.profile.description!;
                        testUser.profile.picture = value.profile.profilePicture!;
                        testUser.profile.background = value.profile.coverPicture!;
                        setUser(testUser);
                        console.log(value);
                    }
                );
            }
        );

    }, [])

    function handlePress() {
        props.setUser(user);
        props.setOpenProfile();
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
                <View style={styles.row}>
                    <Image source={{uri: props.profilePicture == null ? defaultUri : props.profilePicture}} style={styles.profileImage}/>
                    <View style={styles.column}>
                        <Text style={styles.username}>{props.username}</Text>
                        <Text style={styles.visibility}>{props.visibility ? 'Public' : 'Private'}</Text>
                    </View>
                </View>
                <Image source={require('../../assets/images/settings/friend.png')} style={styles.friendImage}/>
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
        columnGap: 15,
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