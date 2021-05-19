import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView,Modal,Pressable} from 'react-native';
import MainButton from '../Components/MainButton'

function Form({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(route)
  const { title } = route.params;
  const { pic } = route.params;
  const { rating } = route.params;
  const { disc } = route.params;
  //const { otherParam } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 / 2, justifyContent: 'center', alignItems: 'center'}}>
        <Image resizeMode='contain' source={pic} style={styles.image} />
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{title}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Rating:{rating}/5</Text>
        <View style={{height:3,width:'100%',backgroundColor:'black',marginTop:50}}  />
      </View>
      <View style={{ flex: 1/2, alignItems: 'center', justifyContent: 'center' }}>
        <SafeAreaView >
          <ScrollView style={{ overflow: 'scroll'}}>
            <Text>{disc}</Text>
          </ScrollView>
        </SafeAreaView>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{paddingTop:20}}>
        <MainButton title='BOOK NOW!' onPress={() => setModalVisible(true)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 360,
  },
  ButtonContainer: {
    paddingTop: 30,
    marginHorizontal: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
export default Form;