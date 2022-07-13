import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const IconLabel = ({ name, label, color }: any) => {
  return (
    <View style={styles.container}>
      <Entypo name={name} size={14} color={color} style={styles.iconStyle}   />
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 12,
  },
  iconStyle: {
    marginRight: 2,
  },
});

export default IconLabel;
