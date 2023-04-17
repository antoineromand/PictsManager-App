import { View, Text } from '../Themed';
import SearchBar from "./SearchBar";
import {useState} from "react";
import {Dimensions, ScrollView, StyleSheet} from "react-native";
import SearchResult from "./SearchResult";
import MosaicTemplate from "../mosaic/MosaicTemplate";

export default function SearchPage() {
    const [isProfile, setIsProfile] = useState(true);
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <SearchBar setIsProfile={setIsProfile} setSearchText={setSearchText}/>
            </View>
            {isProfile ?
                <ScrollView style={styles.scrollV}>
                    <SearchResult searchText={searchText}/>
                </ScrollView>
                :
                <ScrollView style={styles.scrollV}>
                    <MosaicTemplate isShowingPictures={true} />
                </ScrollView>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 30,
    },
    scrollV: {
        width: Dimensions.get('window').width,
    },
    searchBar: {
        // width: '100%',
    }
});