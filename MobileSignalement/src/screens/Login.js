import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'



export default function Login({ navigation }) {

  const onLoginPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Accueil' }],
    })
  }
  // useEffect(() => {
  //   const requestOptions ={
  //     method: 'POST',
  //     headers: {'Content-Type':"application/json"},
  //     body: JSON.stringify({ "email": "tom@haha.com", "password": "kiki"})
  //   };
  //   fetch('http://localhost:9005/api/users/login',requestOptions)
  //   .then(response => response.json());
  //   //.then(console.log(response));
  // }

  
  // )

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      
      <Header>LOGIN</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Inscription')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
