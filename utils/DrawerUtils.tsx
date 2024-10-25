import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import {useEffect, useState} from 'react';
import {getData} from './AsyncStorageUtils';

export const HomeHeaderTitle = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>User Dashboard</Text>
    </View>
  );
};

export const HomeIcon = ({color}) => {
  return <FontAwesome name="home" size={20} color={color} />;
};
export const UserProfileIcon = ({color}) => {
  return <FontAwesome name="user" size={20} color={color} />;
};
export const ViewUserListIcon = ({color}) => {
  return <FontAwesome name="users" size={20} color={color} />;
};
export const BuyProductIcon = ({color}) => {
  return <FontAwesome name="shopping-cart" size={20} color={color} />;
};
export const MySkillsIcon = ({color}) => {
  return <Foundation name="lightbulb" size={22} color={color} />;
};
export const ExperienceIcon = ({color}) => {
  return <MaterialCommunityIcons name="account-star" size={20} color={color} />;
};
export const ReadPostIcon = ({color}) => {
  return <Entypo name="unread" size={20} color={color} />;
};

export const DrawerTopHeader = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const fetchUsersData = async () => {
    try {
      const user_name = await getData('username');
      const user_email = await getData('email');

      console.info('Fetched Username:', user_name);
      console.info('Fetched Email:', user_email);

      setUsername(user_name);
      setEmail(user_email);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    fetchUsersData();
  }, []);
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('.././assets/images/banner.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.name}>{username}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {flexDirection: 'row', alignItems: 'center'},
  title: {color: 'white', marginLeft: 8, fontSize: 18},
  headerContainer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#E8471C',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  email: {
    fontSize: 14,
    color: 'white',
  },
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
