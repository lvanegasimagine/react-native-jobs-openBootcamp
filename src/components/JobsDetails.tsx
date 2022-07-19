import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  ImageBackground,
  ScrollView,
  Linking,
  Alert
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import IconLabel from "./IconLabel";
import Divisor from "../utils/Divisor";

const JobsDetails = ({ route, navigation }: any) => {

  const { nombre, jornada, presencialidad, experiencia, empresa, ubicacion, region, descripcion, salarioMin, salarioMax, tecnologias, idiomas, beneficios } = route.params;

  const handleNavigation = async (url: string) => {
      const isSupported = await Linking.canOpenURL(url)
      if(isSupported){
        await Linking.openURL(url)
      }else{
        Alert.alert(`Don't know how to this url: ${url}`)
      }
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground style={styles.imageStyle} source={{ uri: 'https://d2v9ipibika81v.cloudfront.net/uploads/sites/256/job4_f.jpg' }} />
      <View style={{ flexDirection: "row" }}>
        <AntDesign
          style={{ paddingTop: 10 }}
          name="calendar"
          size={24}
          color="black"
        />
        <Text style={styles.categories}>Jornada: {jornada} {presencialidad}</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>{nombre} - {experiencia}</Text>
        <View style={styles.iconLabelStyle}>
          <IconLabel
            name="direction"
            label={ubicacion}
            color={'#6c5ce7'}
          />
          <IconLabel name="location-pin" label={region} color={'#6c5ce7'} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 4, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.subtitle}> 💵 ${salarioMin} &nbsp; - </Text>
        <Text style={styles.subtitle}> 💰 ${salarioMax}</Text>
      </View>
      <Divisor title="Descripción" color="#e37a1a" />
      <Text style={styles.description}>{descripcion}</Text>
      <Divisor title="Requisitos" color="#e37a1a" />
      <View>
        {tecnologias.map((item: any, index: any) => (
          <Text key={item.id} style={{ padding: 5, fontWeight: '500', fontSize: 15 }}>{index + 1}. {item.nombre}</Text>
        ))}
      </View>
      <Divisor title="Idiomas" color="#e37a1a" />
      <View>
        {idiomas.map((item: any, index: number) => (
          <Text key={item.id} style={{ padding: 5, fontWeight: '500', fontSize: 15 }}>{index + 1}. {item.nombre}</Text>
        ))}
      </View>
      <Divisor title="Beneficios" color="#e37a1a" />
      {beneficios.map((item: any, index: number) => (
        <Text key={item.id} style={{ padding: 5, fontWeight: '500', fontSize: 15 }}>{index + 1}. {item.nombre}</Text>
      ))}

      <Divisor title="Informacion del Anunciate" color="#e37a1a" />
      <Pressable onPress={() => handleNavigation(empresa?.url)}>
        <Text style={styles.title}>{empresa?.nombre}</Text>
      </Pressable>
      <Text style={styles.subtitle}> 📍 {empresa?.ubicacion} </Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Aplica Aqui</Text>
      </Pressable>

    </ScrollView>
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
    // backgroundColor: 'white'
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
    textTransform: 'capitalize'
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
  },
  description: {
    paddingTop: 20,
    fontSize: 15,
    textAlign: 'justify'
  },
  iconLabelStyle: {
    paddingTop: 4,
    flexDirection: "row",
    marginTop: 3,
  },
  button: {
    marginTop: 25,
    marginBottom: 25,
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

export default JobsDetails;
