import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Alert } from 'react-native';
import Logo from '../../src/components/Logo';
import InputField from '../../src/components/InputField';
import Button from '../../src/components/Button';
import LinkText from '../../src/components/LinkText';
import emailjs from '@emailjs/browser'; // need to install package

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendVerificationEmail = async () => {
    if (!email) {
      alert('Ingrese un correo electrónico.');
      return;
    }
    
    const code = generateCode();  // Generates validation code
    setGeneratedCode(code);
  
    const emailParams = {
      to_name: username || "Usuario",
      verification_code: code, // Template for mail
      to_email: email,
    };
  
    try {
      await emailjs.send(
        'service_xxxx',  //  Service ID
        'template_xxxx',  //  Template ID
        emailParams,
        'TXXXXXXpxxxxx'  // Public Key
      );
      alert('Correo enviado, revise tu bandeja de entrada.');
    } catch (error) {
      alert('No se pudo enviar el código.');
      console.error('Error enviando email:', error);
    }
  };

  const handleRegister = () => {
    if (!username || !password || !confirmPassword || !email || !verificationCode) {
      alert('Todos los campos son obligatorios.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    if (verificationCode !== generatedCode) {
      alert('Código de verificación incorrecto.');
      return;
    }
    alert('Cuenta creada correctamente.');
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Logo style={styles.image} />
      <Text style={styles.title}>Crear Cuenta</Text>

      <InputField placeholder="Usuario" value={username} onChangeText={setUsername} style={styles.input} />
      <InputField placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
      <InputField placeholder="Confirmar Contraseña" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} style={styles.input} />
      <InputField placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />

      <LinkText text="Enviar código de verificación" style={styles.verificationText} onPress={sendVerificationEmail} />
      <InputField placeholder="Código de verificación" value={verificationCode} onChangeText={setVerificationCode} style={styles.input} />
      
      <Button title="Registrarse" style={styles.registerButton} textStyle={styles.registerText} onPress={handleRegister} />
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
  verificationText: {
    color: '#1287c3',
    marginBottom: 10,
  },
});
