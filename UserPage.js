import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-modules-core';



const UserPage = () => {
  const [scanResult, setScanResult] = useState('');
  const [showScanner, setShowScanner] = useState(false);

  const handleScan = ({ data }) => {
    if (data) {
      setScanResult(data);
      setShowScanner(false);
    }
  };

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return false;
    }
    return true;
  };
  
  

  const openScanner = async () => {
    const hasPermission = await requestCameraPermission();
    if (hasPermission) {
      setShowScanner(true);
    }
  };

  const closeScanner = () => {
    setShowScanner(false);
  };

  const gallery = [
    // Add your gallery data here, for example:
    // { id: 1, title: 'Sneaker 1', img: '/path/to/sneaker1.jpg' },
    // { id: 2, title: 'Sneaker 2', img: '/path/to/sneaker2.jpg' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sneaker Authenticator</Text>
      <Text style={styles.subtitle}>User Dashboard</Text>
      {showScanner ? (
        <View>
          <Camera
            onBarCodeScanned={handleScan}
            style={styles.camera}
            barCodeScannerSettings={{
              barCodeTypes: [Camera.Constants.BarCodeType.qr],
            }}
          />
          <TouchableOpacity style={styles.button} onPress={closeScanner}>
            <Text style={styles.buttonText}>Close Scanner</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.button} onPress={openScanner}>
          <Text style={styles.buttonText}>Scan QR Code</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.galleryTitle}>My Sneaker Gallery</Text>
      <FlatList
        data={gallery}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 20,
  },
  button: {
  backgroundColor: '#3498db',
  padding: 10,
  alignItems: 'center',
  borderRadius: 5,
  marginBottom: 20,
  },
  buttonText: {
  color: '#fff',
  fontSize: 16,
  },
  camera: {
  height: 300,
  width: '100%',
  marginBottom: 20,
  },
  galleryTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 10,
  },
  card: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 5,
  backgroundColor: '#f1f1f1',
  borderRadius: 5,
  padding: 10,
  },
  image: {
  width: 100,
  height: 100,
  resizeMode: 'contain',
  marginBottom: 5,
  },
  cardTitle: {
  fontSize: 14,
  fontWeight: 'bold',
  textAlign: 'center',
  },
  });
  
  export default UserPage;
