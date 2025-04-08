
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';


import SplashPage from './screens/splashPage';
import LandingPage from './screens/landingPage';
import SignUp from './screens/signUp';
import SignIn from './screens/signIn';
import HomePage from './screens/homePage';
import ReportDashboard from './screens/reportDashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="SplashPage" component={SplashPage} options={{ headerShown: false }} />
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="ReportDashboard" component={ReportDashboard} options={{ headerShown: false }}/>
        {/* Add other screens here */}
        
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
