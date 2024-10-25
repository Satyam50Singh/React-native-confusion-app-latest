import React, {useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
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
import {TouchableOpacity, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {storeData} from './../utils/AsyncStorageUtils';
import {
  HomeIcon,
  HomeHeaderTitle,
  UserProfileIcon,
  ViewUserListIcon,
  BuyProductIcon,
  MySkillsIcon,
  ExperienceIcon,
  ReadPostIcon,
  DrawerTopHeader,
} from './../utils/DrawerUtils';

export default function HomeDrawerComponent() {
  const [searchKey, setSearchKey] = useState('');

  const Drawer = createDrawerNavigator();

  const CustomDrawerContent = props => {
    const handleLogout = () => {
      storeData('token', '');
      storeData('username', '');
      storeData('email', '');
      props.navigation.navigate('signIn');
    };
    return (
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{paddingTop: 0}}>
        <DrawerTopHeader />
        <DrawerItemList {...props} />
        <TouchableOpacity onPress={handleLogout} style={{padding: 16}}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome
              name="sign-out"
              size={20}
              color={'black'}
              style={{paddingStart: 8, paddingRight: 16}}
            />
            <Text style={{fontSize: 17, color: 'black', fontWeight: '500'}}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
    );
  };

  // Icon components
  const renderHomeIcon = color => <HomeIcon color={color} />;
  const renderUserProfileIcon = color => <UserProfileIcon color={color} />;
  const renderViewUserListIcon = color => <ViewUserListIcon color={color} />;
  const renderBuyProductIcon = color => <BuyProductIcon color={color} />;
  const renderMySkillsIcon = color => <MySkillsIcon color={color} />;
  const renderExperienceIcon = color => <ExperienceIcon color={color} />;
  const renderReadPostIcon = color => <ReadPostIcon color={color} />;
  const renderHomeRightIcon = () => (
    <RightHeader
      onWrite={text => {
        console.info(text);
        setSearchKey(text);
      }}
    />
  );

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#ffe5e5', // Background color for selected item
        drawerActiveTintColor: '#E8471C', // Text color for selected item
        drawerInactiveTintColor: '#000',
        headerStyle: {
          backgroundColor: '#E8471C',
        },
        headerTintColor: 'white',
        headerTitleStyle: {fontSize: 20},
      }}>
      <Drawer.Screen
        name="Home"
        initialParams={{searchKey}}
        options={{
          headerTitle: <HomeHeaderTitle />,
          headerRight: () => renderHomeRightIcon(),
          drawerIcon: ({color}) => renderHomeIcon(color),
        }}>
        {props => <HomeScreen {...props} searchKey={searchKey} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="User Profile"
        component={DetailsScreen}
        options={{
          drawerIcon: ({color}) => renderUserProfileIcon(color),
        }}
      />
      <Drawer.Screen
        name="View User List"
        component={UsersList}
        options={{
          title: 'View User List',
          drawerIcon: ({color}) => renderViewUserListIcon(color),
        }}
      />
      <Drawer.Screen
        name="Buy Products"
        component={MainComponent}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => renderBuyProductIcon(color),
        }}
      />
      <Drawer.Screen
        name="My Skills"
        component={SectionListComponent}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => renderMySkillsIcon(color),
        }}
      />
      <Drawer.Screen
        name="My Experience"
        component={ExperienceComponent}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => renderExperienceIcon(color),
        }}
      />
      <Drawer.Screen
        name="Read Posts"
        component={UserPostList}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => renderReadPostIcon(color),
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
