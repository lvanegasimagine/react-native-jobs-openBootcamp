import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from "react-native";

const JobsCard = ({info}: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>Hola</Text>
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get("window").width);
const offset = 40;
const radius = 7;

const styles = StyleSheet.create({
    container: {
      width: deviceWidth - 20,
      alignItems: "center",
      marginTop: 25,
    },
    cardContainer: {
      width: deviceWidth - offset,
      backgroundColor: "#ABC9FF",
      height: 220,
      borderRadius: radius,
  
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.75,
      shadowRadius: 5,
      elevation: 9,
    },
    textPrice: {
      position: "absolute",
      end: 15,
      bottom: 5,
      flex: 1,
      flexDirection: "column",
      textAlign: "left",
      color: "#fff",
      fontWeight: "600",
      fontSize: 25,
      paddingStart: 10,
    },
    iconFavorite: {
      flexDirection: 'row',
      position: "absolute",
      end: 15,
      bottom: 15,
      flex: 1,
      textAlign: "left",
      color: "#fff",
      fontWeight: "600",
      fontSize: 25,
      paddingStart: 10,
    },
    imageStyle: {
      height: 130,
      width: deviceWidth - offset,
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius,
      opacity: 0.9,
      alignContent: "center",
      alignSelf: "center",
    },
    titleStyle: {
      marginTop: 5,
      fontSize: 16,
      fontWeight: "800",
    },
    categoryStyle: {
      marginTop: 2,
      fontSize: 12,
    },
    infoStyle: {
      marginHorizontal: 10,
      marginVertical: 5,
    },
    iconLabelStyle: {
      flexDirection: "row",
      marginTop: 3,
    },
  });

export default JobsCard