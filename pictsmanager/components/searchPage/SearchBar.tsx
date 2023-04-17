import {Pressable, TextInput, View, StyleSheet, Text, Dimensions, Image} from "react-native";

interface IProps {
    setSearchText: (searchText: string) => void;
    setIsProfile: (isProfile: boolean) => void;
}

export default function SearchBar(props: IProps) {
    function setSearchText(searchText: string) {
        props.setSearchText(searchText);
    }

    function setIsProfile() {
        props.setIsProfile(true);
    }
    function setIsImage() {
        props.setIsProfile(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Image source={require('../../assets/images/settings/mag.png')} style={styles.mag}/>
                <TextInput  placeholder={'Search'} onChangeText={(text: string) => props.setSearchText(text)}></TextInput>
            </View>
            <View style={styles.searchButtons}>
                <Pressable onPress={setIsProfile} style={styles.buttons}>
                    <Text>
                        People
                    </Text>
                </Pressable>
                <Pressable onPress={setIsImage} style={styles.buttons}>
                    <Text>
                        Images
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        flexDirection: 'column',
        justifyContent: 'center',
        rowGap: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    searchBar: {
        flexDirection: 'row',
        width: '80%',
        height: 40,
        backgroundColor: 'rgb(245,245,245)',
        justifyContent: 'flex-start',
        columnGap: 10,
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'grey',
        padding: 10,
    },
    searchButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 10,
        width: '80%',
    },
    buttons: {
        width: '35%',
        height: 30,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    mag: {
        width: 20,
        height: 20,
    }
});