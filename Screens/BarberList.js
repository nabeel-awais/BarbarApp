import React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity,SafeAreaView, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import BarberResultsDetail from '../Components/BarberResultsDetail';
import { useNavigation } from '@react-navigation/native';

const BarberList = () => {
  const navigation = useNavigation();
    const [barberList, setBarber] = useState([]);
    useEffect(() => {
      console.log("i am here");
        const subscriber = firestore()
          .collection('Users')
          .onSnapshot(querySnapshot => {
            const barberList = [];
            querySnapshot.forEach(documentSnapshot => {
              barberList.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.adress,
              });
            });
            setBarber(barberList);
            console.log("i am here23");
          });
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);

    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.conatainer}>
      <FlatList
        showsVerticalScrollIndicator
        data={barberList}
        keyExtractor={barberList => barberList.adress }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={{marginBottom:5,borderWidth:1}}
            onPress={() => {
              navigation.navigate('Form',{
                title: item.name,
                pic:{uri:item.url},
                disc:item.description,
                address:item.adress,
              });
            }}        
            >
              <BarberResultsDetail result={item}/>
            </TouchableOpacity>
          );
        }}
      />
    </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white'
    },
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
})

export default BarberList;