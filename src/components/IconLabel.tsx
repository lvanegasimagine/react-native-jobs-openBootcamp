import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const info = (label: String, sublabel: string) => {
    
}

const IconLabel = ({ name, label, sublabel = '', color }: any) => {
  return (
    <View style={styles.container}>
      <Entypo name={name} size={14} color={color} style={styles.iconStyle}   />
      {sublabel.length > 0 ? <Text style={styles.labelStyle}>{label}, {sublabel}</Text> : <Text style={styles.labelStyle}>{label}</Text>}
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
    textTransform: 'capitalize'
  },
  iconStyle: {
    marginRight: 2,
  },
});

export default IconLabel;
