import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from '../../firebase-config';
import { initializeApp } from 'firebase/app';
import Logo from '../../components/logo'; 

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Index() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        console.log("Usuario logueado");
        router.push("/about");
      } else {
        console.log("Usuario no logueado");
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Logo style={styles.image} />
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1287C3', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200, 
    height: 200,
  },
});
//