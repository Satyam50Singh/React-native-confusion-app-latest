import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState, useEffect} from 'react';
import RegisterComponent from './components/auth/RegisterComponent';
import {getData} from './utils/AsyncStorageUtils';
import HomeDrawerComponent from './components/HomeDrawerComponent';
import SignInComponent from './components/auth/SignInComponent';

const Stack = createNativeStackNavigator();

function App() {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchToken = async () => {
    const val = await getData('token');
    setToken(val);
    setLoading(false);
    console.info(val);
  };

  useEffect(() => {
    fetchToken();
  }, []);

  if (loading) {
    // Render a loading indicator while fetching the token
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          fontSize: 16,
        }}>
        <Text>Confusion App</Text>
      </View>
    ); // Replace this with a proper loading component if needed
  }
  return (
    <>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
        hidden={false}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={token ? 'mainComponent' : 'signIn'}>
          <Stack.Screen
            name="mainComponent"
            component={HomeDrawerComponent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="register"
            component={RegisterComponent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signIn"
            component={SignInComponent}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
