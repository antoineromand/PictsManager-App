import ProfilePage from "./ProfilePage";
import SettingsPage from "../settings/SettingsPage";
import React, {useState} from "react";
import {IUser} from "../../models/user";
import {View} from "react-native";

interface IProps {
    user: IUser;
    showSettingsWheel: boolean;
    backLink?: () => void;
}
export  default function Profile(props: IProps) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    function toggleSettings() {
        setIsSettingsOpen(!isSettingsOpen);
    }

    return(
        <View>
            {!isSettingsOpen ?
            <ProfilePage showSettingsWheel={props.showSettingsWheel} user={props.user} openSettings={toggleSettings} backLink={props.backLink}/>
            :
            <SettingsPage openSettings={toggleSettings}/>
            }
        </View>
    )
}