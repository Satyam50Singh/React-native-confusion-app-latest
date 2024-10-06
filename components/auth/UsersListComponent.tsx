import React, {useEffect, useState} from 'react';
import {Text, View, Pressable, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './users/UserStyles';
import DeleteModal from './users/DeleteUserModal';
import EditUserModal from './users/EditUserModal';
import SearchBar from './users/SearchUser';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserList} from './../redux/action';

const UsersList = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedItem, setSelectedItem] = useState([]);

  const users = useSelector(state => state.reducer);
  const dispatch = useDispatch();
  console.log('Data received', users);

  const handleEdit = item => {
    setShowEditModal(true);
    setSelectedItem(item);
  };
  const handleDelete = id => {
    setShowDelete(true);
    setSelectedUser(id);
  };

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]); // Update filteredUsers only when users changes

  useEffect(() => {}, [showDelete, showEditModal]);

  return (
    <View>
      <SearchBar
        onSearch={data => {
          setFilteredUsers(data);
        }}
        data={users}
      />
      <ScrollView>
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
      </ScrollView>

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
