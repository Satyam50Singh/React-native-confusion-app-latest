import React, {useEffect, useState, useRef} from 'react';
import {Text, View, Modal, TextInput} from 'react-native';
import {Button} from 'react-native-elements';

export default EditUserModal = props => {
  const [name, setName] = useState(props.selectedUser.name || '');
  const [email, setEmail] = useState(props.selectedUser.email || '');
  const [password, setPassword] = useState(props.selectedUser.password || '');

  const emailRef = useRef();

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
            style={[
              styles.textInput,
              {borderColor: name.length === 0 ? 'red' : 'gray'},
            ]} // Change border color based on name input
            placeholder="Full Name:"
            value={name}
            onChangeText={text => {
              setName(text);
            }}
            onSubmitEditing={() => {
              emailRef.current.focus();
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email Id:"
            keyboardType="email-address"
            value={email}
            ref={emailRef}
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
