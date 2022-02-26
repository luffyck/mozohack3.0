import React from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Choose = (props) => {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <View style = {styles.subjects}>
                <TouchableOpacity onPress = {() => navigation.navigate("Testphy")}>
                        <Text style = {styles.subtext}>
                            {props.text1}
                        </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.subjects}>
                    <TouchableOpacity onPress = {() => navigation.navigate("Testche")}>
                            <Text style = {styles.subtext}>
                                {props.text2}
                            </Text>
                    </TouchableOpacity>
            </View>
            <View style = {styles.subjects}>
                    <TouchableOpacity onPress = {() => navigation.navigate("Testmat")}>
                            <Text style = {styles.subtext}>
                                {props.text3}
                            </Text>
                    </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    subjects : {
        backgroundColor : "#ffb3b3",
        padding : 15,
        borderRadius : 15,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        marginBottom : 80
    },
    subtext : {
        color : "black",
        fontSize : 30
    }

})

export default Choose;