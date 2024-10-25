import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeComponent';
import RightHeader from './HomeSearchBarComponent';
import DetailsScreen from './UserDetailComponent';
import UsersList from './auth/UsersListComponent';
import MainComponent from './redux/ui/MainComponent';
import SectionListComponent from './SectionList';
import ExperienceComponent from './ExperienceComponent';
import UserPostList from './posts/UsersPostListComponent';
import LinkedInBottomNavigation from './LinkedBottomNavigation';
import GmailTopNavigation from './GmailTopNavigation';
import {
  HomeIcon,
  HomeHeaderTitle,
  UserProfileIcon,
  ViewUserListIcon,
  BuyProductIcon,
  MySkillsIcon,
  ExperienceIcon,
  ReadPostIcon,
} from './../utils/DrawerUtils';

export default function HomeDrawerComponent() {
  const [searchKey, setSearchKey] = useState('');

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: '#ffe5e5', // Background color for selected item
        drawerActiveTintColor: '#E8471C', // Text color for selected item
        drawerInactiveTintColor: '#000',
        headerStyle: {
          backgroundColor: '#E8471C',
        },
        headerTintColor: 'white',
        headerTitleStyle: { fontSize: 20 },
      }}>
      <Drawer.Screen
        name="Home"
        initialParams={{ searchKey }}
        options={{
          headerTitle: <HomeHeaderTitle />,
          headerRight: () => (
            <RightHeader
              onWrite={text => {
                console.info(text);
                setSearchKey(text);
              }}
            />
          ),
          drawerIcon: ({ color }) => <HomeIcon color={color} />,
        }}>
        {props => <HomeScreen {...props} searchKey={searchKey} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="User Profile"
        component={DetailsScreen}
        options={{
          drawerIcon: ({ color }) => <UserProfileIcon color={color} />,
        }}
      />
      <Drawer.Screen
        name="View User List"
        component={UsersList}
        options={{
          title: 'View User List',
          drawerIcon: ({ color }) => <ViewUserListIcon color={color} />,
        }}
      />
      <Drawer.Screen
        name="Buy Products"
        component={MainComponent}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => <BuyProductIcon color={color} />,
        }}
      />
      <Drawer.Screen
        name="My Skills"
        component={SectionListComponent}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => <MySkillsIcon color={color} />,
        }}
      />
      <Drawer.Screen
        name="My Experience"
        component={ExperienceComponent}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => <ExperienceIcon color={color} />,
        }}
      />
      <Drawer.Screen
        name="Read Posts"
        component={UserPostList}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => <ReadPostIcon color={color} />,
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
