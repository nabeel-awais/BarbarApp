import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList,StyleSheet,SafeAreaView } from 'react-native';
import BarberResultList from '../Components/BarberResultList';
import {BarberData} from '../data/BarberData';

const BarberList = ({route}) => {
    const { hair } = route.params;
    return (
        <SafeAreaView style={styles.Container}>
            <BarberResultList results={BarberData} hair={hair} />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default BarberList;