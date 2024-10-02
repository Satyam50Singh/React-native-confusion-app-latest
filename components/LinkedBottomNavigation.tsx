import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeComponent';
import SectionListComponent from './SectionList';
import RegisterComponent from './auth/RegisterComponent';

const Tab = createBottomTabNavigator();

export default function LinkedInBottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#27292B',
          },
          headerTintColor: 'white',
          headerTitleStyle: {fontSize: 20},
        }}
      />
      <Tab.Screen
        name="MyNetwork"
        component={RegisterComponent}
        options={{
          headerStyle: {
            backgroundColor: '#27292B',
          },
          headerTintColor: 'white',
          headerTitleStyle: {fontSize: 20},
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={SectionListComponent}
        options={{
          headerStyle: {
            backgroundColor: '#27292B',
          },
          headerTintColor: 'white',
          headerTitleStyle: {fontSize: 20},
        }}
      />
    </Tab.Navigator>
  );
}
