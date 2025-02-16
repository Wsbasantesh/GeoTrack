import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react'; 
import html_script from '../../html_script';
import leaflet from "leaflet";


export default function MapScreen() {
  const mapRef = useRef(null); // Crea la referencia

  return (
    <>
      <SafeAreaView style={styles.Container}>
        <WebView ref={mapRef} source={{ html: html_script }} style={styles.Webview} />
        <View style={styles.ButtonArea}>
          {}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'grey',
  },
  text: {
    color: '#fff',
  },
  Webview: {
    flex: 2,
  },
  ButtonArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
