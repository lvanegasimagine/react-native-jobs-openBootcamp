import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, ImageBackground, View } from "react-native";
// Hola mundo
import MenuButtonItem from "../components/MenuButtonItem";

const MenuItems = ({ navigation }: any) => {
  return (
    <DrawerContentScrollView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://img.freepik.com/foto-gratis/fondo-borroso-oscuro-abstracto-color-textura-gradiente-suave-patron-sitio-web-brillante-encabezado-banner-o-imagen-arte-grafico-barra-lateral_1258-88596.jpg",
        }}
        style={styles.banner}
      >
        <Image
          source={{
            uri: "https://media-exp1.licdn.com/dms/image/C4E0BAQFYpd4o3bagjg/company-logo_200_200/0/1631600310329?e=2147483647&v=beta&t=x1ZWQlwNYW7RthQqi4eugH52PwQvh6dUxckdaD3Gnx4",
          }}
          style={styles.imageProfile}
        />
        <Text style={styles.title}> Luis Vanegas </Text>
        <Text style={styles.subtitle}>lvanegas1429@gmail.com</Text>
        {/* <View style={styles.info}>
          <Text style={styles.metric}>Cities</Text>
          <Text style={styles.metric}>Reviews</Text>
          <Text style={styles.metric}>Photos</Text>
          <Text style={styles.metric}>Badges</Text>
        </View> */}
      </ImageBackground>
      <View style={styles.containerMenu}>
        <MenuButtonItem
          text="Home"
          icon="home"
          onPress={() => navigation.navigate("Home")}
        />
        <MenuButtonItem
          text="Favorites"
          icon="hearto"
          onPress={() => navigation.navigate("Favorites")}
        />
        <MenuButtonItem
          text="Bookings"
          icon="book"
          onPress={() => navigation.navigate("Bookings")}
        />
        <MenuButtonItem
          text="Cities"
          icon="picture"
          onPress={() => navigation.navigate("Cities")}
        />
        <MenuButtonItem
          text="Profile"
          icon="profile"
          onPress={() => navigation.navigate("Profile")}
        />
        <MenuButtonItem
          text="Logout"
          icon="logout"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMenu: {
    padding: 15,
  },
  banner: {
    padding: 16,
    paddingTop: undefined,
    width: undefined,
  },
  imageProfile: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // info: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexDirection: "row",
  // },
  title: {
    fontSize: 25,
    color: "#fff",
    marginTop: 15,
    fontWeight: "800",
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 12,
    color: "#aaaa",
    fontWeight: "400",
    marginLeft: 5
  },
  // // metric: {
  // //   color: "#fff",
  // //   fontSize: 16,
  // //   marginStart: 4,
  // //   alignItems: "center",
  // //   marginRight: 5,
  // },
  menu: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default MenuItems;
