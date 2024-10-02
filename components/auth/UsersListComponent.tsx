import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
} from 'react-native';
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

const EditUserModal = props => {
  const [name, setName] = useState(props.selectedUser.name || '');
  const [email, setEmail] = useState(props.selectedUser.email || '');
  const [password, setPassword] = useState(props.selectedUser.password || '');

  const callEditApi = async selectedUser => {
    const url = 'http://192.168.1.4:3000/register';
    console.info(`${url}/${props.selectedUser.id}`);

    try {
      console.info(JSON.stringify({name, email, password}));
      const response = await fetch(`${url}/${props.selectedUser.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...selectedUser, name, email, password}),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      if (result) {
        console.warn('User Edited Successfully!');
        props.onClose();
      }
    } catch (err) {
      console.error(err.message); // Set error message in state
    }
  };

  useEffect(() => {
    setName(props.selectedUser.name || '');
    setEmail(props.selectedUser.email || '');
    setPassword(props.selectedUser.password || '');
  }, [props.selectedUser]);

  return (
    <Modal transparent visible={props.visible} animinationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.titleEditUser}>Edit User</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Full Name:"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email Id:"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password:"
            secureTextEntry
            maxLength={6}
            value={password}
            onChangeText={text => setPassword(text)}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <Button
                title="Cancel"
                buttonStyle={styles.noButton}
                onPress={() => props.onClose()}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                title="Update"
                buttonStyle={styles.updateButton}
                onPress={() => callEditApi(props.selectedUser)}
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
      {users.length
        ? users.map(item => {
            return (
              <>
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
              </>
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

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    marginTop: 10,
    marginBottom: 18,
    marginHorizontal: 16,
    justifyContent: 'space-between',
    borderRadius: 6,
    borderColor: 'grey',
    padding: 12,
    borderWidth: 1.5,
    // alignItems: 'center',
  },
  innerContainer: {flexDirection: 'row', alignItems: 'center'},
  textStyle: {
    fontSize: 18,
  },
  flexBox: {flex: 1},
  passwordFlex: {},
  emailFlex: {},
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
  titleEditUser: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
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
  updateButton: {
    backgroundColor: 'green',
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'blue',
    marginBottom: 4,
    marginTop: 4,
    padding: 8,
  },
});

export default UsersList;
