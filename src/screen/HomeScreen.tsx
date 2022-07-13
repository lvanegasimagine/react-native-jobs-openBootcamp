import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import axios from 'axios';
import Card from "../components/HotelCard";
import { sitios } from "../data/sitios";

const HomeScreen = ({ navigation }: any) => {

  const [jobs, setJobs] = useState([]);
  console.log("🚀 ~ file: HomeScreen.tsx ~ line 10 ~ HomeScreen ~ jobs", jobs)
  

  useEffect(() => {
      getJobs();
  }, [])

  const getJobs = async () => {
    const {data} = await axios.get('https://jobrun-production.onrender.com/api/ofertas');
    setJobs(data.data);
   
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={sitios}
        renderItem={({ item }) => <Card info={item} navigation={navigation} />}
        keyExtractor={(hotel) => hotel.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
  },
});

export default HomeScreen;
