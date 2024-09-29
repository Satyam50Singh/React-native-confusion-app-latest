import * as React from 'react';
import {View, Text, StatusBar, Pressable, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SectionListComponent from './components/SectionList';
import HomeScreen from './components/HomeComponent';
import DetailsScreen from './components/UserDetailComponent';
import ConnectComponent from './components/ConnectComponent';
import ExperienceComponent from './components/ExperienceComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import LinkedInBottomNavigation from './components/LinkedBottomNavigation';
import GmailTopNavigation from './components/GmailTopNavigation';
import UserPostList from './components/posts/UsersPostListComponent';

const Stack = createNativeStackNavigator();

const RightHeader = props => {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleTextChange = text => {
    console.info(text);
    props.onWrite(text);
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {searchVisible ? (
        <TextInput
          onChangeText={text => handleTextChange(text)}
          placeholder="Search . . ."
          placeholderTextColor="white"
          style={{width: 120, color: 'white', fontSize: 18}}
        />
      ) : null}
      <Pressable
        onPress={() => {
          setSearchVisible(!searchVisible);
          handleTextChange('');
        }}
        style={{marginRight: 20}}>
        <FontAwesome name="search" size={22} color="white" />
      </Pressable>
      <Pressable onPress={() => console.warn('Hello World!!')}>
        <FontAwesome name="language" size={24} color="white" />
      </Pressable>
    </View>
  );
};

function App() {
  const [searchKey, setSearchKey] = useState('');

  return (
    <>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
        hidden={false}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="usersPosts">
          <Stack.Screen
            name="Home"
            initialParams={{searchKey}}
            options={{
              headerTitle: () => (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Feather name="menu" size={24} color="white" />
                  <Text style={{color: 'white', marginLeft: 8, fontSize: 18}}>
                    User Dashboard
                  </Text>
                </View>
              ),
              headerRight: () => (
                <RightHeader
                  onWrite={text => {
                    console.info(text);
                    setSearchKey(text);
                  }}
                />
              ),
              headerStyle: {
                backgroundColor: '#27292B',
              },
              headerTintColor: 'white',
              headerTitleStyle: {fontSize: 20},
            }}>
            {props => <HomeScreen {...props} searchKey={searchKey} />}
          </Stack.Screen>
          <Stack.Screen
            name="Personal Details"
            component={DetailsScreen}
            options={{
              title: 'User Dashboard',
              headerStyle: {
                backgroundColor: '#160DO8',
              },
            }}
          />
          <Stack.Screen
            name="Skill Set"
            component={SectionListComponent}
            options={{title: 'User Skills Set'}}
          />
          <Stack.Screen name="Connect" component={ConnectComponent} />
          <Stack.Screen name="Experience" component={ExperienceComponent} />
          <Stack.Screen
            name="linkedinBottomNav"
            component={LinkedInBottomNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GmailTopNav"
            component={GmailTopNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="usersPosts"
            component={UserPostList}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
