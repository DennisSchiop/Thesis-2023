import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button, Title, Paragraph } from 'react-native-paper';

const LoginPage = () => {
  const navigation = useNavigation();
  const [walletAddress, setWalletAddress] = useState('');

  const handleLogin = (loginType) => {
    // Replace this with your own logic to check the wallet address
    if (walletAddress) {
      if (loginType === 'user') {
        navigation.navigate('User');
      } else if (loginType === 'company') {
        navigation.navigate('Company');
      }
    } else {
      alert('Please enter your wallet address');
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Sneak-Check</Title>
      <Paragraph style={styles.paragraph}>Log in with your wallet address</Paragraph>
      <TextInput
        label="Wallet Address"
        value={walletAddress}
        onChangeText={(text) => setWalletAddress(text)}
        style={styles.input}
        autoFocus={true} // Add this prop to enable autofocus
      />
      <Button
        mode="contained"
        onPress={() => handleLogin('user')} // Pass 'user' as the loginType
        style={styles.button}
      >
        Log in as User
      </Button>
      <Button
                mode="contained"
        onPress={() => handleLogin('company')} // Pass 'company' as the loginType
        style={styles.button}
      >
        Log in as Company
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
  },
});

export default LoginPage;

