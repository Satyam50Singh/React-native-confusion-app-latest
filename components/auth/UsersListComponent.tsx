import React, {useEffect, useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './users/UserStyles';
import DeleteModal from './users/DeleteUserModal';
import EditUserModal from './users/EditUserModal';
import SearchBar from './users/SearchUser';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedItem, setSelectedItem] = useState([]);

  const callUsersApi = async () => {
    try {
      const url = 'http://192.168.1.4:3000/register/';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setUsers(result);
      setFilteredUsers(result);
    } catch (err) {
      console.error(err.message); // Set error message in state
    }
  };

  const handleEdit = item => {
    setShowEditModal(true);
    setSelectedItem(item);
  };
  const handleDelete = id => {
    setShowDelete(true);
    setSelectedUser(id);
  };

  useEffect(() => {
    callUsersApi();
  }, [showDelete, showEditModal]);

  return (
    <View>
      <SearchBar
        onSearch={data => {
          setFilteredUsers(data);
        }}
        data={users}
      />
      {filteredUsers.length
        ? filteredUsers.map(item => {
            return (
              <View style={styles.container} key={item.id}>
                <View style={styles.innerContainer}>
                  <View style={styles.flexBox}>
                    <Text style={[styles.textStyle, styles.emailFlex]}>
                      Name: {item.name}
                    </Text>
                    <Text style={[styles.textStyle, styles.passwordFlex]}>
                      Designation: {item.designation}
                    </Text>
                  </View>
                  <View style={styles.iconContainer}>
                    <Pressable onPress={() => handleEdit(item)}>
                      <Feather
                        name="edit"
                        size={26}
                        color="green"
                        style={styles.editIconStyle}
                      />
                    </Pressable>
                    <Pressable onPress={() => handleDelete(item.id)}>
                      <MaterialCommunityIcons
                        name="delete"
                        size={26}
                        color="red"
                      />
                    </Pressable>
                  </View>
                </View>
                <Text style={[styles.textStyle]}>Email: {item.email}</Text>
              </View>
            );
          })
        : null}

      <DeleteModal
        visible={showDelete}
        selectedUserId={selectedUser}
        onClose={() => setShowDelete(false)}
      />

      <EditUserModal
        visible={showEditModal}
        selectedUser={selectedItem}
        onClose={() => setShowEditModal(false)}
      />
    </View>
  );
};

export default UsersList;
