import {IProfile} from "./profile";

export interface IUser {
    id: number;
    username: string;
    email: string;
    profile: IProfile;
    password: string;
    isPublic: boolean;
    isBanned: boolean;
}