import { useState } from "react";
import { TextInput, View , StyleSheet, Text, Button, TouchableOpacity} from "react-native";
import { violetColor } from "../../constants/Colors";

interface ImageForm {
    name: string;
    image: Uint8Array;
    date: Date;
}

export default function ImageFormComponent(props: {image: Uint8Array}) {
    const [name, setName] = useState<string>('');
    const [image, setImage] = useState<Uint8Array>(new Uint8Array(0));
    const date = new Date();
    const [imageForm, setImageForm] = useState<ImageForm | null>(null);

    const build = async () => {
        setImageForm({
            name: name,
            image: image,
            date: date,
        });
    }

    return (
        <View style={styles.container}>
            <TextInput
            onChangeText={(val: string) => { setName(val) }}
            value={name}
            placeholder="Description ..."
            />
            <TouchableOpacity onPress={build}>
                <Text>Partager !</Text>
            </TouchableOpacity>

            {
                imageForm && (
                    <><Text style={styles.send}>{imageForm?.name}</Text><Text style={styles.send}>{imageForm?.image}</Text><Text style={styles.send}>{imageForm?.date.toDateString()}</Text></>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    send: {
        backgroundColor: violetColor,
        color: 'white',
        width: 'fit-content',
        textAlign: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
});