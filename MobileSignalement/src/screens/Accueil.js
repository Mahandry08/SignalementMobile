import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Accueil({ navigation }) {
  const onSignalerPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Signal' }],
    })
  }
  return (
    <Background>
      <Header>Welcome Back to our app</Header>
      <Paragraph>
        
      </Paragraph>
      <Button
        mode="outlined" clear
        onPress={onSignalerPressed}
      >
        Signaler
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Accueil' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
