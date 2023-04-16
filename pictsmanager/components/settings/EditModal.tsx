import {TouchableOpacity, StyleSheet, Text, TextInput} from "react-native";
import { View } from '../Themed';
import React from "react";

interface IProps {
    title: string;
    toggleModal: () => void;
    modalAction?: (profile: IUserProfileResponse) => Promise<IUserProfileResponse>;
    securityAction?: (sec: IUserSecurityResponse) => Promise<IUserSecurityResponse>;
}
interface IUserSecurityResponse {
    "username"?: string,
    "email"?: string,
    "dateOfBirth"?: string,
    "public"?: boolean,
    "visibility"?: boolean,
    "password"?: string
}
interface IUserProfileResponse {
    "description"?: string,
    "profilePicture"?: string,
    "coverPicture"?: string
}
export default function EditModal(props: IProps){
    const [newDescription, setNewDescription] = React.useState<string>('');
    function callModal(){
        switch(props.title){
            case 'Description':
                return props.modalAction!({description: newDescription}).then(() => {
                    props.toggleModal();
                });
            case 'Sécurité':
                return props.securityAction!({visibility: newDescription == 'public'}).then(() => {
                    props.toggleModal();
                });
            case 'Nom de Compte':
                return props.securityAction!({username: newDescription}).then(() => {
                    props.toggleModal();
                });
            case 'Mot de passe':
                return props.securityAction!({password: newDescription}).then(() => {
                    props.toggleModal();
                });
            default:
                return;
        }
    }
    const handleInputChange = (text: string) => {
        setNewDescription(text); // Update the state with the input value
    };

    return (
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{props.title}</Text>
                <TextInput style={styles.modalInput} onChangeText={handleInputChange} />
                <View style={styles.modalButtons}>
                    <TouchableOpacity style={styles.modalButton} onPress={props.toggleModal}>
                        <Text style={styles.modalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalConfirmButton} onPress={callModal}>
                        <Text style={styles.modalButtonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    modalTitle: {
    },
    modalContent: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{translateX: -143}, {translateY: -75}],
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        padding : 20,
    },
    modalButtons: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    modalButton: {
        backgroundColor: 'grey',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    modalConfirmButton: {
        backgroundColor: 'green',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    modalButtonText : {
    },
    modalInput: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 10,
        margin: 10,
        padding: 8,
    }
});