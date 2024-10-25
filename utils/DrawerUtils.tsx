import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';

export const HomeHeaderTitle = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>User Dashboard</Text>
    </View>
  );
};

export const HomeIcon = ({ color }) => {
  return <FontAwesome name="home" size={20} color={color} />;
};
export const UserProfileIcon = ({ color }) => {
  return <FontAwesome name="user" size={20} color={color} />;
};
export const ViewUserListIcon = ({ color }) => {
  return <FontAwesome name="users" size={20} color={color} />;
};
export const BuyProductIcon = ({ color }) => {
  return <FontAwesome name="shopping-cart" size={20} color={color} />;
};
export const MySkillsIcon = ({ color }) => {
  return <Foundation name="lightbulb" size={22} color={color} />;
};
export const ExperienceIcon = ({ color }) => {
  return <MaterialCommunityIcons name="account-star" size={20} color={color} />;
};
export const ReadPostIcon = ({ color }) => {
  return <Entypo name="unread" size={20} color={color} />;
};

const styles = StyleSheet.create({
  titleContainer: { flexDirection: 'row', alignItems: 'center' },
  title: { color: 'white', marginLeft: 8, fontSize: 18 },
});
