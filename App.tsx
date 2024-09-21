import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SectionListComponent from './components/SectionList';
import Icon from 'react-native-vector-icons/FontAwesome';

function DetailsScreen({ route, navigation }: { route: any, navigation: any }) {
  const { userName, age } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: '800', fontSize: 20 }}>User Details</Text>
      <View style={{
        borderWidth: 1,
        borderColor: 'black',
        width: '80%', // full width
        height: 0, // height of 0 to create a line
        backgroundColor: 'black', // color of the line
        marginVertical: 6, // spacing above and below
      }} />
      <Text style={{ fontWeight: '400', fontSize: 18 }}>User name: {JSON.stringify(userName)}</Text>
      <Text style={{ fontWeight: '400', fontSize: 16, marginBottom: 20 }}>Age: {JSON.stringify(age)}</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
}

const userList = [
  {

  }
]


function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <>
      <View style={{ flex: .3, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, color: 'black' }}>Home Screen</Text>
        <Button title='Go to Details...' onPress={
          () => navigation.navigate('Details', {
            userName: 'Satyam Singh',
            age: 86
          })} />

        <Icon name="home" size={30}></Icon>

      </View>
      <SectionListComponent />
    </>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;