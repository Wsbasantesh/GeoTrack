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

  /*
  CREAR CUENTA
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, user, password)
    .then(userCredential) =>{
      console.log('Cuenta creada')
      const user = userCredential.user;
      catch(error =>{
        console.log(error)
      })
    }
  }
  */
  
  const login = () => {
    /*console.log("Usuario", user);
    console.log("Contraseña", password);
    
    if (user === "mauricio") {
      alert(`Usuario: ${user}, Contraseña: ${password}`);
      router.push("/about"); 
    } else {
      alert("Error de inicio de sesión");
    }*/
   signInWithEmailAndPassword(auth, ElementInternals, password)
   .then((userCredential) => {
    console.log('sign')
    const user = userCredential.user;
   })
   .catch(error => {
    console.log(error)
   })
  };
  return (
    <View style={styles.container}>
      <StatusBar  />
      <Logo style={styles.image} />
      <Text style={styles.title}>Login GeoTrack</Text>

      <InputField 
        style={styles.input} 
        placeholder="Username" 
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

      <LinkText text="Are you not registered yet?" style={styles.registerText} onPress={() => {}} />
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
