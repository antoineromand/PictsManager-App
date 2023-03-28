import { Link } from 'expo-router';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Image} from 'react-native';
import { useAuth } from '../context/authProvider';

export const SignIn = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const { signIn }: any = useAuth();

  return (
    <View style={styles.master}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/icon-pm.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(val: string | null) => { setUsername(val ? val : null) }}
            value={username ?? null ?? undefined}
            placeholder="Nom d'utilisateur ..."
          />
          <TextInput
            style={styles.input}
            onChangeText={(val: string) => { setPassword(val) }}
            value={password ?? null ?? undefined}
            placeholder="Mot de passe ..."
            secureTextEntry={true}
          />
          <Button
            title="Connectez-Vous"
            disabled={username && password ? false : true}
            onPress={() => {
              signIn(username, password);
            }}
            color="#6c64ec"
          />
        </View>
        <View style={styles.text}>
          <Text>Pas de compte ? </Text>
          <TouchableOpacity onPress={() => { }}>
            <Text>
              <Link href='./sign-up' style={styles.link}>Inscrivez-vous !</Link>
            </Text>
          </TouchableOpacity>
        </View>
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
});

export default SignIn;