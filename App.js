import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage';
import UserPage from './UserPage';
import CompanyPage from './CompanyPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="User" component={UserPage} />
        <Stack.Screen name="Company" component={CompanyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
