import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text, ScrollView, RefreshControl, Dimensions } from "react-native";
import AxiosConfig from "../config/AxiosConfig";
import JobsCard from "../components/JobsCard";
import { JobsInterface } from "../interface/Jobs.Interface";
import { Searchbar } from 'react-native-paper';

const HomeScreen = ({ navigation }: any) => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const [jobs, setJobs]: any = useState([]);
  const [filteredDataSource, setFilteredDataSource]: any = useState([]);
  const [loading, setLoading]: any = useState(true);
  const { data: dataSource } = jobs
  const { data: dataFiltered } = filteredDataSource

  const [refreshing, setRefreshing] = React.useState(false);

  const pullMe = () => {
    setRefreshing(true);
    setTimeout(() => {
      getJobs()
      setRefreshing(false)
    }, 500);
  }

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
        console.log(error)
      })
  }

  const searchFilterFunction = (text: any) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      // setSearchQuery(text);
      console.log(text)
      const newData = jobs?.data.filter(function (item: any) {
        const itemData = item?.nombre
          ? item?.nombre.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log("🚀 ~ file: HomeScreen.tsx ~ line 61 ~ newData ~ newData", newData)
      setFilteredDataSource({data: newData});
      setSearchQuery(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(jobs);
      console.log("🚀 ~ file: HomeScreen.tsx ~ line 66 ~ searchFilterFunction ~ jobs?.data", jobs?.data)
      setSearchQuery(text);
    }
  };
  if (loading) {
    return <View style={styles.containerLoading}><Text style={{ fontSize: 36 }}>Loading...</Text></View>
  }

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item: any) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.name);
  };

  const ItemView = ({ item }: any) => {
    return (
      // Flat List Item
      <Text style={{fontSize: 15}} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.nombre.toUpperCase()}
      </Text>
    );
  };
  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={(text) => searchFilterFunction(text)}
        value={searchQuery}
      />
       <FlatList
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => pullMe()} />}
          data={filteredDataSource?.data}
          renderItem={({ item }) => <JobsCard info={item} navigation={navigation} />}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          // renderItem={ItemView}

        />
      {/* {dataFiltered && ( */}
        {/* <FlatList
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => pullMe()} />}
          data={dataFiltered}
          renderItem={({ item }) => <JobsCard info={item} navigation={navigation} />}
          keyExtractor={(item, index) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        /> */}
      {/* )} */}
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
