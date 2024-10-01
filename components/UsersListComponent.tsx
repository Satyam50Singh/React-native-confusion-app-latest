import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const callUsersApi = async () => {
    const url = 'http://192.168.1.5:3000/register/';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setUsers(result);
    } catch (err) {
      console.error(err.message); // Set error message in state
    }
  };

  useEffect(() => {
    callUsersApi();
  }, []);

  return (
    <View>
      {users.length
        ? users.map(item => {
            return (
              <View style={styles.container} key={item.id}>
                <Text style={[styles.textStyle, emailFlex]}>{item.email}</Text>
                <Text style={[styles.textStyle, passwordFlex]}>
                  {item.password}
                </Text>
                <View style={styles.iconContainer}>
                  <Feather
                    name="edit"
                    size={26}
                    color="green"
                    style={styles.editIconStyle}
                  />
                  <MaterialCommunityIcons name="delete" size={26} color="red" />
                </View>
              </View>
            );
          })
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 12,
    justifyContent: 'space-between',
    borderRadius: 12,
    borderColor: 'black',
    padding: 12,
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 18,
  },
  passwordFlex: {flex: 0.5},
  emailFlex: {
    flex: 0.7,
  },
  iconContainer: {flexDirection: 'row'},
  editIconStyle: {marginRight: 8},
});

export default UsersList;
