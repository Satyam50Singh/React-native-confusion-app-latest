import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SectionListComponent from './components/SectionList';
import HomeScreen from './components/HomeComponent';
import DetailsScreen from './components/UserDetailComponent';
import ConnectComponent from './components/ConnectComponent';
import ExperienceComponent from './components/ExperienceComponent';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Personal Details" component={DetailsScreen} />
        <Stack.Screen name="Skill Set" component={SectionListComponent} />
        <Stack.Screen name="Connect" component={ConnectComponent} />
        <Stack.Screen name="Experience" component={ExperienceComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
