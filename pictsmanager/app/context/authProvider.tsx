import React, { useState, useEffect, useContext, createContext, ProviderProps } from "react";
import { useRouter, useSegments } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosRequestCustom } from "../utils/AxiosRequestCustom";
import { env } from "../../config/env";
import { LoginDTO, RegisterDTO } from "../utils/AuthType";

interface User {
    username: string;
    token: string;
}


interface AuthContextData {
    signIn: (credentials: LoginDTO) => Promise<boolean>;
    signOut: () => void;
    user: User | null;
}
  
const AuthContext = createContext<AuthContextData | null>(null);
  
export function useAuth(): AuthContextData | null {
    return useContext(AuthContext);
}

function useProtectedRoute(user: User | null): void {
    const segments = useSegments();
    const router = useRouter();
  
    useEffect(() => {
      const inAuthGroup = segments[0] === "(auth)";
      if (!user && !inAuthGroup) {
        router.replace("/sign-in");
      } else if (user && inAuthGroup) {
        setTimeout(() => {
            router.replace("/(tabs)/home");
        }, 500);
      }
    }, [user, segments]);
}

export async function signIn(credentials: LoginDTO): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
        const req = new AxiosRequestCustom(env.API_URL + '/public/api/auth/login', 'POST', {username: credentials.username, password: credentials.password});
        const response = await (await req.callWithoutToken());
        await AsyncStorage.setItem('@token', await response.headers['authorization']);
        if(response) return { success: true, user: { username: credentials.username, token: response.headers['authorization'] }};
    } catch (error: any) {
        return { success: false, error: error };
    }
    return { success: false, error: "Invalid username or password" };

}

export async function signUp(user: RegisterDTO): Promise<boolean> {
    try {
        const req = new AxiosRequestCustom(env.API_URL + '/public/api/auth/register', 'POST', user);
        const response = await (await req.callWithoutToken());
        if(response) return true;
    } catch (error: any) {
        return false;
    }
    return false;

}

export function Provider({ children }: any): JSX.Element {
    const [user, setUser] = useState<User | null>(null);
    
    useProtectedRoute(user);
    
    const authContextData: AuthContextData = {
        signIn: async (credentials: LoginDTO) => {
            const result = await signIn(credentials);
            if (result.success && result.user) {
                setUser(result.user);
                return true;
            }
            return false;
        },
        signOut: () => setUser(null),
        user,
    };
    
    return (
    <AuthContext.Provider value={authContextData}>
        {children}
    </AuthContext.Provider>
    );
}
    
    


