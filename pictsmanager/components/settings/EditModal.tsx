import {TouchableOpacity, StyleSheet, Text, TextInput} from "react-native";
import { View } from '../Themed';

interface IProps {
    title: string;
    toggleModal: () => void;
    modalAction: () => void;
}

export default function EditModal(props: IProps){

    return (
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{props.title}</Text>
                <TextInput style={styles.modalInput} />
                <View style={styles.modalButtons}>
                    <TouchableOpacity style={styles.modalButton} onPress={props.toggleModal}>
                        <Text style={styles.modalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalConfirmButton} onPress={props.modalAction}>
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