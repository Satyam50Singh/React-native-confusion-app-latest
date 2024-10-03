import React from 'react';
import {Text, View, Modal} from 'react-native';
import {Button} from 'react-native-elements';

export default DeleteModal = props => {
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
