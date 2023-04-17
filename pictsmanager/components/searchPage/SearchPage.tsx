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
    const startUser: IUser = {
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
    };
    const [isProfile, setIsProfile] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [openProfile, setOpenProfile] = useState(false);
    const [user, setUser] = useState<IUser>(startUser);

    function toggleProfile() {
        setOpenProfile(!openProfile);
    }

    function toggleProfileAndSetUser() {
        setUser(startUser);
        setSearchText('');
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
                    <Profile showSettingsWheel={false} user={user} backLink={toggleProfileAndSetUser}/>
                </View>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 35,
        backgroundColor: 'white',
    },
    scrollV: {
        width: Dimensions.get('window').width,
    },
    searchBar: {
        marginTop: 20,
    },
    backGround: {
        padding: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});