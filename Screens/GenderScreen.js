import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

const GenderScreen = ({navigation}) => {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'white',flex:.5}}>
               <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Hi Nabeel,</Text>
               <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Select Your Gender</Text>
            </View>
            <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
                <TouchableOpacity style={styles.WithContainer}>
                    <Image style={styles.imagestyle} resizeMode='stretch' source={require('../Components/Pics/qwe.png')} />
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Mardana</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.WithContainer} onPress={() => navigation.navigate('FemaleStyleScreen')}>
                    <Image style={styles.imagestyle} resizeMode='stretch' source={require('../Components/Pics/zxc.png')} />
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Zanana</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>{ auth().signOut();}}>
                <Text style={{fontSize:25}}>logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    WithContainer: {
        alignItems: 'center',
    },
    imagestyle: {
        height: 200,
        width: 120,
    },
    line: {
        height: 200,
        width: 5,
        backgroundColor: 'black'
    }
})
export default GenderScreen;