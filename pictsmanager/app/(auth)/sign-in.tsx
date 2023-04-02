import { Link } from 'expo-router';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Image, ActivityIndicator} from 'react-native';
import { useAuth } from '../context/authProvider';

export const SignIn = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [succesMessage, setSuccesMessage] = useState<string | null>(null);
  const [showSuccessBanner, setShowSuccessBanner] = useState<boolean>(false);
  const [showErrorBanner, setShowErrorBanner] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const { signIn }: any = useAuth();

  return (
    <View style={styles.master}>
      
      <View style={styles.container}>
      {showErrorBanner && (
          <View style={styles.errorBanner}>
              <Text style={styles.message}>{errorMessage}</Text>
          </View>
      )}
      {showSuccessBanner && (
          <View style={styles.succesBanner}>
              <Text style={styles.message}>{succesMessage}</Text>
          </View>
      )}
        <Image
          source={require('../../assets/images/icon-pm.png')}
          style={styles.image}
          resizeMode="contain"
        />
        {!isConnected ? (
          <><View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(val: string | null) => { setUsername(val ? val.trim() : null); } }
              value={username ?? null ?? undefined}
              placeholder="Nom d'utilisateur ..." />
            <TextInput
              style={styles.input}
              onChangeText={(val: string) => { setPassword(val.trim()); } }
              value={password ?? null ?? undefined}
              placeholder="Mot de passe ..."
              secureTextEntry={true} />
            <Button
              title="Connectez-Vous"
              disabled={username && password ? false : true}
              onPress={async () => {
                const result = await signIn({ username: username, password: password});
                if (!result) {
                  setErrorMessage("Nom d'utilisateur ou mot de passe invalide");
                  setShowErrorBanner(true);
                  setShowSuccessBanner(false);
                } else {
                  setIsConnected(true);
                  setSuccesMessage("Vous êtes connecté !");
                  setShowErrorBanner(false);
                  setShowSuccessBanner(true);
                }
              } }
              color="#6c64ec" />
          </View><View style={styles.text}>
              <Text>Pas de compte ? </Text>
              <TouchableOpacity onPress={() => { } }>
                <Text>
                  <Link href='./sign-up' style={styles.link}>Inscrivez-vous !</Link>
                </Text>
              </TouchableOpacity>
            </View></>
        ) : (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#6c64ec" />
          </View>
        )}
        
      </View>
    </View>
  );
};

export const styles: {[key: string]: number | string | any} = StyleSheet.create({
  master: {
    padding: 16,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 75,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  input: {
    height: 48,
    width: '80%',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 24,
    marginTop: 16,
  },
  link: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#6c64ec',
  },
  errorBanner: {
    zIndex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 32,
  },
  succesBanner: {
    zIndex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 32,
  },
  message: {
      color: 'white',
      fontWeight: 'bold',
  },
});

export default SignIn;