import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUserSecurityResponse {
    "username"?: string,
    "email"?: string,
    "dateOfBirth"?: string,
    "public"?: boolean
}

interface IUserProfileResponse {
    "description"?: string,
    "profilePicture"?: string,
    "coverPicture"?: string
}

class UserController {
    private baseURL: string = 'http://185.216.26.162:4000';

    async getUserProfile(): Promise<IUserProfileResponse> {

        const token = await AsyncStorage.getItem('@token');
        if(!token) throw new Error('No token found');
        const response = await axios.get(`${this.baseURL}/private/api/user/me/profil`, {headers: {Authorization: `${token}`}});
        return response.data;
    }

    async getUserSecurity(): Promise<IUserSecurityResponse> {

        const token = await AsyncStorage.getItem('@token');
        if(!token) throw new Error('No token found');
        const response = await axios.get(`${this.baseURL}/private/api/user/me/security`, {headers: {Authorization: `${token}`}});
        return response.data;
    }

    async updateUserProfile(userProfile: IUserProfileResponse): Promise<IUserProfileResponse> {
        const token = await AsyncStorage.getItem('@token');
        if(!token) throw new Error('No token found');
        const config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://185.216.26.162:4000/private/api/user/me/profil`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            data: JSON.stringify(userProfile)
        }
        console.log(`${this.baseURL}`);
        const response = await axios.request(config);
        return response.data;
    }

    async updateUserSecurity(userSecurity: IUserSecurityResponse): Promise<IUserSecurityResponse> {
        const token = await AsyncStorage.getItem('@token');
        if (!token) throw new Error('No token found');
        const config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: 'http://185.216.26.162:4000/private/api/user/me/security',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            data: JSON.stringify(userSecurity)
        }
        const response = await axios.request(config);
        return response.data;
    }
}

export default UserController;
