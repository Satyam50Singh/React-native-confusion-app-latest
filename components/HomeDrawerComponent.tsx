import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeComponent';
import RightHeader from './HomeSearchBarComponent';
import DetailsScreen from './UserDetailComponent';
import UsersList from './auth/UsersListComponent';
import MainComponent from './redux/ui/MainComponent';
import {View, Text} from 'react-native';
import SectionListComponent from './SectionList';
import ExperienceComponent from './ExperienceComponent';
import UserPostList from './posts/UsersPostListComponent';
import LinkedInBottomNavigation from './LinkedBottomNavigation';
import GmailTopNavigation from './GmailTopNavigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HomeDrawerComponent() {
  const [searchKey, setSearchKey] = useState('');

  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        initialParams={{searchKey}}
        options={{
          headerTitle: () => {
            return (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: 'white', marginLeft: 8, fontSize: 18}}>
                  User Dashboard
                </Text>
              </View>
            );
          },
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
          drawerIcon: ({color}) => (
            <FontAwesome name="home" size={20} color={color} />
          ),
        }}>
        {props => <HomeScreen {...props} searchKey={searchKey} />}
      </Drawer.Screen>
      <Drawer.Screen name="Profile" component={DetailsScreen} />
      <Drawer.Screen
        name="View User List"
        component={UsersList}
        options={{
          headerTintColor: 'white',
          title: 'Users List',
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
      />
      <Drawer.Screen
        name="Buy Products"
        component={MainComponent}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="My Skills"
        component={SectionListComponent}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="My Experience"
        component={ExperienceComponent}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Read Posts"
        component={UserPostList}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Bottom Tab Navigation"
        component={LinkedInBottomNavigation}
      />
      <Drawer.Screen name="Top Navigation" component={GmailTopNavigation} />
    </Drawer.Navigator>
  );
}
