import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Pressable, Modal} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Button} from 'react-native-elements';

const DeleteModal = props => {
  const callDeleteApi = async () => {
    const url = 'http://192.168.1.4:3000/register';
    try {
      const response = await fetch(`${url}/${props.selectedUserId}`, {
        method: 'Delete',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      if (result) {
        console.warn('User Deleted Successfully!');
        props.onClose();
      }
    } catch (err) {
      console.error(err.message); // Set error message in state
    }
  };

  return (
    <Modal transparent visible={props.visible} animinationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Delete User</Text>
          <Text style={styles.message}>
            Do you really want to delete this User?
          </Text>

          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <Button
                title="No"
                buttonStyle={styles.noButton}
                onPress={() => props.onClose()}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                title="Yes"
                buttonStyle={styles.yesButton}
                onPress={() => callDeleteApi()}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const callUsersApi = async () => {
    try {
      const url = 'http://192.168.1.4:3000/register/';
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

  const handleEdit = id => {
    setSelectedUser(id);
  };
  const handleDelete = id => {
    setShowDelete(true);
    setSelectedUser(id);
  };

  useEffect(() => {
    callUsersApi();
  }, [showDelete]);

  return (
    <View>
      {users.length
        ? users.map(item => {
            return (
              <View style={styles.container} key={item.id}>
                <Text style={[styles.textStyle, styles.emailFlex]}>
                  {item.email}
                </Text>
                <Text style={[styles.textStyle, styles.passwordFlex]}>
                  {item.password}
                </Text>
                <View style={styles.iconContainer}>
                  <Pressable onPress={() => handleEdit(item.id)}>
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
            );
          })
        : null}

      <DeleteModal
        visible={showDelete}
        selectedUserId={selectedUser}
        onClose={() => setShowDelete(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 18,
    marginHorizontal: 16,
    justifyContent: 'space-between',
    borderRadius: 6,
    borderColor: 'grey',
    padding: 12,
    borderWidth: 1.5,
    alignItems: 'center',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ccc',
    backgroundColor: 'white',
    paddingHorizontal: 28,
    paddingVertical: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    color: 'red',
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 18,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 4,
  },
  noButton: {
    // Add any specific styles for the "No" button if needed
  },
  yesButton: {
    backgroundColor: 'red',
  },
});

export default UsersList;
