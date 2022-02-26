import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      
      <Header>Signalement</Header>
      <br></br>
      <Paragraph>
        Veuillez vous connecter pour faire un signalement 
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
      >
        Login
      </Button>
      <Button
        mode="outlined" clear
        onPress={() => navigation.navigate('Inscription')}
      >
        Inscription
      </Button>
    </Background>
  )
}
