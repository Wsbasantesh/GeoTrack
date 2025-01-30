import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Alert } from 'react-native';
import Logo from '../components/Logo';
import InputField from '../components/InputField';
import Button from '../components/Button';
import LinkText from '../components/LinkText';

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [imei, setImei] = useState('');
  const handleRegister = () => {
    if (!username || !password || !confirmPassword || !imei) {
      alert('Todos los campos son obligatorios.');
      console.log("No lleno campos");
      return;
    }
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      console.log("contrasena mal");
      return;
    }
    alert('Cuenta creada correctamente.');
    console.log("todo bn");
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Logo style={styles.image} />
      <Text style={styles.title}>Crear Cuenta</Text>

    <InputField
      placeholder="Usuario"
      value={username}
      onChangeText={setUsername}
      style={styles.input}
    />

    <InputField
      placeholder="Contraseña"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
      style={styles.input}
    />

    <InputField
      placeholder="Confirmar Contraseña"
      secureTextEntry
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      style={styles.input}
    />

    <InputField
      placeholder="IMEI"
      value={imei}
      onChangeText={setImei}
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
              style={styles.loginText} onPress={undefined}      />
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
  registerButton: {
    backgroundColor: '#1287c3',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  registerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#1287c3',
  },
});
