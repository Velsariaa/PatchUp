import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import styles from '../styles/signUpPageStyles';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [focusField, setFocusField] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>
        <SafeAreaView style={styles.innerContainer}>
          <Image
            source={require('../assets/gabanklogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.titletext}>Create an Account</Text>

          <View style={styles.rowContainer}>
            <TextInput
              style={[
                styles.halfInput,
                { borderBottomColor: focusField === 'firstName' ? '#01B3D7' : '#ccc' },
              ]}
              placeholder="First Name"
              onChangeText={setFirstName}
              value={firstName}
              onFocus={() => setFocusField('firstName')}
              onBlur={() => setFocusField('')}
            />
            <TextInput
              style={[
                styles.halfInput,
                { borderBottomColor: focusField === 'lastName' ? '#01B3D7' : '#ccc' },
              ]}
              placeholder="Last Name"
              onChangeText={setLastName}
              value={lastName}
              onFocus={() => setFocusField('lastName')}
              onBlur={() => setFocusField('')}
            />
          </View>

          <TextInput
            style={[
              styles.input,
              { borderBottomColor: focusField === 'email' ? '#01B3D7' : '#ccc' },
            ]}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setFocusField('email')}
            onBlur={() => setFocusField('')}
          />

          <TextInput
            style={[
              styles.input,
              { borderBottomColor: focusField === 'mobile' ? '#01B3D7' : '#ccc' },
            ]}
            placeholder="Mobile Number"
            onChangeText={setMobile}
            value={mobile}
            keyboardType="phone-pad"
            onFocus={() => setFocusField('mobile')}
            onBlur={() => setFocusField('')}
          />

          <TextInput
            style={[
              styles.input,
              { borderBottomColor: focusField === 'password' ? '#01B3D7' : '#ccc' },
            ]}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            onFocus={() => setFocusField('password')}
            onBlur={() => setFocusField('')}
          />

          <TextInput
            style={[
              styles.input,
              { borderBottomColor: focusField === 'confirmPassword' ? '#01B3D7' : '#ccc' },
            ]}
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            onFocus={() => setFocusField('confirmPassword')}
            onBlur={() => setFocusField('')}
          />

          <TouchableOpacity style={styles.loginbtn}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text>Already have an account? <Text style={{ color: '#01B3D7' }}>Sign In</Text></Text>

          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
