import React from 'react';
import HomeScreen from './HomeComponent';
import SectionListComponent from './SectionList';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import RegisterComponent from './auth/RegisterComponent';

const Tab = createMaterialTopTabNavigator();

export default function GmailTopNavigation() {
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
        name="My Network"
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
