import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  Login,
  Inscription,
  ResetPasswordScreen,
  Accueil,
  Signal

} from './src/screens/Index'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Inscription" component={Inscription} />
          <Stack.Screen name="Accueil" component={Accueil} />
          <Stack.Screen name="Signal" component={Signal} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
