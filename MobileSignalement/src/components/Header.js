import { red } from 'color-name'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 51,
    color: theme.colors.error,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
