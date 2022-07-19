import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import AxiosConfig from "../config/AxiosConfig";
import JobsCard from "../components/JobsCard";
import { JobsInterface } from "../interface/Jobs.Interface";

const HomeScreen = ({ navigation }: any) => {

  const [jobs, setJobs]: any = useState([]);
  const [loading, setLoading]: any = useState(true);
  const { data } = jobs

  useEffect(() => {
    getJobs()
  }, [])

  const getJobs = () => {
    AxiosConfig.get<JobsInterface>('/ofertas')
      .then(async function (response) {
        setJobs(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  if(loading){
    return <View style={styles.containerLoading}><Text style={{fontSize: 36}}>Loading...</Text></View>
  }
  return (
    <View style={styles.container}>
      
      {data?.data && (
        <FlatList
          data={data?.data}
          renderItem={({ item }) => <JobsCard info={item} navigation={navigation} />}
          keyExtractor={(item, index) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
  },
  containerLoading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HomeScreen;
