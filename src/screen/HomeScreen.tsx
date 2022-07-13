import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
// import axios from 'axios';
// import Card from "../components/HotelCard";
import { sitios } from "../data/sitios";
import JobsResponse from "../api/JobsResponse";
import JobsCard from "../components/JobsCard";

const HomeScreen = ({ navigation }: any) => {

  const [jobs, setJobs]: any = useState([]);
  const [loading, setLoading]: any = useState(true);

  console.log("🚀 Hey Ana", jobs)

  useEffect(() => {
    getJobs();
  }, [])

  const getJobs = () => {
    JobsResponse.get('/ofertas')
      .then(async function (response) {
        setJobs(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <View style={styles.container}>
      {loading && <Text>Loading..</Text>}
      {/* {jobs && ( */}
      {/* <FlatList
        data={jobs.data}
        renderItem={({ item }) => <JobsCard info={item} />}
        keyExtractor={({ item }) => item.id}
        showsVerticalScrollIndicator={false}
      /> */}

      {/* )} */}

      {
        jobs?.data?.map((j: any) => {
        return <Text>Hola</Text>})
      }
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
