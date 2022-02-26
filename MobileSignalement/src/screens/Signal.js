import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import Paragraph from '../components/Paragraph'


export default function Signal({ navigation }) {

  const onSignalerPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Accueil' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      
      <Header>Signaler</Header>
      <Paragraph>Veuillez entrer les informations de votre signalement</Paragraph>
      <TextInput
        label="Nom"
        returnKeyType="next"
        autoCapitalize="none"
        autoCompleteType="nom"
      />
      <TextInput
        label="Région"
        returnKeyType="next"
        autoCapitalize="none"
        autoCompleteType="region"
      />
      <TextInput
        label="Déscription"
        returnKeyType="next"
        autoCapitalize="none"
        autoCompleteType="description"
      />
       
      

      <Button
        mode="contained"
        onPress={onSignalerPressed}
        style={{ marginTop: 24 }}
      >
          Valider
      </Button>
    </Background>
  )
}



