import React, {useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';
const Header = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome User</Text>
      <Text style={styles.textStyle}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    padding: 16,
    elevation: 4,
    shadowColor: '#ccc',
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
  },
});
export default Header;
