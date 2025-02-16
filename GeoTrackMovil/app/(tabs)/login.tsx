import React, { useState } from 'react';
//import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import Logo from '../../components/logo';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import LinkText from '../../components/LinkText';
import { useRouter } from "expo-router"; 
import { firebaseConfig } from '../../firebase-config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {initializeApp} from 'firebase/app'

export default function LoginScreen() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Hook

  //Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const goRegister = () =>{
    router.push("/createAccount")
  }
  
  const login = async () => {
    if (!user || !password) {
      alert("Todos los campos son obligatorios.");
      console.log("Campos vacíos");
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, user, password);
      console.log("Inicio de sesión exitoso");
      router.push("/main");
    } catch (error) {
      console.error("Error en el inicio de sesión:");
      alert("Hubo un problema al iniciar sesión. Intenta nuevamente.");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar  />
      <Logo style={styles.image} />
      <Text style={styles.title}>Login GeoTrack</Text>

      <InputField 
        style={styles.input} 
        placeholder="Email" 
        secureTextEntry={false}
        onChangeText={setUser}  // Catch text
      />
      <InputField 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry
        onChangeText={setPassword}
      />
      <LinkText text="Forgot the password?" style={styles.forgotPassword} onPress={() => {}} />

      <Button title="Login" style={styles.loginButton} textStyle={styles.loginText} onPress={login} />

      <LinkText text="Are you not registered yet?" style={styles.registerText} onPress={goRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 150, 
    height: 150,
    resizeMode: "contain", 
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 40,
    fontWeight: 'bold',
    fontFamily: 'Kameron',
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#1287c3',
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#1287c3',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#1287c3',
  },
});
