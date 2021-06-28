import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import BarberResultsDetail from './BarberResultsDetail';
import { useNavigation } from '@react-navigation/native';


const BarberResultsList = ({ results,hair }) => {
  const navigation = useNavigation();
  console.log(results);
  if (!results) {
    console.log("i am null");
    return null;
  }
  return (
    <View style={styles.conatainer}>
      <FlatList
        showsVerticalScrollIndicator
        data={results}
        keyExtractor={results => results.adress }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={{marginBottom:5,borderWidth:1}}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate('Form',{
                title: item.name,
                pic:{uri:item.url},
                disc:item.description,
                address:item.adress,
                hair:hair
              });
            }}        
            >
              <BarberResultsDetail result={item}/>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
    paddingTop: 5,
    color: 'white'

  },
  touchStyle: {
    backgroundColor: 'white',
    marginBottom: 5,
    elevation: 2,
    borderRadius: 4
  },
  conatainer: {
    paddingTop:5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  conatiner2: {
    flexDirection: 'row',
  },
  CountStyle: {
    fontSize: 18,
    color: '#CCCCCC',
    paddingTop: 5
  },
  row: {
    flex: 1,
    justifyContent: "space-around"
  }
});
export default BarberResultsList;
