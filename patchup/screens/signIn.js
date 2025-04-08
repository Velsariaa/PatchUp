import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from '../styles/signUpPageStyles';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusField, setFocusField] = useState('');
  
  return (
    <SafeAreaView style={styles.innerContainer}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      
        <Image
          source={require('../assets/gabanklogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.titletext}>Login to your Account</Text>

        {/* Email Input */}
        <TextInput
          style={[
            styles.input,
            { borderBottomColor: focusField === 'email' ? '#6FB513' : '#ccc' },
          ]}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onFocus={() => setFocusField('email')}
          onBlur={() => setFocusField('')}
        />

        {/* Password Input */}
        <TextInput
          style={[
            styles.input,
            { borderBottomColor: focusField === 'password' ? '#6FB513' : '#ccc' },
          ]}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry
          value={password}
          onFocus={() => setFocusField('password')}
          onBlur={() => setFocusField('')}
        />

        <TouchableOpacity style={styles.loginbtn}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text>
          Don't have an account?{' '}
          <Text style={{ color: '#6FB513' }} onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>

        </KeyboardAvoidingView>
      </SafeAreaView>
    
  );
}
