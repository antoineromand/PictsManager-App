import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, Image } from 'react-native';
import { useAuth } from '../context/authProvider';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';


const SignUp = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null)

  const { signUp }: any = useAuth();

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;
    setDateOfBirth(currentDate ? selectedDate : null);
  };

  const showMode = () => {
    DateTimePickerAndroid.open({
      value: dateOfBirth ? dateOfBirth : new Date(),
      onChange,
      mode: 'date',
    });
  };

  const validate = () => {
    if(username && password && email && dateOfBirth && password === confirmPassword) {
      return false;
    }
    return true;
  }
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
            onChangeText={(val: string) => { setUsername(val) }}
            value={username ?? null ?? undefined}
            placeholder="Username ..."
          />
          <TextInput
            style={styles.input}
            onChangeText={(val: string) => { setEmail(val) }}
            value={email ?? null ?? undefined}
            placeholder="Email ..."
            keyboardType="email-address"
          />
          <TouchableOpacity onPress={() => showMode()} style={styles.dateInput}>
            <Text style={styles.dateInputText}>{dateOfBirth ? 'Date de naissance : ' + dateOfBirth.toLocaleDateString() : 'Date de naissance ...'}</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            onChangeText={(val: string) => { setPassword(val) }}
            value={password ?? null ?? undefined}
            placeholder="Mot de passe ..."
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            onChangeText={(val: string) => { setConfirmPassword(val) }}
            value={confirmPassword ?? null ?? undefined}
            placeholder="Confirmer votre mot de passe ..."
            secureTextEntry={true}
          />
          <Button
            title="S'inscrire"
            disabled={validate()}
            onPress={() => {
              signUp(username, email, dateOfBirth, password);
            }}
            color="#6c64ec"
          />
        </View>
        <View style={styles.text}>
          <Text>Vous avez un comtpes ? </Text>
          <TouchableOpacity  onPress={() => { }}>
            <Text style={{}}>
              <Link href='./sign-in' style={styles.link}>Connectez-vous !</Link>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  button: {
    width: '60%',
    marginTop: 32,
    backgroundColor: '#6c64ec',
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
  dateInput: {
    height: 48,
    width: '80%',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateInputText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'left',
  },
  selectedDate: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default SignUp;