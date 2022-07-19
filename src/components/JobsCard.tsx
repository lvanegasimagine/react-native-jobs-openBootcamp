import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    ToastAndroid
} from "react-native";
import IconLabel from "./IconLabel";
import { Entypo } from '@expo/vector-icons';

const iconColor = "#6c5ce7";

const JobsCard = ({ info, navigation }: any) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const { nombre, jornada, ubicacion, region } = info;

    const addFavorite = () => {
        ToastAndroid.show('Agregado a Favorito ❤️🥳!', ToastAndroid.SHORT);
        setIsFavorite(!isFavorite)
        console.log('Agrego a favorito');
    }

    const removeFavorite = () => {
        ToastAndroid.show('Eliminado de Favorito 💔😟!', ToastAndroid.SHORT);
        setIsFavorite(!isFavorite)
        console.log('Removido de favorito');

    }
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Details", info)}>
                    <ImageBackground style={styles.imageStyle} source={{ uri: 'https://d2v9ipibika81v.cloudfront.net/uploads/sites/256/job4_f.jpg' }}>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={styles.infoStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate("Details", info)}>
                        <Text style={styles.titleStyle}>{nombre}</Text>
                    </TouchableOpacity>
                    <View style={styles.iconFavorite}><Entypo name={isFavorite ? "heart" : 'heart-outlined'} onPress={!isFavorite ? addFavorite : removeFavorite} size={34} color={isFavorite ? '#e0264d' : '#e1e3e4'} /></View>
                    <Text style={styles.categoryStyle}>Jornada: <Text style={{ fontWeight: 'bold' }}>{jornada}</Text> </Text>
                    <View style={styles.iconLabelStyle}>
                        <IconLabel
                            name="direction"
                            label={ubicacion}
                            color={iconColor}
                        />
                        <IconLabel name="location-pin" label={region} color={iconColor} />
                    </View>
                </View>
            </View>
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