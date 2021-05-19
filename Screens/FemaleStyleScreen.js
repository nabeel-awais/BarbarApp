import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView,SafeAreaView,FlatList} from 'react-native';
import { dummyData } from '../data/Data';
import Carousel from '../Components/Carousel'
import ResultsList from '../Components/ResultsList';
const FemaleStyleScreen = () => {
  //const filerResultsByPrice = price => {
    //price==='$' || '$$' || '$$$'
    //return results.filter(results => {
     // return results.price === price;
    //});
  //};
  return (
  <SafeAreaView style={styles.Container}>
    <FlatList
      keyExtractor={(item, index) => 'key' + index}
      data={dummyData}
      ListHeaderComponent={<Carousel data={dummyData}/>}
      ListFooterComponent={ <ResultsList results={dummyData} title='Latest'/> }
      />
</SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
export default FemaleStyleScreen;

