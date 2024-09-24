import * as React from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
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
    <>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
        hidden={false}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'User Dashboard',
              headerStyle: {
                backgroundColor: '#160DO8',
              },
              headerTintColor: 'white',
              headerTitleStyle: {fontSize: 20},
            }}
          />
          <Stack.Screen
            name="Personal Details"
            component={DetailsScreen}
            options={{title: 'User Dashboard'}}
          />
          <Stack.Screen
            name="Skill Set"
            component={SectionListComponent}
            options={{title: 'User Skills Set'}}
          />
          <Stack.Screen name="Connect" component={ConnectComponent} />
          <Stack.Screen name="Experience" component={ExperienceComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
