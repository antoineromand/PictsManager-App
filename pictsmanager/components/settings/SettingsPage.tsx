import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import SettingsField from "./SettingsField";
import SettingsFriends from "./SettingsFriends";
import UserController from "../../controllers/user";
import EditModal from "./EditModal";

interface IProps {
    openSettings: () => void;
}

export default function SettingsPage(props: IProps) {
    const [circular, setCircular] = useState('../../assets/images/puppy.jpg');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');
    const [security, setSecurity] = useState(true);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [modalIndex, setModalIndex] = React.useState(0);
    const userController = new UserController();

    const toggleModal = (index: number) => {
        setModalIndex(index);
        setIsModalVisible(!isModalVisible);
    }

    const customModal = () => {
        setIsModalVisible(!isModalVisible);
    }

    const renderModal = () => {
        switch (modalIndex) {
            case 1:
                return <EditModal title={'Nom de Compte'} toggleModal={customModal} securityAction={userController.updateUserSecurity} content={username}/>;
            case 2:
                return <EditModal title={'Description'} toggleModal={customModal} modalAction={userController.updateUserProfile} content={description}/>;
            case 3:
                return <EditModal title={'Sécurité'} toggleModal={customModal} securityAction={userController.updateUserSecurity} content={security ? 'public' : 'private'}/>;
            case 4:
                return <EditModal title={'Mot de passe'} toggleModal={customModal} securityAction={userController.updateUserSecurity} content={'new password'}/>;
            default:
                return null;
        }
    }

    useEffect(() => {
        userController.getUserProfile().then((response) => setCircular(response.profilePicture!));
        userController.getUserProfile().then((response) => setDescription(response.description!));
        userController.getUserSecurity().then((response) => {
            setUsername(response.username!);
            setSecurity(response.public!);
        });

    }, [isModalVisible]);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backHome} onPress={() => props.openSettings()}>
                <Image source={require('../../assets/images/settings/backArrow.png')} style={styles.backHomeImage}/>
            </TouchableOpacity>
            <View style={styles.alignCenter}>
                <Image
                    style={styles.circularImage}
                    source={{uri: circular}}
                />
            </View>
            <View style={styles.fieldsColumn}>
                <SettingsField title={'Nom de Compte'} index={1} content={username} modalAction={toggleModal}/>
                <SettingsField title={'Description'} index={2} content={description} modalAction={toggleModal}/>
                <SettingsField title={'Sécurité'} index={3} content={security ? 'public' : 'private'} modalAction={toggleModal}/>
                <SettingsField title={'Mot de passe'} index={4} content={password} modalAction={toggleModal}/>
            </View>
            <View style={styles.flexRow}>
                <SettingsFriends title={'Amis'} />
                <SettingsFriends title={'Demandes d\'Amis'} />
            </View>
            <Pressable style={styles.deleteAccountButton} >
                <Text style={styles.deleteAccountText}>Delete Account</Text>
            </Pressable>
            {isModalVisible ? renderModal() : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
    },
    backHome : {
        zIndex: 1,
        position: 'absolute',
        top: 20,
        left: 0,
        margin: 15,
        backgroundColor: 'transparent',
    },
    backHomeImage: {
        height: 35,
        width: 35,
    },
    circularImage: {
        marginVertical: 20,
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 6,
    },
    alignCenter: {
        alignItems: 'center',
    },
    fieldsColumn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        rowGap: 20,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 40,
    },
    deleteAccountButton: {
        backgroundColor: 'rgb(212,65,65)',
        width: '70%',
        height: 50,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteAccountText: {
        color: 'white',
        fontWeight: 'bold',
    }
});