import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      
      {/* Main Tittle */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Geotrack</Text>
        <Logo style={styles.logo} />
      </View>
      
      {/* Clients will be added later */}
      <View style={styles.clientList}>
        <Text style={styles.clientListText}>Lista de clientes (vacío)</Text>
      </View>
      
      {/* Nav bar */}
      <View style={styles.navBar}>
        <Button 
        title="Home" 
        style={styles.mainButton} 
        textStyle={styles.mainText}
        onPress={() => {}} />
        <Button 
        title="Mapa" 
        style={styles.mainButton} 
        textStyle={styles.mainText}
        onPress={() => {}} />
        <Button 
        title="Clientes" 
        style={styles.mainButton} 
        textStyle={styles.mainText}
        onPress={() => {}} />
        <Button 
        title="Actualizar" 
        style={styles.mainButton} 
        textStyle={styles.mainText}
        onPress={() => {}} />
        <Button 
        title="Enviar" 
        style={styles.mainButton} 
        textStyle={styles.mainText}
        onPress={() => {}} />
        <Button 
        title="Cerrar Sesión" 
        style={styles.mainButton} 
        textStyle={styles.mainText}
        onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    height: '10%',
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontFamily: 'Kameron',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Kameron'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  clientList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: '#2c2c2c',
    fontWeight: 'bold',
    fontFamily: 'Kameron'
  },
  clientListText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Kameron'
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%',
    backgroundColor: '#1a1a1a',
  },
  mainButton: {
    backgroundColor: '#1287c3',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  mainText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
