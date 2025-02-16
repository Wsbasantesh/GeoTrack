import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import InputField from '@/components/InputField';
import { useRouter } from "expo-router";

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';


export default function MyDataScreen() {
  const router = useRouter();
  const auth = getAuth();


  const [userEmail, setUserEmail] = useState('');
  const [creationTime, setCreationTime] = useState('');


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email || '');
        setCreationTime(user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleString() : 'Fecha no disponible');
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [auth, router]);


  const handleLogout = async () => {
    try {
      await signOut(auth); 
      console.log('Sesión cerrada exitosamente');
      router.push('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email: {userEmail}</Text>
      <Text style={styles.text}>Fecha de creación de la cuenta: {creationTime}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#25292e',
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 10, 
  },
  button: {
    backgroundColor: '#1287c3', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


/*
loginButton: {
  backgroundColor: '#1287c3',
  paddingVertical: 15,
  paddingHorizontal: 40,
  borderRadius: 30,
  marginBottom: 20,
},*/