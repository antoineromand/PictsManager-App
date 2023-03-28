import React, { useState, useEffect, useContext, createContext, ProviderProps } from "react";
import { useRouter, useSegments } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';


interface User {
    username: string;
}

interface AuthContextData {
    signIn: (username: string, password: string) => Promise<void>;
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
        router.replace("/(tabs)/home");
      }
    }, [user, segments]);
}

export async function signIn(username: string, password: string): Promise<{ success: boolean; user?: User; token?: string; error?: string }> {
    try {
        if(username.toLowerCase() === "admin" && password.toLowerCase() === "admin") {
            await AsyncStorage.setItem('@token', 'token');
            return { success: true, user: { username: "admin" }, token: "token" };
        }
    } catch (error: any) {
        return { success: false, error: error };
    }
    return { success: false, error: "Invalid username or password" };
}

export function Provider({ children }: any): JSX.Element {
    const [user, setUser] = useState<User | null>(null);
    
    useProtectedRoute(user);
    
    const authContextData: AuthContextData = {
        signIn: async (username, password) => {
            const result = await signIn(username, password);
            if (result.success && result.user) {
                setUser(result.user);
            }
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
    
    


