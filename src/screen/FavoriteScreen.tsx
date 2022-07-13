import { View, Text, Alert } from 'react-native'
import React from 'react'

const FavoriteScreen = ({route}: any) => {
  const { name, description, categories, country, price, distance, image  } = route.params;
  Alert.alert("🚀 ~ file: FavoriteScreen.js ~ line 6 ~ FavoriteScreen ~ id", `${route.params.name}, ${route.params.description} ${route.params.country} ${route.params.distance} ${route.params.image}`, [
    { text: 'OK' }
  ])
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30, color: "#0254a6" }}>Favorites Screen</Text>
    </View>
  );
}

export default FavoriteScreen