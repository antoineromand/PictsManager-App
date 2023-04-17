import {View, Text, StyleSheet, Dimensions} from "react-native";
import ResultProfile from "./ResultProfile";
import {useEffect, useState} from "react";
import {IUser} from "../../models/user";

interface ProfileObject {
    username: string;
    profil_picture: string;
    visibility: boolean;
}

interface IProps {
    searchText: string;
    setOpenProfile: () => void;
    setUser: (user: IUser) => void;
}

export default function SearchResult(props: IProps) {
    const [profiles, setProfiles] = useState<ProfileObject[]>([]);

    useEffect(() => {
        setProfiles([]);
        if(props.searchText === '') {setProfiles([]); return;}
        fetch('http://185.216.26.162:4000/public/api/user/search?username=' + props.searchText)
            .then(response => {
                if(response.ok)
                    return response.json()
                else
                    return []
            }
            )
            .then(data => {
                setProfiles(data.length !== 0 ? data : [])
            })
    }
    , [props.searchText])

    return (
        <View style={styles.container}>
            {profiles.length === 0 && <Text>No results</Text>}
            {profiles.map((profile, key) => {
                return <ResultProfile key={key} setUser={props.setUser} username={profile.username} profilePicture={profile.profil_picture} visibility={profile.visibility} setOpenProfile={props.setOpenProfile}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
});