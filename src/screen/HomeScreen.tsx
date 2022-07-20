import React, { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet, View, FlatList, Text, RefreshControl, Dimensions, TouchableOpacity } from "react-native";
import AxiosConfig from "../config/AxiosConfig";
import JobsCard from "../components/JobsCard";
import { JobsInterface } from "../interface/Jobs.Interface";
import { Searchbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = ({ navigation }: any) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [jobs, setJobs]: any = useState([]);
  const [filteredDataSource, setFilteredDataSource]: any = useState([]);
  const [loading, setLoading]: any = useState(true);
  const [isView, setIsView] = useState(false)

  const [refreshing, setRefreshing] = useState(false);

  const pullMe = () => {
    setRefreshing(true);
    setTimeout(() => {
      getJobs()
      setRefreshing(false)
    }, 500);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerTitle: 'Home',
      headerRight: () => (
        <TouchableOpacity onPress={() => setIsView(prevCheck => !prevCheck)} style={{ marginRight: 15 }}>
          <AntDesign name='search1' size={24} color="black" />
        </TouchableOpacity>
      )
    })
  }, [navigation])

  useEffect(() => {
    getJobs()
  }, [])

  const getJobs = () => {
    AxiosConfig.get<JobsInterface>('/ofertas')
      .then(async function (response) {
        setJobs(response.data?.data);
        setFilteredDataSource(response.data?.data);
        setLoading(false);
      })
      .catch(function (error) {
      })
  }

  const searchFilterFunction = (text: any) => {
    if (text) {
      const newData = jobs?.data.filter(function (item: any) {
        const itemData = item?.nombre
          ? item?.nombre.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource({ data: newData });
      setSearchQuery(text);
    } else {
      setFilteredDataSource(jobs);
      setSearchQuery(text);
    }
  };
  if (loading) {
    return <View style={styles.containerLoading}><Text style={{ fontSize: 36 }}>Loading...</Text></View>
  }

  return (
    <View style={styles.container}>
      {isView &&
        <Searchbar
          style={styles.searchBar}
          placeholder="Search..."
          onChangeText={(text) => searchFilterFunction(text)}
          value={searchQuery}
        />
      }
      <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => pullMe()} />}
        data={filteredDataSource?.data}
        renderItem={({ item }) => <JobsCard info={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);

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
  },
  searchBar: {
    width: deviceWidth - 20,
    alignItems: "center",
    marginTop: 25,
  },
});

export default HomeScreen;
