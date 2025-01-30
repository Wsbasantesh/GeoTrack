import React, { useState } from "react";
//import React from 'react';
import { View, Text, StatusBar, StyleSheet } from "react-native";
import Logo from "../../components/logo";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import LinkText from "../../components/LinkText";
import { useRouter } from "expo-router";
import { firebaseConfig } from "../../firebase-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //const [imei, setImei] = useState('');
  const router = useRouter(); // Hook

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleRegister = async () => {
    const validateInputs = () => {
      if (!username || !password || !confirmPassword) {
        alert("Todos los campos son obligatorios.");
        return false;
      }
      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false;
      }
      if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(username)) {
        alert("Formato de correo electrónico incorrecto.");
        return false;
      }
      if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
      }
      return true;
    };
  
    if (!validateInputs()) return;
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, username, password);
      console.log("Cuenta creada con éxito");
      router.push("/login");
    } catch (error) {
      console.error("Error al crear la cuenta:", error);
      alert("Hubo un problema al crear tu cuenta. Intenta nuevamente.");
    }
  };
  

  return (
    <View style={styles.container}>
      <StatusBar />
      <Logo style={styles.image} />
      <Text style={styles.title}>Crear Cuenta</Text>

      <InputField
        placeholder="Usuario"
        onChangeText={setUsername}
        style={styles.input}
      />

      <InputField
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />

      <InputField
        placeholder="Confirmar Contraseña"
        secureTextEntry
        onChangeText={setConfirmPassword}
        style={styles.input}
      />

      <Button
        title="Registrarse"
        style={styles.registerButton}
        textStyle={styles.registerText}
        onPress={() => handleRegister()}
      />

      <LinkText
        text="Create Account"
        style={styles.loginText}
        onPress={undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 40,
    fontWeight: "bold",
    fontFamily: "Kameron",
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    color: "white",
    fontSize: 16,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: "#1287c3",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  registerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    color: "#1287c3",
  },
});
