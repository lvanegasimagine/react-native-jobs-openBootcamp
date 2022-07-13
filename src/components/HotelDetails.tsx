import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import IconLabel from "./IconLabel";

const HotelDetails = ({ route, navigation }: any) => {

  const { name, image, price, country, distance, description, categories } = route.params;

  console.log('Aca toy')

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageStyle} source={{ uri: image }} />
      <View style={{ flexDirection: "row" }}>
        <AntDesign
          style={{ paddingTop: 10 }}
          name="tags"
          size={24}
          color="black"
        />
        <Text style={styles.categories}>{categories}</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>{name} - {price}</Text>
        <Text style={styles.description}>{description}</Text>

      </View>
        <View style={styles.iconLabelStyle}>
            <IconLabel
              name="direction"
              label={country}
              color={'#6c5ce7'}
            />
            <IconLabel name="location-pin" label={distance} color={'#6c5ce7'} />
          </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Reservar</Text>
      </Pressable>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const offset = 40;
const radius = 7;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignContent: "center",
    alignSelf: "center",
  },
  imageStyle: {
    height: 200,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
    objectFit: "cover",
  },
  categories: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "800",
    paddingStart: 10,
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    paddingTop: 20,
    fontSize: 15,
    textAlign: 'justify'
  },
  iconLabelStyle: {
    paddingTop: 20,
    flexDirection: "row",
    marginTop: 3,
  },
  button: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#377D71",
  },
  text: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default HotelDetails;
