import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function DetailsScreen({route, navigation}: {route: any; navigation: any}) {
  const userdetail = route.params?.userdetail || {};
  const {
    userName = 'Guest',
    age = 'N/A',
    email = 'N/A',
    mobile = 'N/A',
    designation = 'N/A',
  } = userdetail;

  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>Hi, {userName}</Text>
      <View style={styles.line} />
      <Text style={styles.itemText}>
        <Text style={styles.boldText}>Designation:</Text> {designation}
      </Text>
      <Text style={styles.itemText}>
        <Text style={styles.boldText}>Age:</Text> {JSON.stringify(age)}
      </Text>
      <Text style={styles.itemText}>
        <Text style={styles.boldText}>Email:</Text> {email}
      </Text>
      <Text style={styles.itemText}>
        <Text style={styles.boldText}>Mobile:</Text> {mobile}
      </Text>
      <Button
        buttonStyle={styles.button}
        title="Go back"
        onPress={() => navigation.goBack()}
        icon={<Icon name="home" size={20} color="white" style={styles.icon} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use full height
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff', // Background color for the screen
  },
  greetingText: {
    fontWeight: '800',
    fontSize: 20,
    marginBottom: 10, // Add margin below greeting text
  },
  line: {
    borderWidth: 1,
    borderColor: 'purple',
    width: '50%',
    height: 0,
    backgroundColor: 'purple',
    marginVertical: 6,
  },
  itemText: {
    fontWeight: '400',
    fontSize: 18,
    marginBottom: 8, // Space between each item
  },
  boldText: {
    fontWeight: '600',
  },
  button: {
    backgroundColor: 'purple',
  },
  icon: {
    marginRight: 10,
  },
});

export default DetailsScreen;
