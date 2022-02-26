import React from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Choose from './choose'


const TestPage = ({navigation}) => {

    return(

        <View style = {styles.container}>
            <Text style = {styles.header}>
                Choose Your Test Subject...
            </Text>
            <Choose text1 = {"Physics"} text2 = {"Chemistry"} text3 = {"Mathematics"}/>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical : 20,
        paddingHorizontal : 20,
      },
      header : {
        fontSize : 20,
        fontWeight : "bold",
        marginBottom : 40,
      },
})

export default TestPage;