import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosRequestConfig } from 'axios';

export class AxiosRequestCustom {
    // public url: string;
    // public method: string;
    // public data: { [key: string]: any };
    // public headers: { [key: string]: any };
    // public requestData: {url: string, method: string, data: { [key: string]: any }, headers: { [key: string]: any }};

    // constructor(url: string, method: string, data: { [key: string]: any }) {

    //     // this.url = url;
    //     // this.method = method;
    //     // this.data = data;
    //     // this.headers = {};
    // }
    // constructor(requestData: {url: string, method: string, data: { [key: string]: any }, headers: { [key: string]: any }}) {
    //     this.requestData = requestData;
    // }

    async callWithoutToken() {
        const config: AxiosRequestConfig = {
            url: this.url,
            method: this.method,
            data: this.data,
        };

        return axios.request(config);
    }

    async send() {
        // get the token from AsyncStorage
        const token = await AsyncStorage.getItem('@token');
        console.log(token);
        // add the token to the headers if it exists
        if (token) {
            // this.requestData.headers.jwt = token;
        }

        // create the axios request configuration object
        // const config: AxiosRequestConfig = {
        //     url: this.url,
        //     method: this.method,
        //     data: this.data,
        //     headers: this.headers,
        // };

        return "axios.request(config)";
        // return this.requestData.headers;
    }

    async getRequest(requestData: {url: string, body?: { [key: string]: any }, headers?: { [key: string]: string }}) {
        const config: AxiosRequestConfig = {
            url: requestData.url,
            method: 'GET',
            data: requestData.body,
            headers: requestData.headers,
        };
        axios(config).then((response) => {  
            return response.data;
        }).catch((error) => {
            return error;
        });
        return axios.request(config);
    }
}