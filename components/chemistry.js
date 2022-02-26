import React, {useState, useEffect} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const Chemistry = (props, { navigation }) => {
    const[questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3004/")
        .then((res) => setQuestions(res))
        .catch((err) => {
            console.log("Some stupid error", err);
        })
    }, []);
    return (
        <ScrollView>

            {
                questions.map((item,key) => {
                    key = {key}
                    return(
                        <View style={styles.container}>
                            <View style={styles.design}>
                                <View style={styles.view}>
                                    <Text style = {styles.textStyle}>
                                        {item.question}
                                    </Text>
                                    <Text style = {styles.textStyle}>
                                        {item.a}
                                    </Text>
                                    <Text style = {styles.textStyle}>
                                        {item.b}
                                    </Text>
                                    <Text style = {styles.textStyle}>
                                        {item.c}
                                    </Text>
                                    <Text style = {styles.textStyle}>
                                        {item.d}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    questions: {
        fontSize: 20
    },
    design: {
        backgroundColor: "#ffb3b3",
        padding: 15,
        borderRadius: 15,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 80
    },
    design1: {
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    textStyle : {
        fontSize : 20
    }

})

export default Chemistry;