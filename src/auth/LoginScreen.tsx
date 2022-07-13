import React from 'react';
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
  Alert,
} from "react-native";
import { useState } from "react";

const LoginScreen = ({ navigation }: any) => {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const submitHandler = () => {
    Alert.alert('Bienvenido a mi App', '', [
      { text: 'OK' }
    ])
    navigation.navigate('Info')
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/backimage.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Sign In to your account</Text>
      <TextInput style={styles.textInput} placeholder="example@domain.com" defaultValue={email} onChangeText={(e) => setEmail(e)} />
      <TextInput style={styles.textInput} secureTextEntry={true} placeholder="****" defaultValue={password} onChangeText={(e) => setPassword(e)} />
      <Pressable style={styles.button} onPress={submitHandler}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
    // <NavigationRoutes/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3CEDF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    color: "#34434D",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "#34434D",
    marginBottom: 20,
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#161153",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default LoginScreen;
