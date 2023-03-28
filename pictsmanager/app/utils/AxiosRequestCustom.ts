import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosRequestConfig } from 'axios';

export class AxiosRequestCustom {
    public url: string;
    public method: string;
    public data: { [key: string]: any };
    public headers: { [key: string]: any };

    constructor(url: string, method: string, data: { [key: string]: any }) {
        this.url = url;
        this.method = method;
        this.data = data;
        this.headers = {};
    }

    async send() {
        // get the token from AsyncStorage
        const token = await AsyncStorage.getItem('@token');
        console.log(token);
        // add the token to the headers if it exists
        if (token) {
            this.headers.jwt = token;
        }

        // create the axios request configuration object
        // const config: AxiosRequestConfig = {
        //     url: this.url,
        //     method: this.method,
        //     data: this.data,
        //     headers: this.headers,
        // };

        // return axios.request(config);
        return this.headers;
    }

    async getRequest() {
        return { url: this.url, method: this.method, data: this.data, headers: this.headers };
    }
}