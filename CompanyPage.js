import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import QRCode from 'qrcode.react';

const CompanyPage = () => {
  const [sneakerData, setSneakerData] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sneaker QR Code Generator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter sneaker data"
        onChangeText={setSneakerData}
        value={sneakerData}
      />
      {sneakerData ? (
        <QRCode value={sneakerData} size={200} />
      ) : (
        <Text style={styles.message}>Please enter sneaker data to generate a QR code</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CompanyPage;
