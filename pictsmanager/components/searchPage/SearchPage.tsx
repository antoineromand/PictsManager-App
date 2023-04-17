import { View, Text } from '../Themed';
import SearchBar from "./SearchBar";
import {useState} from "react";
import {Dimensions, Pressable, ScrollView, StyleSheet} from "react-native";
import SearchResult from "./SearchResult";
import MosaicTemplate from "../mosaic/MosaicTemplate";
import ProfilePage from '../profilePage/ProfilePage';
import Profile from "../profilePage/Profile";
import {IUser} from "../../models/user";
import TopBar from "../ui/TopBar";

export default function SearchPage() {
    const [isProfile, setIsProfile] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [openProfile, setOpenProfile] = useState(false);
    const [user, setUser] = useState<IUser>({
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
    });

    function toggleProfile() {
        setOpenProfile(!openProfile);
    }

    return (
        <View style={styles.backGround}>
            {!openProfile ?
                <View style={styles.container}>
                    <View style={styles.searchBar}>
                        <SearchBar setIsProfile={setIsProfile} setSearchText={setSearchText}/>
                    </View>
                    {isProfile ?
                        <ScrollView style={styles.scrollV}>
                            <SearchResult searchText={searchText} setOpenProfile={toggleProfile} setUser={setUser}/>
                        </ScrollView>
                        :
                        <ScrollView style={styles.scrollV}>
                            <MosaicTemplate isShowingPictures={true} />
                        </ScrollView>
                    }
                </View>
            :
                <View style={styles.container}>
                    <TopBar backLink={toggleProfile} />
                    <Profile user={user} />
                </View>
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
    },
    backGround: {
        backgroundColor: 'white',
    }
});