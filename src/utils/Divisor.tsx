import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Divisor = ({ title, color }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{title}</Text>
      <View style={{ borderBottomColor: `${color}`, borderBottomWidth: 1, }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingTop: 10,
    position: 'relative',
  },
  texto: {
    color: '#6c5ce7',
    fontWeight: '500',
    fontSize: 17,
    margin: 0,
    lineHeight: 25,
    marginBottom: 10
  }

})

export default Divisor