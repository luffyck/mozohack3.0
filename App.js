import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestPage from './components/testpage';
import PhysicsQ from './components/physics';
import ChemistryQ from './components/chemistry'
import MathsQ from './components/maths'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen 
          name = "Home" component={TestPage}
         />
         <Stack.Screen 
          name = "Testphy" component = {PhysicsQ}
        />
        <Stack.Screen
          name = "Testche" component = {ChemistryQ}
        />
        <Stack.Screen
          name = "Testmat" component = {MathsQ}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical : 80,
    paddingHorizontal : 20,
  },
  header : {
    fontSize : 20,
    fontWeight : "bold",
    marginBottom : 90,
  }
});
